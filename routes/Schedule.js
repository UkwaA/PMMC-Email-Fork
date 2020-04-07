const express = require("express");
const cors = require("cors");
const schedule = express.Router();
const bodyParser = require("body-parser");

const ReservationGroupProgram = require("../models/ReservationGroupDetails");
const ReservationIndividualProgram = require("../models/ReservationIndividualDetails");
const Program = require("../models/Program");
const Schedule = require("../models/Schedule");
const ScheduleSetting = require("../models/ScheduleSetting");

schedule.use(bodyParser.json());
schedule.use(cors());

/*******************************
   ADD NEW PROGRAM SCHEDULE
 *******************************/
schedule.post("/add-new-program-schedule", (req, res) => {
  Schedule.create(req.body)
    .then(schedule => {
      res.json(schedule);
    })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });
});

/*************************************
  GET ALL PROGRAM SCHEDULES OVERVIEW
 *************************************/
schedule.get("/get-all-schedule-overview", (req, res) => {
  ScheduleSetting.findAll()
    .then(overview => {      
      res.json(overview);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

/**************************************
  GET PROGRAM SCHEDULE OVERVIEW BY ID
 **************************************/
schedule.get("/get-schedule-overview-by-id/:id", (req, res) => {
  ScheduleSetting.findAll({
    where: {
      ProgramPK: req.params.id,
      IsActive: true
    }
  })
    .then(overview => {      
      res.json(overview);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

/***********************************
  GET ALL PROGRAM SCHEDULES BY ID,
  START AND END TIME
 ***********************************/
schedule.get("/get-schedule-overview-by-id-start-end/:id/:start/:end",(req,res) => {
  Schedule.findOne({
    where: {
      ProgramPK: req.params.id,
      Start: req.params.start,
      End: req.params.end
    }
  })
  .then(schedule =>{
    res.json(schedule);
  })
  .catch(err => {
    res.send("error: " + err);
  });
});

/*******************************
  GET ALL PROGRAM SCHEDULES BY ID
 *******************************/
schedule.get("/get-program-schedules-by-id/:id", (req, res) => {
  Schedule.findAll({
    where: {
      ProgramPK: req.params.id,
      IsActive: true
    }
  })
    .then(schedule => {
      res.json(schedule);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = schedule;
