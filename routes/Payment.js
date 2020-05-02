const express = require("express");
const cors = require("cors");
const payment = express.Router();
const bodyParser = require("body-parser");

const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SKEY);
const Payment = require("../models/Payment");
const ReservationHeader = require("../models/ReservationHeader");

payment.use(bodyParser.json());         // to support JSON-encoded bodies
payment.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
payment.use(cors());

function calculateOrderAmount(amount) {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
}

/******************************************
 *            MAKE A CHARGE               *
 ******************************************/
payment.post("/pay", (req, res) => {
  var stripeToken = req.body.token;
  var amount = req.body.amount;
  var email = req.body.email;

  stripe.charges
    .create({
      amount: amount * 100,
      currency: "usd",
      description: req.body.description,
      receipt_email: "tonyhuy007@gmail.com",
      source: stripeToken.id,
    })
    .then((result) => {
      console.log("Charge Successful");
      res.json(result);
    })
    .catch((err) => {
      console.log(err + " Charge Fail");
      res.status(500).end();
    });
});

/******************************************
 *              ISSUE A REFUND            *
 ******************************************/
payment.post("/refund", (req, res) => {
  var refund = req.body.amount;
  var chargeToken = req.body.token;

  stripe.refunds
    .create({
      charge: chargeToken,
      amount: refund,
    })
    .then((result) => {
      console.log("Refund Successful");
      res.json({ message: "Successfully Refund items" });
    })
    .catch((err) => {
      console.log(err + " Charge Fail");
      res.status(500).end();
    });
});

/******************************************
 *       CREATE NEW PAYMENT DATA          *
 ******************************************/
payment.post("/create-payment", (req, res) => {
  Payment.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send("err Create Payment Data " + err);
    });
});

/******************************************
 *       UPDATE PAYMENT DATA              *
 ******************************************/
payment.put("/update-payment/:id", (req, res) => {
  Payment.findOne({
    where: {
      PaymentPK: req.params.id,
    },
  })
    .then((result) => {
      result.update(req.body).catch((err) => {
        res.send("err Update Payment Data " + err);
      });
    })
    .catch((err) => {
      res.send("err There is no payment data." + err);
    });
});

/******************************************
 *          GET PAYMENT BY ID             *
 ******************************************/
payment.get("/get-payment-by-id/:id", (req, res) => {
  Payment.findOne({
    where: {
      PaymentPK: req.params.id,
    },
  })
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.send("There is no payment data.");
      }
    })
    .catch((err) => {
      res.send("error: " + err + "   " + req.params.id);
    });
});

/******************************************
 *          GET PAYMENT BY USERPK         *
 ******************************************/
payment.get("/get-payment-by-user/:id", (req, res) => {
  Payment.findAll({
    where: {
      UserPK: req.params.id,
    },
  })
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.send("There is no payment data.");
      }
    })
    .catch((err) => {
      res.send("error: " + err + "   " + req.params.id);
    });
});

/******************************************
      GET PAYMENT BY RESERVATION   
 ******************************************/
payment.get("/get-payment-by-reservation/:id", (req, res) => {
  Payment.findAll({
    where: {
      ReservationPK:  req.params.id,
    },
  })
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.send("There is no payment data.");
      }
    })
    .catch((err) => {
      res.send("error: " + err + "   " + req.params.id);
    });
});


module.exports = payment;
