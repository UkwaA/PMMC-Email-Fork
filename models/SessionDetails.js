const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "sessiondetails",
  {
    SessionDetailsPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ScheduleSettingPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,      
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
    RecurrenceRule:{
        type: Sequelize.TEXT
    },
    EndRepeatDate:{
      type: Sequelize.DATE
    },
    RepeatDay:{
      type: Sequelize.TEXT
    },
    RecurrenceID:{
        type: Sequelize.TEXT
    },
    RecurrenceException:{
        type: Sequelize.TEXT
    },
    Color:{
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
