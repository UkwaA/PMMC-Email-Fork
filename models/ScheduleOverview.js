const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "scheduleoverview",
  {
    ScheduleOverviewPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Title:{
        type: Sequelize.TEXT
    },
    Description:{
        type: Sequelize.TEXT
    },
    StartTimezone: {
        type: Sequelize.TEXT
    },    
    Start: {
      type: Sequelize.TEXT
    },
    End: {
      type: Sequelize.TEXT
    },
    EndTimezone: {
        type: Sequelize.TEXT
    },
    MaximumParticipant: {
      type: Sequelize.INTEGER
    },
    CurrentNumberParticipant: {
      type: Sequelize.INTEGER
    },
    RecurrenceRule:{
        type: Sequelize.TEXT
    },
    RecurrenceID:{
        type: Sequelize.TEXT
    },
    RecurrenceException:{
        type: Sequelize.TEXT
    },
    CreatedBy: {
      type: Sequelize.INTEGER
    },
    CreatedDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    IsAllDay: {
      type: Sequelize.BOOLEAN
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
