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
    SessionDetailsPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Start: {
      type: Sequelize.TEXT
    },
    End: {
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
