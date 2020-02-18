const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'groupprogram',
  {
    GroupProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramFK:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    AdultQuantity:{
        type: Sequelize.BOOLEAN
    }, 
    Age57Quantity:{
        type: Sequelize.BOOLEAN
    },
    Age810Quantity:{
        type: Sequelize.BOOLEAN
    },
    Age1113Quantity:{
        type: Sequelize.BOOLEAN
    },
    TotalQuantity:{
        type: Sequelize.BOOLEAN
    },
    Deposit:{
        type: Sequelize.BOOLEAN
    },
    EducationFK:{
        type: Sequelize.BOOLEAN
    },
    ProgramRestriction:{
        type: Sequelize.BOOLEAN
    },
    DepositAmount:{
        type: Sequelize.BOOLEAN
    },
    FullAmount:{
        type: Sequelize.BOOLEAN
    },
    MaximumParticipant:{
        type: Sequelize.BOOLEAN
    },    
    OrganizationName: {
        type: Sequelize.BOOLEAN
    },
    GradeLevel: {
        type: Sequelize.BOOLEAN
    },
    ScoutProgram: {
        type: Sequelize.BOOLEAN
    },
    TeacherName: {
        type: Sequelize.BOOLEAN
    },
    TeacherEmail: {
        type: Sequelize.BOOLEAN
    },
    TeacherPhoneNo: {
        type: Sequelize.BOOLEAN
    },
    AlternativeDate: {
        type: Sequelize.BOOLEAN
    },
    EducationPurpose:{
        type: Sequelize.BOOLEAN
    },
    CreatedBy: {
        type: Sequelize.INTEGER
    },
    CreatedDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false
  }
)