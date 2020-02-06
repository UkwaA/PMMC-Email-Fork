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
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    createddate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    email: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)