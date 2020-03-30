const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'userdetails',
  {
    UserPK: {
      type:Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: Sequelize.TEXT
    },
    LastName: {
      type: Sequelize.TEXT
    },
    PhoneNo: {
      type: Sequelize.TEXT,
    },
    Address: {
      type: Sequelize.TEXT
    },
    City: {
        type: Sequelize.TEXT
    },
    State: {
        type: Sequelize.TEXT
    },
    Zipcode: {
        type: Sequelize.TEXT
    },
    Subscribe: {
      type: Sequelize.INTEGER,
      // default: false
    }
  },
  {
    timestamps: false
  }
)