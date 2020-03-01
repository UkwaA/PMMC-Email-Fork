require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User')

const app = express.Router();
app.use(cors());
app.use(bodyParser.json());

/***********************
  SEND CONTACT EMAIL
***********************/
app.post('/send-contact-email', (req, res) => {
  console.log("request came");
  let user = req.body;
  console.log(user);
  sendContactEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendContactEmail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: "email-smtp.us-west-2.amazonaws.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: "AKIAZLUS724LTPCQBNLZ",
      pass: "BDoLIi+pcZX19ruFCRysMVNNxdxF2HbRou5fT785SM08"
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: "hoangt5@uci.edu", // sender address
    to: "hoangt5@uci.edu", // list of receivers
    subject: user.subject, // Subject line
    html: `
    <h4>There is a message from ${user.name} at ${user.email}</h4><br>
    <h4>Message content: ${user.message}</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/**************************
  SEND RESET PASSWORD EMAIL
***************************/


app.post('/send-reset-password-email', (req,res) => {
    User.findOne({
        where: {          
          Email : req.body.Email
        }
      })
      .then(user =>{
          if(!user) {
            res.json({ error: 'Email does not exist' })            
          }
          else{                        
            let userInfo = req.body
            userInfo.Username = user.Username
            userInfo.UserPK = user.UserPK            
            
            //send email to user            
            sendResetPasswordEmail(userInfo, info => {
                console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
                res.send(info);
              });
          }          
      })
      .catch(err => {
        res.send('error: ' + err)
      })

});


async function sendResetPasswordEmail(userInfo, callback) {
    // Create new token
    let userID = userInfo.UserPK
    let token = jwt.sign({userID}, process.env.SECRET_KEY, {
        expiresIn: 86400 //expires in 1 hour
      })

    //For Testing only
    let decodedToken = jwt.decode(token, process.env.SECRET_KEY)
    let decodeUserPK = decodedToken.userID
    let expirationTime = decodedToken.exp
    const date = new Date(0)
    date.setUTCSeconds(expirationTime)    

    let transporter = nodemailer.createTransport({
        host: "email-smtp.us-west-2.amazonaws.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            //This is AWS SES credential
          user: "AKIAZLUS724LTPCQBNLZ",
          pass: "BDoLIi+pcZX19ruFCRysMVNNxdxF2HbRou5fT785SM08"
        }
      });
    
    let mailOptions = {
    //from and to email needs to be verified in order to use SES
    // otherwise, need to upgrade to Premium
    from: "nhatv@uci.edu", // sender address need to change to Sponsor email
    to: "nhatv@uci.edu, hoangt5@uci.edu", // need to put userInfo.Email
    subject: "Reset Your Password", // Subject line
    html: `<h1>Hi ${userInfo.Username},</h1><br>
    <h4>Email: ${userInfo.Email}</h4>
    <h4>Decode UserPK: ${decodeUserPK} </h4>
    <h4>Token Expire: ${date} </h4>    
    <h4>Here's the link to reset your password: </h4>
    <h4>http://localhost:4200/login/reset-password/${token}</h4>
    <h4>The link will expire within 1 hour</h4>
    <h4>If you did not request this, please ignore this email and your password will remain unchanged.</h4>`
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    callback(info);
};

/**************************
 VALIDATE RESET PASSWORD TOKEN
 ***************************/
app.post('/reset-password/:token', (req, res) => {
    //Check if token is valid
    if(!req.body.resettoken){
        return res.status(500).json({ message: 'Token is required'})
    }
    else{
        let decodedToken = jwt.decode(req.params.token, process.env.SECRET_KEY)
        //Decode token to get userID and token expiration time
        let currentUserPK = decodedToken.userID
        let expirationTime = decodedToken.exp
        //get token expiration date
        if(expirationTime === undefined){
            return res.status(500).json({ message: 'Token is required'})
        }
        else{
            const date = new Date(0)
            date.setUTCSeconds(expirationTime)
            //Check if token is expired
            if(date.valueOf() > new Date().valueOf()){
                User.findOne({
                    where: {
                    UserPk: currentUserPK
                    }
                })
                .then(user =>{
                    if(!user){
                        //return res.status(409).json({ message: 'Invalid URL'})
                        res.json({message: 'UserNotFound'})
                    }
                    else{
                        res.json(user)
                    }
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            }
            else{
                res.json({ message: 'ExpiredToken' })
            }            
        }
    }
  });



//main().catch(console.error);
module.exports = app
