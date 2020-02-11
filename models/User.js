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