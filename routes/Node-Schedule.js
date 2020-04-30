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

var NodeScheduler = require('node-schedule');
const Schedule = require("../models/Schedule");
const SessionDetails = require("../models/SessionDetails");
const ScheduleSetting = require("../models/ScheduleSetting");
const BlackoutDate = require("../models/ProgramBlackoutDate");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

nodeschedule.use(bodyParser.json());
nodeschedule.use(cors());

/********************************************* */

// var rule = new NodeScheduler.RecurrenceRule();
// rule.second = 5;  

// NodeScheduler.scheduleJob(rule, function(){
//     console.log("Updating database every 1 minute and 5 seconds")
//     var todayDate = (new Date()).toISOString()
//     Schedule.update({
//         IsActive : false
//     },{
//         where:{
//             Start:{
//                 [Op.lt]: todayDate
//             }
//         }
//     })
//     .then(()=>{

//     })
//     .catch(err => {  
//         res.send("errorExpressErr: " + err);
//       });
//   });


// ========================END=====================
  module.exports = nodeschedule;



  