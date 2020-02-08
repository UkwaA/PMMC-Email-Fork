const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'user',
  {
    user_pk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.TEXT
    },
    email: {
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