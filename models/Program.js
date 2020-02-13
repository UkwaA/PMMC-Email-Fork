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
    FullAmount: {
      type: Sequelize.INTEGER
    },
    CreatedDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    CreatedBy: {
      type: Sequelize.INTEGER
    },
    ImgData: {
      type: Sequelize.TEXT
    }
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false
  }
)