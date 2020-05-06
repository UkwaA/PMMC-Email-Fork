/********************************************
 * ========================================
 * This file to set up a node schedule runing everyday to update the database
 * 1. Check schedule table, if there are any past schedule (Start Date < todayDate)
 *          => set to inactive
 * 2. Check schedulesettting table
 * 3. Check sessiondetail table
 * 4. Check reservation table, send email reminder 10 days before the event
 * 5. Check reservation table for recently past events, 
 *          send Thank you email and survey after the event happened
 * ========================================
*********************************************/


'use strict';
require('dotenv').config()
//Define veriable for Sequelize database
const db = require('../db');
const Sequelize = db.sequelize;
const Op = Sequelize.Op;

const express = require("express");
const cors = require("cors");
const nodeschedule = express.Router();
const bodyParser = require("body-parser");

var NodeSchedule = require('node-schedule');
const Schedule = require("../models/Schedule");
const SessionDetails = require("../models/SessionDetails");
const ScheduleSetting = require("../models/ScheduleSetting");
const BlackoutDate = require("../models/ProgramBlackoutDate");
const ReservationHeader = require("../models/ReservationHeader");

//Define node-mailer
const emailService = require('./Email');

nodeschedule.use(bodyParser.json());
nodeschedule.use(cors());

/********************************************* */

//Define a new rule that runs everyday
var everydayRule = new NodeSchedule.RecurrenceRule();
everydayRule.hour = 6;
everydayRule.minute = 0;
everydayRule.second = 0;
everydayRule.dayOfWeek = new NodeSchedule.Range(0,6);

var testRule = new NodeSchedule.RecurrenceRule();
testRule.second = 6;
/**********************************************
 * UPDATE SCHEDULE TABLE 
 * Set IsActive to "false" for schedule that pasts today's date
 **********************************************/
NodeSchedule.scheduleJob(testRule, function(){
    console.log("Updating schedule table every day at 6AM")
    var todayDate = (new Date()).toISOString()
    Schedule.findAll({
        where:{
            End:{
                [Op.lt]: todayDate
            },
            IsActive: true
        }
    })
    .then((schedules)=>{        
        if(schedules.length > 0){
            //get the list of SchedulePK            
            let schedulePKArr = schedules.map((schedule) => schedule.SchedulePK);
            //Update schedule table
            Schedule.update({
                IsActive : false
            },{
                where:{
                    SchedulePK: {[Op.in]: schedulePKArr}
                }
            })
            .catch(err => {  
                console.log("errorExpressErr: " + err);
              });
              
            //TODO: update reservationheader on reservation status to attended (2)
            ReservationHeader.update({
                ReservationStatus: process.env.RESERVATION_STATUS_CODE_ATTENDED
            },{
                where:{
                    SchedulePK: {[Op.in]: schedulePKArr}
                }
            })
            .catch(err => {  
                console.log("errorExpressErr: " + err);
              });

            //TODO: send out post-program email to thank you, survey
            var query = `(SELECT schedule.SchedulePK, schedule.ProgramPK, program.Name, schedule.Start, schedule.End, reservationheader.UserPK, users.Email
                    FROM pmmc.schedule 
                        INNER JOIN pmmc.reservationheader on schedule.SchedulePK = reservationheader.SchedulePK 
                        INNER JOIN pmmc.program on schedule.ProgramPK = program.ProgramPK 
                        INNER JOIN pmmc.users on reservationheader.UserPK = users.UserPK                         
                    WHERE schedule.SchedulePK in (:schedulePKlist))`
            Sequelize.query(query,{ 
                replacements: {schedulePKlist: schedulePKArr},
                type: Sequelize.QueryTypes.SELECT})
            .then(function(reservationInfo) {
                let returnReservationInfo = []
                reservationInfo.forEach(reservation =>{                    
                    //Check for object with existing SchedulePK
                    var lookupResult = returnReservationInfo.filter(x => x.SchedulePK === reservation.SchedulePK);                    
                    if(lookupResult.length === 0){
                        let temp ={
                            SchedulePK: reservation.SchedulePK,
                            ProgramName: reservation.Name,
                            Start: reservation.Start,
                            End: reservation.End,
                            EmailList: [reservation.Email]
                        }
                        returnReservationInfo.push(temp)                        
                    }
                    else{
                        //Check if email exists in the list => no, push to the list
                        if(lookupResult[0].EmailList.indexOf(reservation.Email) < 0 ){
                            lookupResult[0].EmailList.push(reservation.Email)
                        }                        
                    }
                })
                
                //Loop through each reservation to get info and send email
                returnReservationInfo.forEach(reservationInfo =>{
                    emailService.sendPostProgramEmail(reservationInfo, info => {
                        console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);                    
                    });
                })
                    
            })
        }
        else{

        }            
    })
    .catch(err => {  
        console.log("errorExpressErr: " + err);
      });
  });

  /**********************************************
 * UPDATE SESSION DETAILS TABLE 
 * Set IsActive to "false" for sessions that pasts today's date
 **********************************************/
NodeSchedule.scheduleJob(everydayRule, function(){
  console.log("Updating sessiondetails date table every day at 6AM")
  var todayDate = (new Date()).toISOString().slice(0,10)
  SessionDetails.update({
      IsActive : false
  },{
      where:{
          EndRepeatDate:{
              [Op.lt]: todayDate
          },
          IsActive: true
      }
  })
  .then(()=>{
  })
  .catch(err => {  
        console.log("errorExpressErr: " + err);
    });
});

/**********************************************
 * UPDATE PROGRAM BLACKOUT DATE TABLE 
 * Set IsActive to "false" for blackout date that pasts today's date
 **********************************************/
NodeSchedule.scheduleJob(everydayRule, function(){
    console.log("Updating programblackout date table every day at 6AM")
    var todayDate = (new Date()).toISOString()
    BlackoutDate.update({
        IsActive : false
    },{
        where:{
            End:{
                [Op.lt]: todayDate
            },
            IsActive: true
        }
    })
    .then(()=>{
    })
    .catch(err => {  
        console.log("errorExpressErr: " + err);
      });
  });
  

// ========================END=====================
  module.exports = nodeschedule;



  