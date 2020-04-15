const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "reservationheader",
  {
    ReservationPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    SchedulePK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    UserPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    PaymentPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    MarketingPK: {
        type: Sequelize.INTEGER
    },
    PaymentStatus: {
      type: Sequelize.BOOLEAN
    },
    ResevationStatus: {
      type: Sequelize.BOOLEAN
    },
    NumberOfParticipant: {
      type: Sequelize.INTEGER
    },
     CreatedDate: {
      type: Sequelize.DATEONLY
    },
    IsActive: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    freezeTableName: true
  },
  {
    timestamps: false
  }
);
