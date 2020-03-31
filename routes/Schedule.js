const express = require('express');
const cors = require('cors')
const schedule = express.Router()
const bodyParser = require('body-parser')

const ReservationGroupProgram = require('../models/ReservationGroupDetails')
const ReservationIndividualProgram = require('../models/ReservationIndividualDetails')
const Program = require('../models/Program')
const Schedule = require('../models/Schedule')

schedule.use(bodyParser.json());
schedule.use(cors())

/*******************************
   ADD NEW PROGRAM SCHEDULE
 *******************************/
schedule.post("/add-new-program-schedule", (req, res) => {
    Schedule.create(req.body)
        .then(schedule => {
            res.json(schedule)
        })
        .catch(err => {
            res.send("errorExpressErr: " + err);
          });
});

/*******************************
  GET ALL PROGRAM SCHEDULES
 *******************************/
schedule.get("/get-all-schedules", (req,res) => {
    Schedule.findAll()
    .then(schedule =>{
        res.json(schedule)
    })
    .catch(err => {
        res.send("error: " + err);
      });
});

module.exports = schedule;