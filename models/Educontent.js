const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'educontent',
  {
    education_pk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    program_fk:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }    
  },
  {
    timestamps: false
  }
)