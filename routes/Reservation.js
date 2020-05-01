const express = require("express");
const cors = require("cors");
const reservation = express.Router();
const bodyParser = require("body-parser");

const ReservationHeader = require("../models/ReservationHeader");
const ReservationGroupDetails = require("../models/ReservationGroupDetails");
const ReservationIndividualDetails = require("../models/ReservationIndividualDetails");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

reservation.use(bodyParser.json());
reservation.use(cors());

/******************************************
 *       GET ALL RESERVATION HEADER           *
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
 *  GET ALL RESERVATION HEADER BY USER PK *
 ******************************************/
reservation.get("/get-all-reservation-by-userpk/:userpk", (req, res) => {
  ReservationHeader
    .findAll({
      where: {
        UserPk: req.params.userpk,
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
 *  GET ALL ACTIVE RESERVATION HEADER BY SCHEDULE PK *
 ******************************************/
reservation.get("/get-all-reservation-by-schedulepk/:schedulepk", (req, res) => {  
  getReservationBySchedulePK(req.params.schedulepk, returnInfo =>{
    res.json(returnInfo.result)
  })  
});

//Define this function to reuse for other HTTP request
async function getReservationBySchedulePK(schedulepk, callback){
  ReservationHeader
  .findAll({
    where: {
      Schedulepk: schedulepk,
      IsActive: true,
      ReservationStatus: 1 //On-going
    },
  })
  .then((allReservationHeader) => {
    if (allReservationHeader.length > 0) {
      callback({result: allReservationHeader});
    } else {
      callback({error: "There is no reservation available."});
    }
  })
  .catch((err) => {
      callback("error: Get Reservation" + err);
      });  
}

/***********************************************************
 *  GET ALL ACTIVE RESERVATION DETAILS FOR VIEW SCHEDULE
 ***********************************************************/
reservation.get("/get-all-reservation-details-for-view-schedule/:schedulepk/:programpk/:type", (req, res) => {  
  getReservationBySchedulePK(req.params.schedulepk, returnInfo =>{    
    if(returnInfo.result){      
      //Get the array of all ReservationPK
      let reservationPKArr = []
      returnInfo.result.forEach(item =>{
        reservationPKArr.push(item.ReservationPK)
      })
      console.log(reservationPKArr)
      //Get all reservation details by ReservationPK
      switch(req.params.type){
        case "0": //group
            ReservationGroupDetails.findAll({
              where:{
                ReservationPK: {[Op.in]: reservationPKArr}
              }
            })
            .then(groupDetails =>{
              if(groupDetails.length > 0){
                res.json(groupDetails)
              }
              else{
                res.json({error: "There is no group reservation details."})
              }            
            })
            break;

        case "1": //individual
            ReservationIndividualDetails.findAll({
              where:{
                ReservationPK: {[Op.in]: reservationPKArr}
              }
            })
            .then(individualDetails =>{
              if(individualDetails.length > 0){
                res.json(individualDetails)
              }
              else{
                res.json({error: "There is no indidivual reservation details."})
              }            
            })
            break;
      }      
    }
    else{
      res.send(returnInfo)
    }
  })  
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
