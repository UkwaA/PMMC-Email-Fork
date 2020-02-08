const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'groupprogram',
  {
    GroupProgram_PK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Program_FK:{
        type: Sequelize.TEXT
    },
    AdultQuantity:{
        type: Sequelize.INTEGER
    }, 
    Age57Quantity:{
        type: Sequelize.INTEGER
    },
    Age810Quantity:{
        type: Sequelize.INTEGER
    },
    Age1113Quantity:{
        type: Sequelize.INTEGER
    },
    TotalQuantity:{
        type: Sequelize.INTEGER
    },
    Price:{
        type: Sequelize.DOUBLE
    },
    Deposit:{
        type: Sequelize.BOOLEAN
    },
    Education_PK:{
        type: Sequelize.INTEGER
    },
    ProgramRestriction:{
        type: Sequelize.BOOLEAN
    },
    DepositAmount:{
        type: Sequelize.INTEGER
    },
    FullAmount:{
        type: Sequelize.INTEGER
    },
    MaximumParticipant:{
        type: Sequelize.INTEGER
    },
    CreatedBy: {
        type: Sequelize.TEXT
    },
    CreatedDate: {
        type: Sequelize.DATE  //TYPE DATETIME IN MYSQL
    },
    OrganizationName: {
        type: Sequelize.TEXT
    },
    GradeLevel: {
        type: Sequelize.TEXT
    },
    ScoutProgram: {
        type: Sequelize.TEXT
    },
    TeacherName: {
        type: Sequelize.TEXT
    },
    TeacherEmail: {
        type: Sequelize.TEXT
    },
    TeacherPhoneNo: {
        type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  }
)