require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const User = require('../models/User')

const app = express.Router();
app.use(cors());
app.use(bodyParser.json());

//TO DO: need to update to sponsor's email server
let emailServer = {
  sponsorEmail: "hoangt5@uci.edu",
  host: "email-smtp.us-west-2.amazonaws.com",
  port: 587,
  //This is AWS SES credential
  user: "AKIAZLUS724LTPCQBNLZ",
  pass: "BDoLIi+pcZX19ruFCRysMVNNxdxF2HbRou5fT785SM08"
};

/***********************
  SEND CONTACT EMAIL
***********************/
app.post('/send-contact-email', (req, res) => {
  let user = req.body;
  sendContactEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendContactEmail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: emailServer.host,
    port: emailServer.port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: emailServer.user,
      pass: emailServer.pass
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: emailServer.sponsorEmail, // sender address
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
            userInfo.Email = user.Email
            userInfo.Password = user.Password            
            
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
    //Create new token
    let payload = {
      userID: userInfo.UserPK,
      userEmail: userInfo.Email,
      userPassword : userInfo.Password
    };

    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 3600 //expires in 1 hour
    })

    //For Testing only
    //let decodedToken = jwt.decode(token, process.env.SECRET_KEY)
    // let decodeUserPK = decodedToken.userID
    // let decodeUserEmail = decodedToken.userEmail
    // let decodeUserPassword = decodedToken.userPassword
    // let expirationTime = decodedToken.exp
    // const date = new Date(0)
    // date.setUTCSeconds(expirationTime)    

    let transporter = nodemailer.createTransport({
      host: emailServer.host,
      port: emailServer.port,
      secure: false, // true for 465, false for other ports
      auth: {
          //This is AWS SES credential
        user: emailServer.user,
        pass: emailServer.pass
      }
    });
    
    let mailOptions = {
    //from and to email needs to be verified in order to use SES
    // otherwise, need to upgrade to Premium
    from: emailServer.sponsorEmail, // sender address need to change to Sponsor email
    to: "hoangt5@uci.edu", // need to put userInfo.Email
    subject: "PMMC - Reset Your Password", // Subject line
    html: `<h1>Hi ${userInfo.Username},</h1><br>
    <h4>Email: ${userInfo.Email}</h4>    
    <h4>Here's the link to reset your password: </h4>
    <h4>http://localhost:4200/login/reset-password/${token}</h4>
    <h4>The link will expire within 1 hour.</h4>
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
    let decodedToken = jwt.decode(req.params.token, process.env.SECRET_KEY)
    //Decode token to get userID and token expiration time
    let decodedUserPK = decodedToken.userID
    let decodedUserEmail = decodedToken.userEmail
    let decodedUserPassword = decodedToken.userPassword
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
                UserPk: decodedUserPK
                }
            })
            .then(user =>{
                if(!user){
                    //return res.status(409).json({ message: 'Invalid URL'})
                    res.json({message: 'UserNotFound'})
                }
                else{
                  //Compare currentPassword with decoded password, if different, password has been changed => token is invalid
                  if(decodedUserPassword === user.Password){
                    res.json(user)
                  }
                  //Password has been changed.
                  else{                    
                    res.json({message: 'PasswordHasChanged'})
                  }
                    
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
        }
        //If token is expired, display error
        else{
            res.json({ message: 'ExpiredToken' })
        }            
    }
  }); 

/****************************************************
  CHANGE/RESET PASSWORD - SEND CONFIRMATION EMAIL
*****************************************************/
app.post('/send-password-confirmation-email', (req,res) => {
  let user = req.body;
  sendPasswordConfirmationEmail(user, info => {
    console.log(`The mail has been sent to ${user.Email} and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendPasswordConfirmationEmail(userInfo, callback){
  let transporter = nodemailer.createTransport({
    host: emailServer.host,
    port: emailServer.port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: emailServer.user,
      pass: emailServer.pass
    }
  });

  let mailOptions = {
    //from and to email needs to be verified in order to use SES
    // otherwise, need to upgrade to Premium
    from: emailServer.sponsorEmail, // sender address need to change to Sponsor email
    to: "hoangt5@uci.edu", // need to put userInfo.Email
    subject: "PMMC - Update Password Confirmation", // Subject line
    html: `<h1>Hi ${userInfo.Username},</h1><br>
    <h4>Email: ${userInfo.Email}</h4>     
    <h4>This is the confirmation that your password has been updated.</h4>
    <h4>If you did not change your password, please contact us immediately.</h4>`
    };

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

/***********************************************************************
  CREATE NEW USER - SEND EMAIL CONFIRMATION AND LINK TO RESET PASSWORD
***********************************************************************/
app.post('/create-new-user-confirmation-email', (req,res) => {
    User.findOne({
      where: {          
        UserPK : req.body.UserPK
      }
    })
    .then(user =>{
        if(!user) {
          res.json({ error: 'User does not exist' })            
        }
        else{                        
          let userInfo = req.body
          userInfo.Username = user.Username
          userInfo.UserPK = user.UserPK
          userInfo.Email = user.Email
          userInfo.Password = user.Password            
          
          //send email to user            
          CreateNewUserConfirmationEmail(userInfo, info => {
              console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
              res.send(info);
            });
        }          
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

async function CreateNewUserConfirmationEmail(userInfo, callback){
  let transporter = nodemailer.createTransport({
    host: emailServer.host,
    port: emailServer.port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: emailServer.user,
      pass: emailServer.pass
    }
  });

  //Create new token
  let payload = {
    userID: userInfo.UserPK,
    userEmail: userInfo.Email,
    userPassword : userInfo.Password
  };

  let token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 604800 //expires in 7 days
  })
  
  //For Testing only
    // let decodedToken = jwt.decode(token, process.env.SECRET_KEY)
    // let decodeUserPK = decodedToken.userID
    // let decodeUserEmail = decodedToken.userEmail
    // let decodeUserPassword = decodedToken.userPassword

  let mailOptions = {
    from: emailServer.sponsorEmail, // sender address need to change to Sponsor email
    to: "hoangt5@uci.edu", // need to put userInfo.Email
    subject: "PMMC - New Account Confirmation", // Subject line
    html: `<h2>Hello,</h2><br>
    <h4>Your new account has been created.</h4>
    <h4>Username: ${userInfo.Username} </h4>
    <h4>***NOTE: Please follow the link to reset your password: </h4>
    <h4>http://localhost:4200/login/reset-password/${token}</h4>
    <h4>The link will expire within 7 days.</h4>
    <h4>If you did not request a new account, please contact us immediately.</h4>`
    };

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

//main().catch(console.error);
module.exports = app
