const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'customer',
  {
    customer_pk: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_fk: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.TEXT
    },
    lastname: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    phoneno: {
        type: Sequelize.TEXT
    },
    subscribe: {
        type: Sequelize.TINYINT
    },
    address: {
        type: Sequelize.TEXT
    },
    city: {
        type: Sequelize.TEXT
    },
    state: {
        type: Sequelize.TEXT
    },
    zipcode: {
        type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  }
)