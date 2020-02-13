const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'educontent',
  {
    EducationPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramFK:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }    
  },
  {
    timestamps: false
  }
)