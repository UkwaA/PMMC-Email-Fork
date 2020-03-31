const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "schedule",
  {
    SchedulePK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Date: {
      type: Sequelize.TEXT
    },
    StartTime: {
      type: Sequelize.TEXT
    },
    EndTime: {
      type: Sequelize.TEXT
    },
    MaximumParticipant: {
      type: Sequelize.INTEGER
    },
    CurrentNumberParticipant: {
      type: Sequelize.INTEGER
    },
    CreatedBy: {
      type: Sequelize.INTEGER
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
