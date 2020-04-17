const express = require("express");
const cors = require("cors");
const schedule = express.Router();
const bodyParser = require("body-parser");

const ReservationGroupProgram = require("../models/ReservationGroupDetails");
const ReservationIndividualProgram = require("../models/ReservationIndividualDetails");
const Program = require("../models/Program");
const Schedule = require("../models/Schedule");
const SessionDetails = require("../models/SessionDetails");
const ScheduleSetting = require("../models/ScheduleSetting");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

schedule.use(bodyParser.json());
schedule.use(cors());

/**************************************
   GET ALL CURRENT PROGRAM SCHEDULES
 **************************************/
schedule.get("/get-all-schedule-settings-by-program/:id", (req, res) => {
  ScheduleSetting.findAll({
    where : {
		ProgramPK: req.params.id,
      IsActive: true
    }
  })
  .then(scheduleSetting =>{
    if(scheduleSetting.length > 0){
      res.json(scheduleSetting)
    }
    else{
      res.json({err:"There're no available schedules."})
    }
  })
  .catch(err => {
    res.send("errorExpressErr: " + err);
  });
});

/**************************************
   ADD NEW SCHEDULE SETTING
 **************************************/
schedule.post("/add-new-schedule-setting", (req, res) => {
  ScheduleSetting.create(req.body)
  .then(newScheduleSetting =>{
    res.json(newScheduleSetting.ScheduleSettingPK)
  })
  .catch(err => {
    res.send("errorExpressErr: " + err);
  })
});

/*********************************************
   UPDATE SCHEDULE SETTING & SESSION DETAILS
 **********************************************/
//1. Update Schedule Setting
schedule.post("/update-schedule-setting", (req, res) => {
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
});

//2. Update all SessionDetails associated with the ScheduleSetting
schedule.post("/update-schedule-setting-session-details", (req, res) => {
  SessionDetails.bulkCreate(req.body, {
    updateOnDuplicate: ["Start", "End","RecurrenceRule", "EndRepeatDate"],
    returning: true
  })
  .then(result =>{
    res.json(result)
  })
  .catch(err => {
    res.send("errorExpressErr: " + err);
  })
});

/***************************************************
   GET ALL CURRENT PROGRAM SCHEDULES BY PROGRAMPK
 ***************************************************/
schedule.get("/get-all-schedule-settings-by-id/:id", (req, res) => {
  ScheduleSetting.findAll({
    where : {
      ProgramPK: req.params.id,
      IsActive: true
    }
  })
  .then(scheduleSetting =>{
    if(scheduleSetting.length > 0){
      res.json(scheduleSetting)
    }
    else{
      res.json("There're no available schedules for this program.")
    }
  })
  .catch(err => {
    res.send("errorExpressErr: " + err);
  });
});

/************************************
   ADD NEW PROGRAM SESSION DETAILS
 ************************************/
schedule.post("/add-new-session-details", (req, res) => {
  timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }; 

  startTime = (new Date(req.body.Start)).toLocaleString('en-US', timeFormatOptions);
  endTime = (new Date(req.body.End)).toLocaleString('en-US', timeFormatOptions);
  
  SessionDetails.findAll({
    where: {
		ProgramPK: req.body.ProgramPK,
		ScheduleSettingPK: req.body.ScheduleSettingPK,
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
      SessionDetails.create(req.body)
      .then(newSession => {
        res.json(newSession)
      })
    }
  })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });
});

/************************************
  UPDATE PROGRAM SESSION DETAILS
 ************************************/
schedule.post("/update-session-details", (req, res) => {
  timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }; 

  startTime = (new Date(req.body.Start)).toLocaleString('en-US', timeFormatOptions);
  endTime = (new Date(req.body.End)).toLocaleString('en-US', timeFormatOptions);
  
  SessionDetails.findAll({
    where: {
      ScheduleSettingPK: req.body.ScheduleSettingPK,
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
  .then(sessions =>{
    if(sessions.length > 0){ //if there exists session in selected time frame      
        res.json(
          {error:"There exists sessions in this time frame" 
            + ". Please edit the existing session that is in this time frame OR choose another time frame"}
          )
    }
    else{
      //If there's no events having the same start and end time => update the current
      //###### Update in sessiondetails table #######
        SessionDetails.update(req.body, {
          where: {
            SessionDetailsPK: req.body.SessionDetailsPK
          }
        })
        .then(result => {
          if (result == 1) {
          //###### Update in schedule table #######
          //1. Get all Schedules from schedule table
            Schedule.findAll({
              where:{
                ProgramPK: req.body.ProgramPK,
                SessionDetailsPK: req.body.SessionDetailsPK
              }
            })
            .then(schedules =>{
              if(schedules){
                //2.Update in bulk these schedules
                schedules.forEach(schedule =>{
                  tempStartDate = (new Date(schedule.Start)).toISOString().slice(0,10)                  
                  schedule.Start = (new Date(tempStartDate + "T" + startTime)).toString()
                  schedule.End = (new Date(tempStartDate + "T" + endTime)).toString()
                })
                res.json(schedules)                                  
              }
            })
          }
          else {
            res.send({
              error: "Cannot update session detail"
            });
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })    
    }
  })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });    
});

/*********************************************************
  UPDATE PROGRAM SESSION DETAILS - THEN UPDATE SCHEDULES
  IN BULK
 *********************************************************/
schedule.post("/update-schedules-in-bulk", (req, res) => {
    //Update in schedule table
    Schedule.bulkCreate(req.body, {
      updateOnDuplicate: ["Start", "End"],
      returning: true
    })
    .then(result =>{
      res.json(result)
    })
    .catch(err => {
      res.send('error: ' + err)
    }) 
});

/***************************************
   DEACTIVATE PROGRAM SESSION DETAILS
 ***************************************/
schedule.post("/deactivate-session-details", (req, res) => {
  SessionDetails.findOne({
    where: {
      ScheduleSettingPK: req.body.ScheduleSettingPK //FINDME
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
  GET ALL PROGRAM SESSIONS DETAILS
 *************************************/
schedule.get("/get-all-session-details", (req, res) => {
  SessionDetails.findAll({
    where: {
      IsActive: true
    }
  })
    .then(sessions => {      
      res.json(sessions);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

/**************************************
  GET PROGRAM SESSION DETAILS BY ID
 **************************************/
schedule.get("/get-session-details-by-id/:id", (req, res) => {
  SessionDetails.findAll({
    where: {
      ProgramPK: req.params.id,
      IsActive: true
    },
    order: [['Start', 'ASC']]
  })
    .then(sessions => {      
      res.json(sessions);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

/***********************************
  GET ALL PROGRAM SCHEDULES BY ID,
  START AND END TIME
 ***********************************/
schedule.get("/get-schedule-by-id-start-end/:session/:id/:start/:end",(req,res) => {
  Schedule.findOne({
    where: {
      SessionDetailsPK: req.params.session,
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
