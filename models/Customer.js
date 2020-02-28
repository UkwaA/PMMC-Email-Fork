const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'customer',
  {
    CustomerPK: {
      type:Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserFK:
    {
      type:Sequelize.TEXT,
      default:'0'
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
    Address2: {
      type: Sequelize.TEXT
    },
    City: {
        type: Sequelize.TEXT
    },
    State: {
        type: Sequelize.TEXT
    },
    ZipCode: {
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