const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'payment',
  {
    PaymentPK: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    ReservationPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    UserPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    PaymentType: {
      type: Sequelize.INTEGER
    },
    Total: {
      type: Sequelize.INTEGER
    },
    ChargeToken: {
      type: Sequelize.TEXT
    },
    CreatedDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false
  }
)