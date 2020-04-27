const express = require("express");
const cors = require("cors");
const reservation = express.Router();
const bodyParser = require("body-parser");

const ReservationHeader = require("../models/ReservationHeader");
const ReservationGroupDetails = require("../models/ReservationGroupDetails");
const ReservationIndividualDetails = require("../models/ReservationIndividualDetails");

reservation.use(bodyParser.json());
reservation.use(cors());

/******************************************
 *       CREATE NEW RESERVATION HEADER    *
 ******************************************/
reservation.post("/add-new-reservation", (req, res) => {
  const today = new Date();
  var reservationPK = 0;

//   const reservationHeader = {
//     SchedulePK:             req.body.SchedulePK,
//     UserPK:                 req.body.UserPK,
//     ResevationStatus:       req.body.ResevationStatus,
//     NumberOfParticipant:    req.body.NumberOfParticipant,
//     Total:                  req.body.Total,
//     CreatedDate:            today,
//     IsActive:               req.body.IsActive,
//     RemainingBalance:       req.body.RemainingBalance
//   };

  ReservationHeader.create(req.body)
  .then((result) => {
    res.json(result.ReservationHeader);
  })
  .catch((err) => {
    res.send("err Add reservation " + err);
  });;
});


/******************************************
 *       CREATE NEW GROUP RESERVATION DETAILS    *
 ******************************************/
reservation.post("/add-group-reservation-details", (req, res) => {
    const today = new Date();
    var reservationPK = 0;
  
    const reservationGroupDetails = {
      SchedulePK:             req.body.SchedulePK,
      UserPK:                 req.body.UserPK,
      ResevationStatus:       req.body.ResevationStatus,
      NumberOfParticipant:    req.body.NumberOfParticipant,
      Total:                  req.body.Total,
      CreatedDate:            today,
      IsActive:               req.body.IsActive,
      RemainingBalance:       req.body.RemainingBalance
    };
  
    ReservationHeader.create(reservationHeader)
    .then((result) => {
      res.json(result.ReservationHeader);
    })
    .catch((err) => {
      res.send("err Add reservation " + err);
    });;
  });
  
// ========================END=====================
module.exports = reservation;
