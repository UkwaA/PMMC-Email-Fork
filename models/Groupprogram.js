const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'groupprogram',
  {
    groupprogrampk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    programfk:{
        type: Sequelize.TEXT
    },
    adultquantity:{
        type: Sequelize.BOOLEAN
    }, 
    age57quantity:{
        type: Sequelize.BOOLEAN
    },
    age810quantity:{
        type: Sequelize.BOOLEAN
    },
    age1113quantity:{
        type: Sequelize.BOOLEAN
    },
    totalquantity:{
        type: Sequelize.BOOLEAN
    },
    deposit:{
        type: Sequelize.BOOLEAN
    },
    education_pK:{
        type: Sequelize.BOOLEAN
    },
    programrestriction:{
        type: Sequelize.BOOLEAN
    },
    depositamount:{
        type: Sequelize.BOOLEAN
    },
    fullamount:{
        type: Sequelize.BOOLEAN
    },
    maximumparticipant:{
        type: Sequelize.BOOLEAN
    },
    createdby: {
        type: Sequelize.INTEGER
    },
    createddate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    organizationname: {
        type: Sequelize.BOOLEAN
    },
    gradelevel: {
        type: Sequelize.BOOLEAN
    },
    scoutprogram: {
        type: Sequelize.BOOLEAN
    },
    teachername: {
        type: Sequelize.BOOLEAN
    },
    teacheremail: {
        type: Sequelize.BOOLEAN
    },
    teacherphoneno: {
        type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false
  }
)