const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'grouprequirement',
  {
    GroupProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    SubProgramPK:{
        type: Sequelize.INTEGER
    }, 
    ProgramRestriction:{
        type: Sequelize.BOOLEAN
    },
    OrganizationName: {
        type: Sequelize.BOOLEAN
    },
    GradeLevel: {
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
    OtherInfo:{
        type: Sequelize.BOOLEAN
    },
    CreatedBy: {
        type: Sequelize.INTEGER
    },
    CreatedDate: {
        type: Sequelize.DATEONLY,
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