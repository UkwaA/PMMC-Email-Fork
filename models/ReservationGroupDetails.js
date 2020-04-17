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
    ProgramRestriction: {
      type: Sequelize.TEXT
    },
    OrganizationName: {
      type: Sequelize.TEXT
    },
    GradeLevel: {
      type: Sequelize.TEXT
    },
    TeacherName: {
      type: Sequelize.TEXT
    },
    TeacherEmail: {
      type: Sequelize.TEXT
    },
    TeacherPhoneNo: {
      type: Sequelize.TEXT
    },
    AlternativeDate: {
      type: Sequelize.DATE
    },
    EducationPurpose: {
      type: Sequelize.TEXT
    }
  },
  {
    freezeTableName: true
  },
  {
    timestamps: false
  }
);
