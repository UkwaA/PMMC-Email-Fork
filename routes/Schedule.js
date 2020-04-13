const express = require("express");
const cors = require("cors");
const schedule = express.Router();
const bodyParser = require("body-parser");

const ReservationGroupProgram = require("../models/ReservationGroupDetails");
const ReservationIndividualProgram = require("../models/ReservationIndividualDetails");
const Program = require("../models/Program");
const Schedule = require("../models/Schedule");
const ScheduleSetting = require("../models/ScheduleSetting");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

schedule.use(bodyParser.json());
schedule.use(cors());

/************************************
   ADD NEW PROGRAM SCHEDULE SETTING
 ************************************/
schedule.post("/add-new-schedule-setting", (req, res) => {
  timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }; 

  startTime = (new Date(req.body.Start)).toLocaleString('en-US', timeFormatOptions);
  endTime = (new Date(req.body.End)).toLocaleString('en-US', timeFormatOptions);
  
  ScheduleSetting.findAll({
    where: {
      ProgramPK: req.body.ProgramPK,
      Start: {
        [Op.like]: '%'+startTime+'%'
      },
      End: {
        [Op.like]: '%'+endTime+'%'
      },
      IsActive: true
    }
  })
  .then(scheduleSetting =>{
    if(scheduleSetting.length > 0){ //if there exists session in selected time frame      
      res.json(
        {error:"There exists sessions in this time frame" 
          + ". Please edit the existing session that is in this time frame OR choose another time frame"}
        )
    }
    else{
      //If there's no events having the same start and end time => create new
      ScheduleSetting.create(req.body)
      .then(newSetting => {
        res.json(newSetting)
      })
    }
  })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });
});

/************************************
  UPDATE PROGRAM SCHEDULE SETTING
 ************************************/
schedule.post("/update-schedule-setting", (req, res) => {
  timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }; 

  startTime = (new Date(req.body.Start)).toLocaleString('en-US', timeFormatOptions);
  endTime = (new Date(req.body.End)).toLocaleString('en-US', timeFormatOptions);
  
  ScheduleSetting.findAll({
    where: {
      ScheduleSettingPK: {
        [Op.ne]: req.body.ScheduleSettingPK
      },
      ProgramPK: req.body.ProgramPK,
      Start: {
        [Op.like]: '%'+startTime+'%'
      },
      End: {
        [Op.like]: '%'+endTime+'%'
      },
      IsActive: true
    }
  })
  .then(scheduleSetting =>{
    if(scheduleSetting.length > 0){ //if there exists session in selected time frame      
        res.json(
          {error:"There exists sessions in this time frame" 
            + ". Please edit the existing session that is in this time frame OR choose another time frame"}
          )
    }
    else{
      //If there's no events having the same start and end time => update the current
      //###### Update #######
        ScheduleSetting.update(req.body, {
          where: {
            ScheduleSettingPK: req.body.ScheduleSettingPK
          }
        })
        .then(result => {
          if (result == 1) {
            res.send({
              message: "Schedule setting was updated successfully."
            });
          }
          else {
            res.send({
              error: "Cannot update schedule setting"
            });
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
        //###### End Update #######
    }
  })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });    
});

/************************************
   DEACTIVATE PROGRAM SCHEDULE SETTING
 ************************************/
schedule.post("/deactivate-schedule-setting", (req, res) => {
  ScheduleSetting.findOne({
    where: {
      ScheduleSettingPK: req.body.ScheduleSettingPK
    }
  })
  .then(scheduleSetting =>{
    //res.json(req.body)
    if(scheduleSetting){
      scheduleSetting.update({
        IsActive: false
      });
      res.json("Program Schedule setting has been deactivated")
    }
    else{
      res.json("Cannot deactivate schedule setting")
    }    
  })
  .catch(err => {
    res.send("error: " + err + "   " + req.body.ProgramPK);
  })
});


/**********************************************
   ADD NEW SCHEDULE RECORD TO SCHEDULE TABLE
 **********************************************/
schedule.post("/add-new-schedule", (req, res) => {
  Schedule.create(req.body)
    .then(schedule => {
      res.json(schedule.SchedulePK);
    })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });
});


/*************************************
  GET ALL PROGRAM SCHEDULES OVERVIEW
 *************************************/
schedule.get("/get-all-schedule-setting", (req, res) => {
  ScheduleSetting.findAll({
    where: {
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

/**************************************
  GET PROGRAM SCHEDULE SETTING BY ID
 **************************************/
schedule.get("/get-schedule-setting-by-id/:id", (req, res) => {
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
schedule.get("/get-schedule-by-id-start-end/:id/:start/:end",(req,res) => {
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
