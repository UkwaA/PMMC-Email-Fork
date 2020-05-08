const express = require("express");
const cors = require("cors");
const schedule = express.Router();
const bodyParser = require("body-parser");

const Program = require("../models/Program");
const IndividualProgramRequirement = require("../models/IndividualRequirement");
const GroupProgramRequirement = require("../models/GroupRequirement");
const Schedule = require("../models/Schedule");
const SessionDetails = require("../models/SessionDetails");
const ScheduleSetting = require("../models/ScheduleSetting");
const BlackoutDate = require("../models/ProgramBlackoutDate");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

schedule.use(bodyParser.json());
schedule.use(bodyParser.urlencoded({ extended: true }));
schedule.use(cors());

/*************************************************************
   GET ALL PROGRAM SCHEDULE SETTING AND REQUIREMENTS FOR PROGRAM MANAGEMENT
 ************************************************************/
schedule.get("/get-all-programs-with-schedule-settings-and-requirements", (req, res) => {    
  //Get a list of all active programs
  Program.findAll({
    where:{
      IsActive: true
    }
  })
  .then(allPrograms =>{ //<---- Program.findAll    
    if(allPrograms.length > 0){
      let returnAllPrograms = []
      programPKArr = []
      allPrograms.forEach(program => {
        let tempProgram = {
          ProgramPK: program.ProgramPK,
          Name: program.Name,
          Description: program.Description,
          DepositAmount: program.DepositAmount,
          PricePerParticipant: program.PricePerParticipant,
          MaximumParticipant: program.MaximumParticipant,
          ImgData: program.ImgData,
          ProgramType: program.ProgramType,
          CreatedDate: program.CreatedDate,
          CreatedBy: program.CreatedBy,
          IsActive: program.IsActive,
          hasSchedule: false,
          hasRequirement: false
        }
        
        returnAllPrograms.push(tempProgram)
        programPKArr.push(program.ProgramPK)
      })
      //1. Get all schedulesetting associated with existing programPK
      ScheduleSetting.findAll({
        where:{
          ProgramPK: {[Op.in]: programPKArr},
          IsActive: true
        }
      })
      .then(scheduleSetting =>{ //<---- ScheduleSetting.findAll    
        //2.Get all Group requirement associated with existing programPK
        GroupProgramRequirement.findAll({
          where:{
            GroupProgramPK: {[Op.in]: programPKArr},
          }
        })
        .then(groupRequirement =>{//<---- GroupProgramRequirement.findAll 
          //3.Get all Individual requirement associated with existing programPK
          IndividualProgramRequirement.findAll({
            where:{
              IndividualProgramPK: {[Op.in]: programPKArr},
            }
          })
          .then(individualRequirement =>{//<---- IndividualProgramRequirement.findAll  
            //check each program and set hasSchedule and hasRequirement
            returnAllPrograms.forEach(program=>{
              //check if the program has schedulesetting
              if(scheduleSetting.length > 0){
                var schedule = scheduleSetting.filter(x => x.ProgramPK === program.ProgramPK);
                if(schedule.length > 0){
                  program.hasSchedule = true
                }
              }
              //check if program has group/individual requirement
              var tempRequirement = []
              if(program.ProgramType === 0 && groupRequirement.length > 0){                
                tempRequirement = groupRequirement.filter(x => x.GroupProgramPK === program.ProgramPK);
              }
              else if(program.ProgramType === 1 && individualRequirement.length > 0){
                tempRequirement = individualRequirement.filter(x => x.IndividualProgramPK === program.ProgramPK);
              }              
              if(tempRequirement.length > 0){
                  program.hasRequirement = true                
              }
            })
            res.json(returnAllPrograms)
          })
        })
      }) 
    }
  })
  .catch(err => {  //<---- Program.findAll
    res.send("errorExpressErr: " + err);
  });
});

/********************************************************
   GET ALL CURRENT PROGRAM SCHEDULE SETTINGS BY PROGRAM
 ********************************************************/
schedule.get("/get-schedule-settings-by-program/:id", (req, res) => {
  ScheduleSetting.findAll({
    where : {
		ProgramPK: req.params.id,
      IsActive: true
    },
    order: [['Start', 'DESC']]
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
  var startDate = req.body.Start.slice(0,10)
  var endDate = req.body.End.slice(0,10)
  ScheduleSetting.findAll({
    where:{
      //Check if there exists another schedule setting in this time range
      ProgramPK: req.body.ProgramPK,
      [Op.or]: [
        {
          Start:{[Op.lte]: req.body.Start},
          End:{[Op.gte]: req.body.Start}
        },
        {
          Start:{[Op.lte]: req.body.End},
          End:{[Op.gte]: req.body.End}
        },
        {
          Start:{[Op.gte]: req.body.Start},
          End:{[Op.lte]: req.body.End}
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + startDate + "%"}
            },
            {
              End:{[Op.like]: "%" + startDate + "%"}
            }
          ]
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + endDate + "%"}
            },
            {
              End:{[Op.like]: "%" + endDate + "%"}
            }
          ]
        }
      ],      
      IsActive: true
    }
  })
  .then(scheduleSetting => {
    if(scheduleSetting.length > 0 || startDate == endDate){
      res.json({error: "The Start/End date falls between existing schedules. Please select another Start/End Date."})
    }
    else{
      ScheduleSetting.create(req.body)
      .then(newScheduleSetting =>{
        res.json(newScheduleSetting.ScheduleSettingPK)
      })
      .catch(err => {
        res.send("errorExpressErr: " + err);
      })
    }
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
  var startDate = req.body.Start.slice(0,10)
  var endDate = req.body.End.slice(0,10)
  ScheduleSetting.findAll({
    where:{
      //Check if there exists another schedule setting in this time range
      ScheduleSettingPK:{
        [Op.ne]: req.body.ScheduleSettingPK
      },
      ProgramPK: req.body.ProgramPK,
      [Op.or]: [
        {
          Start:{[Op.lte]: req.body.Start},
          End:{[Op.gte]: req.body.Start}
        },
        {
          Start:{[Op.lte]: req.body.End},
          End:{[Op.gte]: req.body.End}
        },
        {
          Start:{[Op.gte]: req.body.Start},
          End:{[Op.lte]: req.body.End}
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + startDate + "%"}
            },
            {
              End:{[Op.like]: "%" + startDate + "%"}
            }
          ]
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + endDate + "%"}
            },
            {
              End:{[Op.like]: "%" + endDate + "%"}
            }
          ]
        }
      ],      
      IsActive: true
    }
  })
  .then(scheduleSetting => {
    //Does not allow schedule setting has the same Start and End date
    if(scheduleSetting.length > 0 || startDate == endDate){
      res.json({error: "The Start/End date falls between existing schedules. Please select another Start/End Date."})
    }
    else{
      ScheduleSetting.update(req.body, {
        where: {
          ScheduleSettingPK: req.body.ScheduleSettingPK
        }
       })
       .then(result => {
        if (result == 1) {
          res.json({
           message: "Schedule setting was updated successfully."
          });
        }
        else {
          res.json({
           error: "Cannot update schedule setting"
          });
        }
       })
       .catch(err => {
        res.send('error: ' + err)
       })
    }
  })	
  .catch(err => {
    res.send('error: ' + err)
   })
});

//2. Update all SessionDetails associated with the ScheduleSetting
schedule.post("/update-schedule-setting-session-details", (req, res) => {
  SessionDetails.bulkCreate(req.body, {
    updateOnDuplicate: ["Start", "End","RecurrenceRule", "EndRepeatDate"]    
  })
  .then(result =>{
    res.json(result)
  })
  .catch(err => {
    res.send("errorExpressErr: " + err);
  })
});

/*********************************************
   DEACTIVATE SCHEDULE SETTING
 **********************************************/
schedule.post("/deactivate-schedule-setting", (req, res) => {
  //1. Update in schedulesetting table
  ScheduleSetting.update({
    IsActive: false
  },{    
    where : {      
      ScheduleSettingPK: req.body.ScheduleSettingPK
    }
  })
  .then(scheduleSetting =>{
    //=======2. Update in sessiondetails table    ==========
    SessionDetails.findAll({
      where:{
        ScheduleSettingPK: req.body.ScheduleSettingPK,
        IsActive: true
      }
    })
    .then(sessions =>{
      if(sessions.length > 0){      
          //Update in session details table  
          SessionDetails.update({
            IsActive: false
          },{
            where : {      
              ScheduleSettingPK: req.body.ScheduleSettingPK,
              IsActive: true
            } 
          })
          .then(() =>{
              //Update in schedule table
              sessions.forEach(session =>{
                Schedule.update({
                  IsActive: false
                },{
                  where :{
                    ProgramPK: session.ProgramPK,
                    SessionDetailsPK: session.SessionDetailsPK
                  }
                })
                .catch(err => {
                  res.send("errorExpressErr: " + err);
                })
              })
              res.json({message:"Sessions and schedules were successfully updated."})
          })    
          .catch(err => {
            res.send("errorExpressErr: " + err);
        })
      }
      else{
        res.json({message: "There is no session to remove."})
      }
    })    
    //======= END UPDATE in sessiondetails table  ==========
  })
  .catch(err => {
    res.send("errorExpressErr: " + err);
  })
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

  startTime = (req.body.Start).slice(11,19);
  endTime = (req.body.End).slice(11,19);
  
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
    if(scheduleSetting.length > 0 || startTime === endTime){ //if there exists session in selected time frame      
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

  startTime = (req.body.Start).slice(11,19);
  endTime = (req.body.End).slice(11,19);
  
  SessionDetails.findAll({
    where: {
      SessionDetailsPK:{
        [Op.ne]: req.body.SessionDetailsPK
      },
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
            SessionDetailsPK: req.body.SessionDetailsPK,
            IsActive: true
          }
        })
        .then(result => {
          if (result == 1) {
          //###### Update in schedule table #######
          //1. Get all Schedules from schedule table
            Schedule.findAll({
              where:{
                ProgramPK: req.body.ProgramPK,
                SessionDetailsPK: req.body.SessionDetailsPK,
                IsActive: true
              }
            })
            .then(schedules =>{
              if(schedules){
                //2.Update in bulk these schedules
                schedules.forEach(schedule =>{
                  tempStartDate = (schedule.Start).slice(0,10)                  
                  schedule.Start = (tempStartDate + "T" + startTime + ".000Z")
                  schedule.End = (tempStartDate + "T" + endTime + ".000Z")
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
      updateOnDuplicate: ["Start", "End"]      
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
  //Set IsActive to false for record in sesisondetails table
  SessionDetails.update({
    IsActive: false
  },{
    where: {
      SessionDetailsPK: req.body.SessionDetailsPK,
      IsActive: true
    }
  })
  .then(session =>{    
    //Set IsActive to false for records in schedule table associated with the SessionDetailsPK
    Schedule.update({
      IsActive: false
    },{
      where : {
        ProgramPK: req.body.ProgramPK,
        SessionDetailsPK: req.body.SessionDetailsPK,
        IsActive: true
      }
    })
    .then(schedule =>{
      res.json({message: "Session details and schedules have been deactivated"})
    })    
  })
  .catch(err => {
    res.send("error: " + err + "   " + req.body.ProgramPK);
  })
});

/************************************
   ADD NEW ADDITIONAL SESSION DETAILS
 ************************************/
schedule.post("/add-new-additional-session-details", (req, res) => {
  var startDate = (new Date(req.body.Start)).toISOString()

  SessionDetails.findAll({
    where: {
      ProgramPK: req.body.ProgramPK,
      ScheduleSettingPK: req.body.ScheduleSettingPK, 
      Start: req.body.Start,
      End: req.body.End,
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
      //If there's no events having the same start and end time => check if session falls in blackout date
      BlackoutDate.findAll({
        where: {
          ProgramPK: req.body.ProgramPK,
          [Op.or]:[
            {
              Start:{[Op.lte]: startDate},
              End:{[Op.gte]: startDate}
            },
            {
              [Op.or]:[
                {
                  Start:{[Op.like]: "%" + startDate.slice(0,10) + "%"}
                },
                {
                  End:{[Op.like]: "%" + startDate.slice(0,10) + "%"}
                }
              ]
            }
          ],
          IsActive: true
        }
      })
      .then(blackoutDate =>{
        if(blackoutDate.length > 0){
          res.json({error:"This time falls into Blackout Dates. Please select another time."})
        }
        else{
          //If additional session does not fall into any blackout date => create additional session
            SessionDetails.create(req.body)
            .then(newSession => {
              res.json(newSession)
            })
        }
      })
    }
  })
    .catch(err => {
      res.send("errorExpressErr: " + err);
    });
});

/************************************
  UPDATE ADDITIONAL SESSION DETAILS
 ************************************/
schedule.post("/update-additional-session-details", (req, res) => {
  var startDate = (new Date(req.body.Start)).toISOString()
  SessionDetails.findAll({
    where: {
      SessionDetailsPK:{
        [Op.ne]: req.body.SessionDetailsPK
      },
      ScheduleSettingPK: req.body.ScheduleSettingPK,
      ProgramPK: req.body.ProgramPK, 
      Start: req.body.Start,
      End: req.body.End,
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
      //If there's no events having the same start and end time => update the current session detail
      BlackoutDate.findAll({
        where: {
          ProgramPK: req.body.ProgramPK,
          [Op.or]:[
            {
              Start:{[Op.lte]: startDate},
              End:{[Op.gte]: startDate}
            },
            {
              [Op.or]:[
                {
                  Start:{[Op.like]: "%" + startDate.slice(0,10) + "%"}
                },
                {
                  End:{[Op.like]: "%" + startDate.slice(0,10) + "%"}
                }
              ]
            }
          ],
          IsActive: true
        }
      })
      .then(blackoutDate =>{
        if(blackoutDate.length > 0){
          res.json({error:"This time falls into Blackout Dates. Please select another time."})
        }
        else{
            SessionDetails.update(req.body, {
              where: {
                SessionDetailsPK: req.body.SessionDetailsPK          
              }
            })
            .then(result => {
              if(result == 1){
                //Update record in schedule table
                Schedule.update({
                  Start: req.body.Start,
                  End: req.body.End
                },{
                  where:{
                    ProgramPK: req.body.ProgramPK,
                    SessionDetailsPK: req.body.SessionDetailsPK
                  }
                })
                .then(result =>{
                  res.json({message: "Session and schedule have been updated successfully"})
                })
                .catch(err => {
                  res.send("errorExpressErr: " + err);
                })
              }
            })
            .catch(err => {
              res.send("errorExpressErr: " + err);
            })
          }          
        })
      }
    })
    .catch(err => {
        res.send("errorExpressErr: " + err);
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
      //IsActive: true
    }
  })
  .then((schedule) =>{
    res.json(schedule);
  })
  .catch((err) => {
    res.send("error: " + err);
  });
});

/*******************************
  GET ALL PROGRAM SCHEDULES BY PROGRAMPK
 *******************************/
schedule.get("/get-program-schedules-by-programpk/:id", (req, res) => {
  Schedule.findAll({
    where: {
      ProgramPK: req.params.id,
      IsActive: true
    }
  })
    .then(schedules => {
      res.json(schedules);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

/*******************************
  GET ALL PROGRAM SCHEDULES BY SCHEDULEPK
 *******************************/
schedule.get("/get-program-schedules-by-id/:id", (req, res) => {
  Schedule.findAll({
    where: {
      SchedulePK: req.params.id,
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


/**********************************************
   GET ALL BLACKOUT DATE EXCEPTION ARRAY 
   Arr structure: {ProgramPK: "", exceptionDateArr: [each element is a datestring] }
 **********************************************/
schedule.get("/get-all-blackout-date-exception", (req,res) => {
  BlackoutDate.findAll({
    where:{      
      IsActive: true,
    },
    order: [['Start', 'ASC']]
  })
  .then(blackoutDate =>{
    var blackoutDateObj = []
    var found = false;
    //Loop througth blackoudate array to generate exception date string (used for View schedule)
    blackoutDate.forEach(date =>{
      var temp = {
        ProgramPK: date.ProgramPK,
        exceptionDateArr: []
      }
      found = false
      blackoutDateObj.forEach(item =>{
        if(item.ProgramPK === date.ProgramPK){
          found = true
          if(date.Start === date.End){            
            item.exceptionDateArr.push(date.Start.slice(0,10))              
          }
          else{
            for(var d = new Date(date.Start); d <= new Date(date.End); d.setDate(d.getDate() + 1)){
                item.exceptionDateArr.push(d.toISOString().slice(0,10))
            }
          }
        }
      })
      if(!found){
        if(date.Start === date.End){            
          temp.exceptionDateArr.push(date.Start.slice(0,10))              
        }
        else{
          for(var d = new Date(date.Start); d <= new Date(date.End); d.setDate(d.getDate() + 1)){
              temp.exceptionDateArr.push(d.toISOString().slice(0,10))
          }
        }
        blackoutDateObj.push(temp)
      }      
    })
    res.json(blackoutDateObj)
  })
  .catch(err => {
    res.send("error: " + err);
  });

});

/**********************************************
   GET ALL BLACKOUT DATE BY PROGRAM
 **********************************************/
schedule.get("/get-program-blackout-date-by-id/:id", (req,res) =>{
  BlackoutDate.findAll({
    where:{
      ProgramPK: req.params.id,
      IsActive: true,
    },
    order: [['Start', 'DESC']]
  })
  .then(blackoutDate =>{
    res.json(blackoutDate)
  })
  .catch(err => {
    res.send("error: " + err);
  });
})

/**********************************************
   ADD BLACKOUT DATE
 **********************************************/
schedule.post("/add-blackout-date", (req, res) => {
  var startDate = req.body.Start.slice(0,10)
  var endDate = req.body.End.slice(0,10)
  BlackoutDate.findAll({
    where:{
      //Check if there exists another blackout date in this time range
      ProgramPK: req.body.ProgramPK,
      [Op.or]: [
        {
          Start:{[Op.lte]: req.body.Start},
          End:{[Op.gte]: req.body.Start}
        },
        {
          Start:{[Op.lte]: req.body.End},
          End:{[Op.gte]: req.body.End}
        },
        {
          Start:{[Op.gte]: req.body.Start},
          End:{[Op.lte]: req.body.End}
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + startDate + "%"}
            },
            {
              End:{[Op.like]: "%" + startDate + "%"}
            }
          ]
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + endDate + "%"}
            },
            {
              End:{[Op.like]: "%" + endDate + "%"}
            }
          ]
        }
      ],
      IsActive: true
    }
  })
  .then(blackoutDate =>{
    if(blackoutDate.length > 0){
      res.json({error:"There exists another blackout date in this date range. Please select another Start/End Date."})
    }
    else{
      //Create new record in programblackoutdate table
      BlackoutDate.create(req.body)
      .then(newBlackoutDate =>{
          //Check in schedule table if there is any schedules fall into the blackout date => disable it
          Schedule.update({
            IsActive: false
          },
          {
            where :{
              ProgramPK: newBlackoutDate.ProgramPK,
              Start: {
                [Op.between]: [req.body.Start, req.body.End]
              },
              IsActive: true
            }
          })
          .then(() =>{
              //Check in sessiondetail table if there is any additional session (schedulesettingpK = 0) fall 
              //into the blackout date => disable it
              SessionDetails.update({
                IsActive: false
              },
              {
                where :{
                  ProgramPK: newBlackoutDate.ProgramPK,
                  ScheduleSettingPK: 0,
                  Start: {
                    [Op.between]: [req.body.Start, req.body.End]
                  },
                  IsActive: true
                }
              })
              .then(() =>{
                res.json(newBlackoutDate)
              })
              .catch(err => {
                res.send("error: " + err);
              });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      })
      .catch(err => {
        res.send("error: " + err);
      });
    }
  })
  .catch(err => {
    res.send("error: " + err);
  });  
})


/**********************************************
   EDIT BLACKOUT DATE
 **********************************************/
schedule.post("/update-blackout-date", (req, res) => {
  var startDate = req.body.Start.slice(0,10)
  var endDate = req.body.End.slice(0,10)
  BlackoutDate.findAll({
    where:{
      //Check if there exists another blackout date in this time range
      ProgramBlackoutDatePK: {
        [Op.ne]: req.body.ProgramBlackoutDatePK
      },
      ProgramPK: req.body.ProgramPK,
      [Op.or]: [
        {
          Start:{[Op.lte]: req.body.Start},
          End:{[Op.gte]: req.body.Start}
        },
        {
          Start:{[Op.lte]: req.body.End},
          End:{[Op.gte]: req.body.End}
        },
        {
          Start:{[Op.gte]: req.body.Start},
          End:{[Op.lte]: req.body.End}
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + startDate + "%"}
            },
            {
              End:{[Op.like]: "%" + startDate + "%"}
            }
          ]
        },
        {
          [Op.or]:[
            {
              Start:{[Op.like]: "%" + endDate + "%"}
            },
            {
              End:{[Op.like]: "%" + endDate + "%"}
            }
          ]
        }
      ],
      IsActive: true
    }
  })
  .then(blackoutDate => {
    if(blackoutDate.length > 0){
      res.json({error:"There exists another blackout date in this date range. Please select another Start/End Date."})
    }
    else{
      //Update record in programblackoutdate table
      BlackoutDate.update(req.body, {
        where :{
          ProgramBlackoutDatePK: req.body.ProgramBlackoutDatePK
        }
      })
      .then(() =>{
           //Check in schedule table if there is any schedules fall into the blackout date => disable it
           Schedule.update({
            IsActive: false
          },
          {
            where :{
              ProgramPK: req.body.ProgramPK,
              Start: {
                [Op.between]: [req.body.Start, req.body.End]
              },
              IsActive: true
            }
          })
          .then(() =>{
              //Check in sessiondetail table if there is any additional session (schedulesettingpK = 0) fall 
              //into the blackout date => disable it
              SessionDetails.update({
                IsActive: false
              },
              {
                where :{
                  ProgramPK: req.body.ProgramPK,
                  ScheduleSettingPK: 0,
                  Start: {
                    [Op.between]: [req.body.Start, req.body.End]
                  },
                  IsActive: true
                }
              })
              .then(() =>{
                res.json({message: "Blackout date, schedule, and session details have been updated"})
              })
              .catch(err => {
                res.send("error: " + err);
              });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      })
    }
  })
  .catch(err => {
    res.send("error: " + err);
  });  
})

/**********************************************
   DEACTIVATE BLACKOUT DATE
 **********************************************/
schedule.post("/deactivate-blackout-date", (req,res) => {
  BlackoutDate.update({
    IsActive: false
  },{
    where :{
      ProgramBlackoutDatePK: req.body.ProgramBlackoutDatePK
    }
  })
  .then(result =>{
    if(result == 1){
      res.json({message: "Blackout date has been deactivated."})
    }
  })
  .catch(err => {
    res.send("error: " + err);
  });
})

//TODO: reactivate program that was deactivated by this blackout date before ???

/*******************************
  SET PROGRAM COLOR
 *******************************/
schedule.post("/set-program-color", (req,res) => {
  SessionDetails.update({
    Color: req.body.selectedColor
  },
  {
    where : {
      ProgramPK: req.body.ProgramPK
    }
  })
  .then(result =>{
    if (result) {
		  res.send({
			 message: "Program color has been changed."
		  });
		}
		else {
		  res.send({
			 error: "Cannot update program color."
		  });
		}
  })
  .catch(err => {
    res.send("error: " + err);
  });
});


/**********************************************
          UPDATE NUMBER OF PARTICIPANT
 **********************************************/
schedule.post("/update-number-participant/:id", (req,res) => {
  var temp = req.body.value;
 
  Schedule.findOne({
    where :{
      SchedulePK: req.params.id 
    }
  })
  .then((result) => {
    temp = temp + result.CurrentNumberParticipant;
    let isFull = (temp === result.MaximumParticipant ? true : false);

    result.update({
      CurrentNumberParticipant: temp,
      IsFull: isFull
    }).then(
      res.json({
        message: "NUMBER OF PARTICIPANT has been changed."
    }))
    
  })
  .catch(err => {
    res.send("error: " + err);
  });
})



// ========================END=====================
module.exports = schedule;
