const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'program',
  {
    programpk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    createdby: {
      type: Sequelize.TEXT
    },
    createddate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)