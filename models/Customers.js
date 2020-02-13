const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'customer',
  {
    CustomerPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserFK: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.TEXT
    },
    LastName: {
        type: Sequelize.TEXT
    },
    Email: {
        type: Sequelize.TEXT
    },
    PhoneNo: {
        type: Sequelize.TEXT
    },
    Subscribe: {
        type: Sequelize.BOOLEAN
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
    }
  },
  {
    timestamps: false
  }
)