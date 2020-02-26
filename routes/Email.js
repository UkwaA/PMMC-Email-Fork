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
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
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
    html: `<h1>Hi ${user.name}</h1><br>
    <h4>${user.message}</h4>`
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
          Email : req.body.email
        }
      })
      .then(user =>{
          if(!user) {
            res.json({ error: 'Email does not exist' })            
          }
          else{                        
            let userInfo = req.body
            userInfo.name = user.Username
            userInfo.UserPK = user.UserPK            
            
            //send email to user            
            sendResetPasswordEmail(userInfo, info => {
                console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
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
        expiresIn: 3600 //expires in 1 hour
      })

    //let tokenDecode = jwt.decode(token, process.env.SECRET_KEY)
    // decodeUserPK = tokenDecode.userID

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
    to: "hoangt5@uci.edu", // need to put userEmail.email
    subject: "Reset Your Password", // Subject line
    html: `<h1>Hi ${userInfo.name}</h1><br>
    <h4>Email: ${userInfo.email}</h4>
    <h4>UserPK: ${userInfo.UserPK}</h4>    
    <h6>Here's the link to reset your password: </h6>
    <h6>http://localhost:4200/login/reset-password/${token}</h6>
    <h6>The link will expire within 1 hour</h6>
    <h6>If you did not request this, please ignore this email and your password will remain unchanged.</h6>`
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    callback(info);
};
//main().catch(console.error);
module.exports = app
