const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.sequelize.define(
  "reservationindividualdetails",
  {
    ReservationPK: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    ParticipantName: {
      type: Sequelize.TEXT
    },
    ParticipantAge: {
      type: Sequelize.INTEGER
    },
    Gender: {
      type: Sequelize.TEXT
    },
    MerchSize: {
      type: Sequelize.TEXT
    },
    AllergyInfo: {
      type: Sequelize.TEXT
    },
    SpecialInfo: {
      type: Sequelize.TEXT
    },
    InsureProviderName: {
      type: Sequelize.TEXT
    },
    InsureRecipientName: {
      type: Sequelize.TEXT
    },
    InsurePolicyNo: {
      type: Sequelize.TEXT
    },
    InsurePhoneNo: {
      type: Sequelize.TEXT
    },
    AuthorizedPickupName1: {
      type: Sequelize.TEXT
    },
    AuthorizedPickupPhone1: {
      type: Sequelize.TEXT
    },
    AuthorizedPickupName2: {
      type: Sequelize.TEXT
    },
    AuthorizedPickupPhone2: {
      type: Sequelize.TEXT
    },
    EarlyDropOff: {
      type: Sequelize.TEXT
    },
    LatePickup: {
      type: Sequelize.TEXT
    },
    MediaRelease: {
      type: Sequelize.TEXT
    },
    EmergencyMedicalRelease: {
      type: Sequelize.TEXT
    },
    LiabilityAgreement: {
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
