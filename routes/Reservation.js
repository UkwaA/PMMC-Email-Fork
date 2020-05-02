const express = require("express");
const cors = require("cors");
const reservation = express.Router();
const bodyParser = require("body-parser");

const ReservationHeader = require("../models/ReservationHeader");
const ReservationGroupDetails = require("../models/ReservationGroupDetails");
const ReservationIndividualDetails = require("../models/ReservationIndividualDetails");

reservation.use(bodyParser.json());         // to support JSON-encoded bodies
reservation.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

reservation.use(cors());

/******************************************
 *       GET RESERVATION HEADER           *
 ******************************************/
reservation.get("/get-all-reservation", (req, res) => {
  ReservationHeader
    .findAll({
      where: {
        IsActive: true,
      },
    })
    .then((result) => {
      if (result) {
        res.json(result);
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


/******************************************
      UPDATE REMAINING BALANCE    
 ******************************************/
reservation.put("/update-balance/:id", (req, res) => {
  ReservationHeader.findOne({
    where :{
      ReservationPK: req.params.id 
    }
    })
    .then((result) => {
      if(result){
        result.update({
          RemainingBalance: req.body.amount
        })
        .then(result =>{
          if (result) {
            res.send({
             message: "REMAINING BALANCE has been changed."
            });
          }
          else {
            res.send({
             error: "Cannot update REMAINING BALANCE."
            });
          }
        })
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});



// ========================END=====================


module.exports = reservation;
