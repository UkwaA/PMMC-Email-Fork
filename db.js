require('dotenv').config()
const Sequelize = require('sequelize')
const db = {}


// Connection to LocalDB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// Connection to AWS
// const sequelize = new Sequelize(process.env.AWZ_DB_NAME, process.env.AWZ_DB_USER, process.env.AWZ_DB_PASSWORD, {
//   host: process.env.AWZ_DB_HOST,
//   port: process.env.AWZ_DB_PORT,
//   logging: console.log,
//   maxConcurrentQueries: 100,
//   dialect: 'mysql',
//   define: {
//       timestamps: false
//   },
//   dialectOptions: {
//     connectTimeout: 60000
//   },
//   pool: { maxConnections: 5, maxIdleTime: 30},
//   language: 'en'
// })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
