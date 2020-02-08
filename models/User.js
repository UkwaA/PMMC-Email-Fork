const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'user',
  {
    User_PK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: Sequelize.TEXT
    },
    Password: {
      type: Sequelize.TEXT
    },
    Role: {
      type: Sequelize.TEXT
    },
    Email: {
      type: Sequelize.TEXT
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