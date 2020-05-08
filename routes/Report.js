const express = require("express");
const cors = require("cors");
const report = express.Router();
const bodyParser = require("body-parser");

const Program = require("../models/Program");
const IndividualProgramRequirement = require("../models/IndividualRequirement");
const GroupProgramRequirement = require("../models/GroupRequirement");
const Schedule = require("../models/Schedule");
const SessionDetails = require("../models/SessionDetails");
const ScheduleSetting = require("../models/ScheduleSetting");
const BlackoutDate = require("../models/ProgramBlackoutDate");

//Define veriable for Sequelize database
const db = require('../db');
const Sequelize = db.sequelize;
const Op = Sequelize.Op;

report.use(bodyParser.json());
report.use(cors());

/****************************************
 * GET RESERVATION BY YEAR RANGE
 * return an arr of objects:
 * {    ProgramPK: '',
 *      ProgramName: '',
 *      Data : [....
 *              {Year: '',
                'jan' : '',
                'feb' : '',
                'mar' : '',
                'apr' : '',
                'may' : '',
                'jun' : '',
                'jul' : '',
                'aug' : '',
                'sep' : '',
                'oct' : '',
                'nov' : '',
                'dec' : ''}
 *      ]
 * }
 * *************************************/
const monthLookUpTable = {
    '01': 'jan', '1': 'jan',
    '02': 'feb', '2': 'feb',
    '03' : 'mar', '3' : 'mar',
    '04' : 'apr', '4' : 'apr',
    '05' : 'may', '5' : 'may',
    '06' : 'jun', '6' : 'jun',
    '07' : 'jul', '7' : 'jul',
    '08' : 'aug', '8' : 'aug',
    '09' : 'sep', '9' : 'sep',
    '10' : 'oct',
    '11' : 'nov',
    '12' : 'dec'
}
report.get("/get-reservation-by-year-range/:start/:end", (req, res) => {    
    var query = `SELECT  program.ProgramPK,program.Name, schedule.Start, substring(schedule.Start, 1, 4) as Year, 
                    substring(schedule.Start, 6,2) as Month, count(*) as Count
                FROM pmmc.reservationheader, pmmc.schedule, pmmc.program
                WHERE reservationheader.SchedulePK = schedule.SchedulePK
                    AND schedule.ProgramPK = program.ProgramPK
                    AND substring(schedule.Start, 1, 4) between (:start) and (:end)
                GROUP BY Year, Month, program.Name
                ORDER BY program.ProgramPK`;
    Sequelize.query(query,{ 
        replacements: {start: req.params.start, end:req.params.end },
        type: Sequelize.QueryTypes.SELECT})
    .then((reservationInfo) =>{        
        var returnReservationInfo = [];
        reservationInfo.forEach(reservation =>{
            //Check if a program exists in return object
            var tempData = {
                year: reservation.Year,
                'jan' : 0,
                'feb' : 0,
                'mar' : 0,
                'apr' : 0,
                'may' : 0,
                'jun' : 0,
                'jul' : 0,
                'aug' : 0,
                'sep' : 0,
                'oct' : 0,
                'nov' : 0,
                'dec' : 0
            }
            var lookupByProgramPK = returnReservationInfo.filter(x => x.ProgramPK === reservation.ProgramPK);
            if(lookupByProgramPK.length === 0){
                var tempObject = {
                    ProgramPK: reservation.ProgramPK,
                    ProgramName : reservation.Name,
                    Data : []
                }                
                tempData[monthLookUpTable[reservation.Month]] = reservation.Count;
                tempObject.Data.push(tempData);
                returnReservationInfo.push(tempObject)                
            }
            else{                
                var lookupByYear = lookupByProgramPK[0].Data.filter(x => x.year === reservation.Year);
                if(lookupByYear.length === 0){                    
                    tempData[monthLookUpTable[reservation.Month]] = reservation.Count;
                    lookupByProgramPK[0].Data.push(tempData);                    
                }
                else{
                    lookupByYear[0][monthLookUpTable[reservation.Month]] = reservation.Count;
                }
            }
            
        });

        res.json(returnReservationInfo);
    })
    .catch(err => {
        res.send("errorExpressErr: " + err);
      }) 
});

/****************************************
 * GET PAYMENT BY YEAR RANGE
 * return an arr of objects:
    {Year: paymentYear,
        'jan' : '',
        'feb' : '',
        'mar' : '',
        'apr' : '',
        'may' : '',
        'jun' : '',
        'jul' : '',
        'aug' : '',
        'sep' : '',
        'oct' : '',
        'nov' : '',
        'dec' : ''}

 * *************************************/
report.get("/get-income-by-year-range/:start/:end", (req, res) => {    
    var query = `SELECT payment.CreatedDate, year(payment.CreatedDate) as Year, month(payment.CreatedDate) as Month, Round(sum(total/100),0) as Total
                FROM pmmc.payment
                WHERE year(payment.CreatedDate) between (:start) and (:end)
                Group by Year, Month
                Order by Year desc`;
    Sequelize.query(query,{ 
        replacements: {start: req.params.start, end:req.params.end },
        type: Sequelize.QueryTypes.SELECT})
    .then((paymentInfo) =>{        
        var returnReservationInfo = [];
        paymentInfo.forEach(payment =>{
            var tempData = {
                year: payment.Year,
                'jan' : 0,
                'feb' : 0,
                'mar' : 0,
                'apr' : 0,
                'may' : 0,
                'jun' : 0,
                'jul' : 0,
                'aug' : 0,
                'sep' : 0,
                'oct' : 0,
                'nov' : 0,
                'dec' : 0
            };
            var lookupByYear = returnReservationInfo.filter(x => x.year === payment.Year);
            if(lookupByYear.length === 0){  
                tempData[monthLookUpTable[payment.Month]] = payment.Total;
                returnReservationInfo.push(tempData);
            }
            else{
                lookupByYear[0][monthLookUpTable[payment.Month]] = payment.Total;
            }            
        })
        res.json(returnReservationInfo);
    })
    .catch(err => {
        res.send("errorExpressErr: " + err);
      }) 
    
})


// ========================END=====================
module.exports = report;
