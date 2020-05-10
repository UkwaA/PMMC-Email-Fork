require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Email = require('../models/Email');
const UserDetails = require('../models/UserDetails')
const Schedule = require('../models/Schedule');
const fs = require("fs");
const fileUpload = require("express-fileupload");

const app = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

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
  GET ALL EMAILS
***********************/
app.get('/get-all-emails', (req,res) => {
  Email.findAll({})
  .then(email => {
    if (email) {
      res.json(email);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

/***********************
  GET USER EMAILS
***********************/
app.get('/get-user-emails', (req,res) => {
  Email.findAll({
    where:{
      Type: 'User'
    }
  })
  .then(email => {
    if (email) {
      res.json(email);
      console.log(email);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

/***********************
  GET PROGRAM EMAILS
***********************/
app.get('/get-program-emails', (req,res) => {
  Email.findAll({
    where:{
      Type: 'Program'
    }
  })
  .then(email => {
    if (email) {
      res.json(email);
      console.log(email);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

/***********************
  GET PAYMENT EMAILS
***********************/
app.get('/get-payment-emails', (req,res) => {
  Email.findAll({
    where:{
      Type: 'Payment'
    }
  })
  .then(email => {
    if (email) {
      res.json(email);
      console.log(email);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

/***********************
  GET EMAIL BY ID
***********************/
app.get('/get-email-by-id/:id', (req,res) => {
  Email.findOne({
    where:{
      EmailPK: req.params.id
    }
  })
  .then(email => {
    if (email) {
      res.json(email);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

/***********************
  UPDATE EMAIL
***********************/
app.post('/update-email', (req,res) => {
  console.log('Updating email');
  // var files = req.body.fileDetails.files;
  var filesChanged = (req.body.filesChanged == 'true')
  var hasAttachments;

  // Creates a new directory for Email ID attachments if it does not exist
  var tempDir = './public/uploads/email-attachments/'+req.body.EmailPK;
  if (filesChanged) {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }
  }
  var attachmentNames = '';
  var numAttachments = 0;

  // Moves the new files to the newly created directory
  // for (var i = 0; i < 3; ++i) {
  //   var file = req.files[i];
  //   var filePath = tempDir + '/' + file.name;
  //   file.mv(filePath);
  // } 
  // console.log('len: ' + fs.readdir(tempDir).length());

  function printNames(value){
    console.log(value);
    attachmentNames += value+'/';
  }

  function printValues(value){
    console.log('new value: ' + value)
  }

  // Gather all attachment names to upload to the DB
  if (fs.existsSync(tempDir))
    fs.readdirSync(tempDir).forEach(printNames);
  attachmentNames = attachmentNames.slice(0,-1);
  if (attachmentNames.length > 0)
    numAttachments = attachmentNames.split('/').length;

  const email = {
    Subject: req.body.Subject,
    Body: req.body.Body,
    Type: req.body.Type,
    HasAttachments: numAttachments,
    AttachmentNames: attachmentNames
  }
  Email.update(email, {
    where:{
      EmailPK: req.body.EmailPK
    }
  })
  .then(email => {
    if (email) {
      res.json("Email successfully updated");
      // console.log(email);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

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
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
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
            
            Email.findOne({
              where:{ 
                EmailPK: 1
              }
            }).then(email => {
              //send email to user            
              sendResetPasswordEmail(userInfo, email, info => {
                console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
                res.send(info);
              });
            })     
            
          }          
      })
      .catch(err => {
        res.send('error: ' + err)
      })

});


async function sendResetPasswordEmail(userInfo, email, callback) {
    //Create new token
    let payload = {
      userID: userInfo.UserPK,
      userEmail: userInfo.Email,
      userPassword : userInfo.Password
    };

    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 3600 //expires in 1 hour
    })

    email.Body = email.Body.replace("{Username}", `${userInfo.Username}`).replace("{token}", `${token}`)
    console.log(email.Body)
    

    //For Testing only
    //let decodedToken = jwt.decode(token, process.env.SECRET_KEY)
    // let decodeUserPK = decodedToken.userID
    // let decodeUserEmail = decodedToken.userEmail
    // let decodeUserPassword = decodedToken.userPassword
    // let expirationTime = decodedToken.exp
    // const date = new Date(0)
    // date.setUTCSeconds(expirationTime)    

    let transporter = nodemailer.createTransport({
      host: process.env.emailServer_host,
      port: process.env.emailServer_port,
      secure: false, // true for 465, false for other ports
      auth: {
          //This is AWS SES credential
        user: process.env.emailServer_username,
        pass: process.env.emailServer_password
      }
    });
    
    let mailOptions = {
    //from and to email needs to be verified in order to use SES
    // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address need to change to Sponsor email
    to: "uakkum@uci.edu", // need to put userInfo.Email
    subject: email.Subject, // Subject line
    html: email.Body
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
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
    //from and to email needs to be verified in order to use SES
    // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address need to change to Sponsor email
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
          
          Email.findOne({
            where: {EmailPK: 4}
          }).then(email => {
            if (email){
              CreateNewUserConfirmationEmail(userInfo, email, info => {
                console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
                res.send(info);
              });
            }
          })
          
        }          
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

async function CreateNewUserConfirmationEmail(userInfo, email, callback){
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
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

  email.Body = email.Body.replace("{Username}", `${userInfo.Username}`).replace("{token}", `${token}`)
  
  //For Testing only
    // let decodedToken = jwt.decode(token, process.env.SECRET_KEY)
    // let decodeUserPK = decodedToken.userID
    // let decodeUserEmail = decodedToken.userEmail
    // let decodeUserPassword = decodedToken.userPassword

  let mailOptions = {
    from: process.env.emailServer_sponsorEmail, // sender address need to change to Sponsor email
    to: "uakkum@uci.edu", // need to put userInfo.Email
    subject: email.Subject, // Subject line
    html: email.Body
    };

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

/***********************************************************************
  PROGRAM BOOKED - SEND EMAIL CONFIRMATION FOR PROGRAM REQUESTED
***********************************************************************/
app.post('/send-booking-request-confirmation-email', (req,res) => {
  console.log("booking requested")
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

        Email.findOne({
          where: {emailPK: 2}
        }).then(email => {
          if (email){
            sendBookingRequestConfirmationEmail(userInfo, email, info => {
              console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
              res.send(info);
            });
          }
          else {
            res.json({ error: 'Email not found' })
          }
        })        
        
      }          
  })
  .catch(err => {
    res.send('error: ' + err)
  })
});

async function sendBookingRequestConfirmationEmail(userInfo, email, callback){
let transporter = nodemailer.createTransport({
  host: process.env.emailServer_host,
  port: process.env.emailServer_port,
  secure: false, // true for 465, false for other ports
  auth: {
      //This is AWS SES credential
    user: process.env.emailServer_username,
    pass: process.env.emailServer_password
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
  from: process.env.emailServer_sponsorEmail, // sender address need to change to Sponsor email
  to: "uakkum@uci.edu", // need to put userInfo.Email
  subject: email.Subject, // Subject line
  html: email.Body
  };

let info = await transporter.sendMail(mailOptions);
callback(info);
}

/***********************
  CONVERT PROGRAM TIME
************************/
function convertTime(time){
  time = time.split(':');

  var hours = Number(time[0]);
  var minutes = Number(time[1]);

  var timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue= '' + hours;
  } else if (hours > 12) {
    timeValue= '' + (hours - 12);
  } else if (hours == 0) {
    timeValue= '12';
  }
  
  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
  timeValue += (hours >= 12) ? " P.M" : " A.M";

  console.log(timeValue);
  return timeValue;
}

/***********************
  SEND SPECIFIC PROGRAM EMAIL
************************/
app.post('/send-pinniped-program-email', (req, res) => {
  console.log('pinniped email route');
  console.log(req.body)
  console.log(req.body.UserPK)

  console.log('Part 2');

  tempDir = './public/uploads/email-attachments/77/';

  attachments = [];

  function addAttachmentNames(value){
    console.log(value);
    attachments.push({filename: value, path: tempDir+value})
  }

  // Gather all attachment names to upload to the DB
  if (fs.existsSync(tempDir)) {
    console.log('directory exists');
    fs.readdirSync(tempDir).forEach(addAttachmentNames);
  }
  console.log(attachments);

  var firstName, programDateTime;
  UserDetails.findOne({
    where: {UserPK: req.body.UserPK}
  }).then(user => {
    console.log('1st name: ' + user.FirstName)
    firstName = user.FirstName;

    Schedule.findOne({
      where: {SchedulePK: req.body.SchedulePK}
    }).then(schedule => {
      programDateTime = new Date(schedule.Start);
      var date = programDateTime.toDateString() + ' at ' + convertTime(programDateTime.toTimeString().slice(0,5))
      sendPinnipedProgramEmail(user.FirstName, user.Email, date, attachments, info => {
        console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
        res.send(info);
      })
    })

  })

})

async function sendPinnipedProgramEmail(firstName, email, date, Attachments, callback) {
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
    to: "uakkum@uci.edu", // list of receivers
    subject: 'Pinniped Program Confirmation', // Subject line
    html: `Hi ${firstName},<br>
    Your class is confirmed for the Pinniped Pollution Project Program on
     <b>${date}</b>. Attached to this email you will find five pre-visit documents.
     We have also included a few helpful field trip reminders below. Please 
     be sure to communicate the bus information with your driver. Lastly, 
     <b>please respond to this message confirming</b> your visit. Thank you!`,
     attachments: Attachments
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  CHANGE EMAIL ACTIVE STATUS
***********************/
app.post('/change-email-active-status', (req, res) => {
  console.log("Change email called2");
  const email = {IsActive: req.body.IsActive}
  Email.update(email, {where: {EmailPK: req.body.EmailPK}})
  res.send(true);
})

/***********************
  GET  EMAIL ATTACHMENTS
***********************/
app.get('/get-email-attachments/:id', (req, res) => {
  Email.findOne({
    where: {EmailPK: req.params.id}
  }).then(email => {
    console.log(email.fileData)
  })
})

/***********************
  SEND REGISTRATION CONFIRMATION EMAIL
***********************/
app.post('/send-registration-confirmation-email', (req, res) => {
  let user = req.body;
  Email.findOne({ 
    where:{
      emailPK: 0
    }
  }).then(email => {
  sendRegistrationConfirmationEmail(email, info => {
    console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
})
});

async function sendRegistrationConfirmationEmail(email, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
    to: "uakkum@uci.edu", // list of receivers
    subject: email.Subject, // Subject line
    html: email.Body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  PROGRAM BOOKING CONFIRMED
***********************/
app.post('/send-program-confirmation-email', (req, res) => {
  User.findOne({
    where: {
      UserPK: req.body.UserPK
    }
  }).then( user => {
    if (user){
      Schedule.findOne({
        where: {SchedulePK: req.body.SchedulePK}
      }).then( schedule => {
        Email.findOne({
          where: {EmailPK: 5}
        }).then(email => {
          sendProgramConfirmationEmail(user, email, schedule, req.body.programName, info => {
            console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
            res.send(info);
          })
        })
      })
  }})});

async function sendProgramConfirmationEmail(user, email, schedule, programName, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
    to: "uakkum@uci.edu", // list of receivers
    subject: 'Program Confirmation', // Subject line
    html: `
    <i>Your program with Pacific Marine Mammal Center has been confirmed! 
    You are now registered for:
    ${programName} at ${schedule.Start} </i>` + 
    (`${deposit}` ? `<i>We have processed your deposit of 
    ${deposit}.` : '') +
    ` 
    Your remaining balance of ${remainingBalance} should be paid
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
  User.findOne({
    where: {UserPK: req.body.UserPK}
  }).then(user => {
    sendProgramReminderEmail(user, info => {
      console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  })
});

async function sendProgramReminderEmail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
    to: "uakkum@uci.edu", // list of receivers
    subject: "PMMC Upcoming Program", // Subject line
    html: `
    <i>This is a reminder about your upcoming visit to Pacific Marine Mammal 
    Center on ${programDate} for ${programName}. Your balance of: ${balance} 
    should be paid prior to your program unless special arrangements have been 
    made with PMMC administration.</i>
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
  User.findOne({
    where: { UserPK: req.body.UserPK }
  }).then(user => { 
    sendPaymentConfirmationEmail(user, info => {
      console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  })
});

async function sendPaymentConfirmationEmail(user, payment, programName, programDate, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });

  let mailOptions = {
      //from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
    to: "uakkum@uci.edu", // list of receivers
    subject: "PMMC - Payment Confirmation", // Subject line
    html: `
    <i>Thank you for your payment of ${payment} for your program with 
    Pacific Marine Mammal Center ${programName} at ${programDate}. All 
    education program proceeds help support our seal and sea lion patients!</i>
    <br/>
    <i>We look forward to having you join us. See you soon! </i>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

/***********************
  POST-PROGRAM EMAIL
  //NOTE: THIS HAS BEEN DONE, PLEASE DO NOT MODIFY
***********************/
// app.post('/send-post-program-email', (req, res) => {
//   sendPostProgramEmail(user, info => {
//     console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
//     res.send(info);
//   });
// });


async function sendPostProgramEmail(reservationInfo, callback) {
  // create reusable transporter object using the default SMTP transport
  //Using AWS SES for SMTP server
  let transporter = nodemailer.createTransport({
    host: process.env.emailServer_host,
    port: process.env.emailServer_port,
    secure: false, // true for 465, false for other ports
    auth: {
        //This is AWS SES credential
      user: process.env.emailServer_username,
      pass: process.env.emailServer_password
    }
  });  
  
  let displayTimeFormatOption ={
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
  let date = (new Date(reservationInfo.Start)).toLocaleDateString()
  let startTime = (new Date(reservationInfo.Start)).toLocaleString('en-US', displayTimeFormatOption)
  let endTime = (new Date(reservationInfo.End)).toLocaleString('en-US', displayTimeFormatOption)
  let mailOptions = {
      // from and to email needs to be verified in order to use SES
      // otherwise, need to upgrade to Premium
    from: process.env.emailServer_sponsorEmail, // sender address
    bcc: reservationInfo.EmailList, // list of receivers
    subject: "Thank you from Pacific Marine Mammal Center", // Subject line
    html: `
    <h5> Hi, </h5>
    <p>Thank you for attending your program <b>${reservationInfo.ProgramName}</b> 
    on <b>${date}, ${startTime} - ${endTime}</b> 
    with Pacific Marine Mammal Center! We appreciate the 
    opportunity to share our mission of ocean awareness and conservation 
    with you.</p>
    <br/>
    <p>PMMC is always striving to improve our educational efforts. You can 
    help by giving a quick program evaluation here: 
    (AUTOMATIC INSERTION OF SPECIFIC SURVEY LINK). </p>
    <br/>
    <p>We are also grateful for your support of our seal and sea lion 
    patients! Should you wish to keep up with our patients’ stories, 
    sign up for our e-newsletter or a membership today at: https://www.pacificmmc.org/</p>
    <br/>
    <p>We look forward to seeing you again in the future!</p>
    `
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);
  callback(info); 
}

//main().catch(console.error);
module.exports = app
//export sendPostProgramEmail() to use in Node-schedule
module.exports.sendPostProgramEmail = sendPostProgramEmail
