const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SKEY);
const payment = express.Router();

payment.use(bodyParser.urlencoded({ extended: false }));

payment.get("/charge", (req, res) => {
  stripe.paymentIntents
    .create({
      amount: 1000,
      currency: "usd",
      payment_method_types: ["card"],
      receipt_email: "jenny.rosen@example.com",
    })
    .then((result) => {
      res.json(result)
    });
});

payment.get("/create-payment-intent", (req, res) => {
  var total = req.body.amount;
  // Create a PaymentIntent with the order amount and currency
  stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })
  .then((result) => {
    res.json(result)
  })
  ;

});


module.exports = payment;
