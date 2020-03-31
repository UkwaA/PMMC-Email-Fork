const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "reservationgroupdetails",
  {
    ReservationPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    AdultQuantity: {
      type: Sequelize.INTEGER
    },
    Age57Quantity: {
      type: Sequelize.INTEGER
    },
    Age810Quantity: {
      type: Sequelize.INTEGER
    },
    Age1112Quantity: {
      type: Sequelize.INTEGER
    },
    Age1314Quantity: {
      type: Sequelize.INTEGER
    },
    Age1415Quantity: {
      type: Sequelize.INTEGER
    },
    Age1517Quantity: {
      type: Sequelize.INTEGER
    },
    TotalQuantity: {
      type: Sequelize.INTEGER
    },
    FullAmount: {
      type: Sequelize.INTEGER
    },
    ProgramRestriction: {
      type: Sequelize.TEXT
    },
    OrganizationName: {
      type: Sequelize.TEXT
    },
    GradeLevel: {
      type: Sequelize.TEXT
    },
    ScoutProgram: {
      type: Sequelize.BOOLEAN
    },
    TeacherName: {
      type: Sequelize.BOOLEAN
    },
    TeacherEmail: {
      type: Sequelize.BOOLEAN
    },
    TeacherPhoneNo: {
      type: Sequelize.BOOLEAN
    },
    AlternativeDate: {
      type: Sequelize.BOOLEAN
    },
    EducationPurpose: {
      type: Sequelize.BOOLEAN
    },
    CreatedBy: {
      type: Sequelize.INTEGER
    },
    CreatedDate: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW
    }
  },
  {
    freezeTableName: true
  },
  {
    timestamps: false
  }
);
