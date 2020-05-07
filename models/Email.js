const Sequelize = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
    'email',
    {
        EmailPK: {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        Type: {
            type: Sequelize.TEXT
        },
        Subject: {
            type: Sequelize.TEXT
        },
        Body: {
            type: Sequelize.TEXT
        },
        IsActive: {
            type: Sequelize.BOOLEAN
        },
        FileData: {
            type: Sequelize.JSON
        }
    }
)