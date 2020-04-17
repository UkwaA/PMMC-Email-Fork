const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'marketinginformation',
  {
    MarketingPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramPK: {
      type: Sequelize.INTEGER
    },
    UserPK: {
      type: Sequelize.INTEGER
    },
    MarketingContentPK: {
      type: Sequelize.INTEGER
    },
    Memo: {
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