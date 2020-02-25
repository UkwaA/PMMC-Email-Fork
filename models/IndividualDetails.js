const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'individualdetails',
  {
    IndividualProgramPK: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    InsureProviderName:{
        type: Sequelize.BOOLEAN
    },
    InsureRecipientName:{
        type: Sequelize.BOOLEAN
    },
    InsurePolicyNo:{
        type: Sequelize.BOOLEAN
    },
    InsurePhoneNo:{
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
    CreatedBy: {
        type: Sequelize.INTEGER
    },
    CreatedDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false
  }
)