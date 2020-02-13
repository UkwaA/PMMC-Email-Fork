const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'program',
  {
    ProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.TEXT
    },
    Description: {
      type: Sequelize.TEXT
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
    timestamps: false
  }
)