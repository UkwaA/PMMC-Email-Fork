const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'educontent',
  {
    Education_PK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Program_FK:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }    
  },
  {
    timestamps: false
  }
)