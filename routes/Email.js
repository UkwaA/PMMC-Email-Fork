const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

//const details = require("./details.json");

const app = express.Router();
app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send(
//     "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
//   );
// });

app.post('/sendmail', (req, res) => {
  console.log("request came");
  let user = req.body;
  console.log(user);
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
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
//main().catch(console.error);
module.exports = app
