const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'groupprogram',
  {
    groupprogram_pk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    program_fk:{
        type: Sequelize.TEXT
    },
    adultquantity:{
        type: Sequelize.INTEGER
    }, 
    age57quantity:{
        type: Sequelize.INTEGER
    },
    age810quantity:{
        type: Sequelize.INTEGER
    },
    age1113quantity:{
        type: Sequelize.INTEGER
    },
    totalquantity:{
        type: Sequelize.INTEGER
    },
    price:{
        type: Sequelize.DOUBLE
    },
    deposit:{
        type: Sequelize.BOOLEAN
    },
    education_pk:{
        type: Sequelize.INTEGER
    },
    programrestriction:{
        type: Sequelize.BOOLEAN
    },
    depositamount:{
        type: Sequelize.INTEGER
    },
    fullamount:{
        type: Sequelize.INTEGER
    },
    maximumparticipant:{
        type: Sequelize.INTEGER
    },
    createdby: {
        type: Sequelize.INTEGER
    },
    createddate: {
        type: Sequelize.DATE  //TYPE DATETIME IN MYSQL
    },
    organizationname: {
        type: Sequelize.TEXT
    },
    gradelevel: {
        type: Sequelize.TEXT
    },
    scoutprogram: {
        type: Sequelize.TEXT
    },
    teachername: {
        type: Sequelize.TEXT
    },
    teacheremail: {
        type: Sequelize.TEXT
    },
    teacherphoneno: {
        type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  }
)