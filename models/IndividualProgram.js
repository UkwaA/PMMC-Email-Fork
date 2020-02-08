const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'individualprogram',
  {
    IndividualPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Program_FK:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    ParticipantName: {
        type: Sequelize.TEXT
    },
    ParticipantAge :{
        type: Sequelize.INTEGER
    },
    Gender : {
        type:Sequelize.TEXT
    },
    MerchSize : {
        type: Sequelize.TEXT
    },
    AllergyInfo : {
        type: Sequelize.TEXT
    },
    SpecialInfo : {
        type: Sequelize.TEXT
    },
    InsuranceProviderName:{
            type: Sequelize.TEXT
    },
    InsuranceRecipientName:{
        type: Sequelize.TEXT
    },
    InsurancePolicyNo:{
        type: Sequelize.TEXT
    },
    InsurancePhoneNo:{
        type: Sequelize.TEXT
    },
    AuthorizedPickupName1:{
        type: Sequelize.TEXT
    },
    AuthorizedPickupPhone1 :{
        type: Sequelize.TEXT
    },
    AuthorizedPickupName2:{
        type: Sequelize.TEXT
    },
    AuthorizedPickupPhone2 :{
        type: Sequelize.TEXT
    },
    EarlyDropOff: {
        type: Sequelize.TEXT
    },
    LatePickup:{
        type: Sequelize.TEXT
    },
    MediaRelease:{
        type : Sequelize.BOOLEAN
    },
    EmergencyMedicalRelease:{
        type: Sequelize.BOOLEAN
    },
    LiabilityAgreement: {
        type: Sequelize.BOOLEAN
    },
    FullAmount : {
        type: Sequelize.INTEGER
    },
    CreatedBy: {
        type: Sequelize.INTEGER
    },
    CreatedDate: {
        type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
)