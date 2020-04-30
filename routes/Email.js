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
  sponsorEmail: "uakkum@uci.edu",
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
    to: "uakkum@uci.edu", // list of receivers
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
            console.log(req.body.Email)
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
    to: "uakkum@uci.edu", // need to put userInfo.Email
    subject: "PMMC - Reset Your Password", // Subject line
    html: `<h1>Hi ${userInfo.Username},</h1>
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
    to: "uakkum@uci.edu", // need to put userInfo.Email
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
    to: "uakkum@uci.edu", // need to put userInfo.Email
    subject: "PMMC - New Account Confirmation", // Subject line
    html: `<h2>Hi,</h2>
    <h4>Thank you for registering a new account with Pacific Marine Mammal Center. 
    This account will give you the opportunity to book programs, view/modify reservations, 
    save payment information for later use and much more. If you have any questions please do not 
    hesitate to contact us. Lastly, for future reference we have included your username below.
    </h4>
    <h4>Your username is: ${userInfo.Username} </h4>
    <h4>If you would like to reset your password please click the following link to do so: </h4>
    <h4>http://localhost:4200/login/reset-password/${token}</h4>
    <h4>The link will expire within 7 days.</h4>
    <h4> We look forward to seeing you in the future. </h4>
    <h5>If you did not request a new account, please contact us immediately.</h5>`
    };

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

/***********************************************************************
  PROGRAM BOOKED - SEND EMAIL CONFIRMATION FOR PROGRAM REQUESTED
***********************************************************************/
app.post('/send-initial-booking-confirmation-email', (req,res) => {
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
        userInfo.UserPK = user.UserPK
        userInfo.Email = user.Email
        
        //send email to user            
        SendInitialBookingConfirmationEmail(userInfo, info => {
            console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
            res.send(info);
          });
      }          
  })
  .catch(err => {
    res.send('error: ' + err)
  })
});

async function SendInitialBookingConfirmationEmail(userInfo, callback){
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
  to: "uakkum@uci.edu", // need to put userInfo.Email
  subject: "New PMMC Account Confirmation", // Subject line
  html:
  `<i>Thank you for requesting a program with Pacific Marine Mammal Center. 
  All education program proceeds help support our seal and sea lion patients!</br>
  Your program inquiry is being reviewed and should be confirmed shortly. If not, 
  we will work hard to find an alternative date/time that works with your schedule.
  </br></br>
  We look forward to seeing you soon!
  </i>`
  };

let info = await transporter.sendMail(mailOptions);
callback(info);
}

/***********************
  SEND REGISTRATION CONFIRMATION EMAIL
***********************/
app.post('/send-registration-confirmation-email', (req, res) => {
  let user = req.body;
  sendRegistrationConfirmationEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendRegistrationConfirmationEmail(user, callback) {
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
    to: "uakkum@uci.edu", // list of receivers
    subject: "PMMC Registration Confirmation", // Subject line
    html: `
    <h2>Hi,</h2>
    <h4>Thank you for registering a new account with Pacific Marine Mammal Center. 
    This account will give you the opportunity to book programs, view/modify reservations, 
    save payment information for later use and much more. If you have any questions please do not 
    hesitate to contact us.</h4>
    <h4> We look forward to seeing you in the future. </h4>
    `
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  PROGRAM BOOKING CONFIRMED
***********************/
app.post('/send-program-confirmation-email', (req, res) => {
  let user = req.body;
  sendProgramConfirmationEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendProgramConfirmationEmail(user, callback) {
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
    to: "uakkum@uci.edu", // list of receivers
    subject: "PMMC - Final Booking Confirmation", // Subject line
    html: `
    <i>Your program with Pacific Marine Mammal Center has been confirmed! 
    You are now registered for:
    (PROGRAM NAME, DATE & TIME SHOULD BE INSERTED AUTOMATICALLY HERE) </i>
    <i>We have processed your deposit of 
    (AUTOMATIC INSERTION OF DEPOSIT AMOUNT IF MADE). 
    Your remaining balance of (AUTOMATIC INSERTION OF REMAINING BALANCE DUE) 
    prior to your program unless special arrangements have been made with 
    PMMC administration.</i>
    <i>We look forward to having you join us. See you soon! </i>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  PROGRAM/PAYMENT REMINDER
***********************/
app.post('/send-program-reminder-email', (req, res) => {
  let user = req.body;
  sendProgramReminderEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendProgramReminderEmail(user, callback) {
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
    to: "uakkum@uci.edu", // list of receivers
    subject: "PMMC Upcoming Program", // Subject line
    html: `
    <i>This is a reminder about your upcoming visit to Pacific Marine Mammal 
    Center on (AUTOMATIC INSERTION OF PROGRAM DATE/TIME) for 
    (AUTOMATIC INSERTION OF PROGRAM NAME). Your balance of: 
    (AUTOMATIC INSERTION OF PROGRAM BALANCE HERE) should be paid prior to 
    your program unless special arrangements have been made with PMMC 
    administration.</i>
    <br/>
    <i>We look forward to having you join us. See you soon! </i>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  PAYMENT CONFIRMATION
***********************/
app.post('/send-payment-confirmation-email', (req, res) => {
  let user = req.body;
  sendPaymentConfirmationEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendPaymentConfirmationEmail(user, callback) {
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
    to: "uakkum@uci.edu", // list of receivers
    subject: "PMMC - Payment Confirmation", // Subject line
    html: `
    <i>Thank you for your payment of (AUTOMATIC INSERTION OF PAYMENT BALANCE) 
    for your program with Pacific Marine Mammal Center (AUTOMATIC INSERTION 
    OF PROGRAM NAME, DATE/TIME HERE). All education program proceeds help 
    support our seal and sea lion patients!</i>
    <br/>
    <i>We look forward to having you join us. See you soon! </i>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  POST-PROGRAM EMAIL
***********************/
app.post('/send-post-program-email', (req, res) => {
  let user = req.body;
  sendPostProgramEmail(user, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendPostProgramEmail(user, callback) {
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
    to: "uakkum@uci.edu", // list of receivers
    subject: "Thank you from PMMC", // Subject line
    html: `
    <i>Thank you for attending your program (AUTOMATIC INSERTION OF PROGRAM 
    NAME DATE/TIME) with Pacific Marine Mammal Center! We appreciate the 
    opportunity to share our mission of ocean awareness and conservation 
    with you.</i>
    <br/>
    <i>PMMC is always striving to improve our educational efforts. You can 
    help by giving a quick program evaluation here: 
    (AUTOMATIC INSERTION OF SPECIFIC SURVEY LINK). </i>
    <br/>
    <i>We are also grateful for your support of our seal and sea lion 
    patients! Should you wish to keep up with our patients’ stories, 
    sign up for our e-newsletter or a membership today at:</i>
    <br/>
    <i>We look forward to seeing you again in the future!</i>
    `
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}



//main().catch(console.error);
module.exports = app
