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
      type: Sequelize.TEXT('long')
    },
    DepositAmount: {
      type: Sequelize.INTEGER
    },
    PricePerParticipant: {
      type: Sequelize.INTEGER
    },
    MaximumParticipant: {
      type: Sequelize.INTEGER
    },
    ImgData: {
      type: Sequelize.TEXT
    },
    ProgramType: {
      type: Sequelize.INTEGER
    },
    CreatedDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    CreatedBy: {
      type: Sequelize.INTEGER
    },
    IsActive: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false
  }
)