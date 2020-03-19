const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "schedule",
  {
    SchedulePK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    ProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Date: {
      type: Sequelize.DATE
    },
    StartTime: {
      type: Sequelize.TIME
    },
    EndTime: {
      type: Sequelize.TIME
    },
    MaximumParticipant: {
      type: Sequelize.INTEGER
    },
    CurrentNumberParticipant: {
      type: Sequelize.INTEGER
    },
    CreatedBy: {
      type: Sequelize.TIME
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
    freezeTableName: true
  },
  {
    timestamps: false
  }
);
