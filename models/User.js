const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'user',
  {
    UserPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: Sequelize.TEXT
    },
    Password: {
      type: Sequelize.TEXT
    },
    Role_FK: {
      type: Sequelize.INTEGER
    },
    Email: {
      type: Sequelize.TEXT
    },
    CreatedDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    IsActive: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false
  }
)