const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'individualprogram',
  {
    individualpk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    program_fk:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    participantname: {
        type: Sequelize.TEXT
    },
    participantage :{
        type: Sequelize.INTEGER
    },
    gender : {
        type:Sequelize.TEXT
    },
    merchsize : {
        type: Sequelize.TEXT
    },
    allergyinfo : {
        type: Sequelize.TEXT
    },
    specialinfo : {
        type: Sequelize.TEXT
    },
    insuranceprovidername:{
            type: Sequelize.TEXT
    },
    insurancerecipientname:{
        type: Sequelize.TEXT
    },
    insurancepolicyno:{
        type: Sequelize.TEXT
    },
    insurancephoneno:{
        type: Sequelize.TEXT
    },
    authorizedpickupname1:{
        type: Sequelize.TEXT
    },
    authorizedpickupphone1 :{
        type: Sequelize.TEXT
    },
    authorizedpickupname2:{
        type: Sequelize.TEXT
    },
    authorizedpickupphone2 :{
        type: Sequelize.TEXT
    },
    earlydropoff: {
        type: Sequelize.TEXT
    },
    latepickup:{
        type: Sequelize.TEXT
    },
    mediarelease:{
        type : Sequelize.BOOLEAN
    },
    emergencymedicalrelease:{
        type: Sequelize.BOOLEAN
    },
    liabilityagreement: {
        type: Sequelize.BOOLEAN
    },
    fullamount : {
        type: Sequelize.INTEGER
    },
    createdby: {
        type: Sequelize.INTEGER
    },
    createddate: {
        type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
)