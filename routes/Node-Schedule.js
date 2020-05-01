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
const express = require("express");
const cors = require("cors");
const nodeschedule = express.Router();
const bodyParser = require("body-parser");

var NodeSchedule = require('node-schedule');
const Schedule = require("../models/Schedule");
const SessionDetails = require("../models/SessionDetails");
const ScheduleSetting = require("../models/ScheduleSetting");
const BlackoutDate = require("../models/ProgramBlackoutDate");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

nodeschedule.use(bodyParser.json());
nodeschedule.use(cors());

/********************************************* */

//Define a new rule that runs everyday
var everydayRule = new NodeSchedule.RecurrenceRule();
everydayRule.hour = 6;
everydayRule.minute = 0;
everydayRule.second = 0;
everydayRule.dayOfWeek = new NodeSchedule.Range(0,6);


/**********************************************
 * UPDATE SCHEDULE TABLE 
 * Set IsActive to "false" for schedule that pasts today's date
 **********************************************/
NodeSchedule.scheduleJob(everydayRule, function(){
    console.log("Updating schedule table every day at 6AM")
    var todayDate = (new Date()).toISOString()
    Schedule.update({
        IsActive : false
    },{
        where:{
            End:{
                [Op.lt]: todayDate
            }
        }
    })
    .then(()=>{
    })
    .catch(err => {  
        res.send("errorExpressErr: " + err);
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
          }
      }
  })
  .then(()=>{
  })
  .catch(err => {  
      res.send("errorExpressErr: " + err);
    });
});

// ========================END=====================
  module.exports = nodeschedule;



  