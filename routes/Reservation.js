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
 *       GET RESERVATION HEADER           *
 ******************************************/
reservation.get("/get-all-reservation", (req, res) => {
  reservation
    .findAll({
      where: {
        IsActive: true,
      },
    })
    .then((result) => {
      if (result) {
        res.json(program);
      } else {
        res.send("There is no reservation available.");
      }
    })
    .catch((err) => {
      res.send("error: Get Reservation" + err);
    });
});

/******************************************
 *       CREATE NEW RESERVATION HEADER    *
 ******************************************/
reservation.post("/add-new-reservation", (req, res) => {
  const today = new Date();

  ReservationHeader.create(req.body)
    .then((result) => {
      res.json(result.ReservationPK);
    })
    .catch((err) => {
      res.send("err Add reservation " + err);
    });
});

/******************************************
 *  CREATE NEW GROUP RESERVATION DETAILS  *
 ******************************************/
reservation.post("/add-group-reservation-details", (req, res) => {
  ReservationGroupDetails.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send("err Add reservation " + err);
    });
});

/*************************************************
 *  CREATE NEW INDIVIDUAL RESERVATION DETAILS      *
 **************************************************/
reservation.post("/add-individual-reservation-details", (req, res) => {
  ReservationIndividualDetails.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send("err Add reservation " + err);
    });
});

// ========================END=====================
module.exports = reservation;
