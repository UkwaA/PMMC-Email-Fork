const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'individualprogram',
  {
    IndividualProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProgramFK:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ParticipantName: {
        type: Sequelize.BOOLEAN
    },
    ParticipantAge :{
        type: Sequelize.BOOLEAN
    },
    Gender : {
        type:Sequelize.BOOLEAN
    },
    MerchSize : {
        type: Sequelize.BOOLEAN
    },
    AllergyInfo : {
        type: Sequelize.BOOLEAN
    },
    SpecialInfo : {
        type: Sequelize.BOOLEAN
    },
    InsuranceproviderName:{
        type: Sequelize.BOOLEAN
    },
    InsuranceRecipientName:{
        type: Sequelize.BOOLEAN
    },
    InsurancePolicyNo:{
        type: Sequelize.BOOLEAN
    },
    InsurancePhoneNo:{
        type: Sequelize.BOOLEAN
    },
    AuthorizedPickupName1:{
        type: Sequelize.BOOLEAN
    },
    AuthorizedPickupPhone1 :{
        type: Sequelize.BOOLEAN
    },
    AuthorizedPickupName2:{
        type: Sequelize.BOOLEAN
    },
    AuthorizedPickupPhone2 :{
        type: Sequelize.BOOLEAN
    },
    EarlyDropOff: {
        type: Sequelize.BOOLEAN
    },
    LatePickup:{
        type: Sequelize.BOOLEAN
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
    createdby: {
        type: Sequelize.INTEGER
    },
    createddate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)