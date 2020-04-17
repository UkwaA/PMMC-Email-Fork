const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'paymentdetails',
  {
    PaymentDetailsPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PaymentPK: {
      type: Sequelize.INTEGER
    },
    UserPK: {
      type: Sequelize.INTEGER
    },
    SameAddress: {
      type: Sequelize.INTEGER
    },
    NameOnCC: {
      type: Sequelize.TEXT
    },
    CCNumber: {
      type: Sequelize.TEXT
    },
    ExpireDate: {
      type: Sequelize.TEXT
    },
    CCV: {
      type: Sequelize.TEXT
    },
    Total: {
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