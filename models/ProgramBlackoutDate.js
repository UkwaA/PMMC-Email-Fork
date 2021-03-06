const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "programblackoutdate",
  {    
    ProgramBlackoutDatePK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true      
    },
    ProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Description:{
        type: Sequelize.TEXT
    },      
    Start: {
      type: Sequelize.TEXT
    },
    End: {
      type: Sequelize.TEXT
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
