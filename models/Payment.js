const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'payment',
  {
    PaymentPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ReservationPK: {
      type: Sequelize.INTEGER
    },
    UserPK: {
      type: Sequelize.INTEGER
    }
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false
  }
)