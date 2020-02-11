const Sequelize = require('sequelize')
const db = {}
// const sequelize = new Sequelize('pmmc', 'root', '123456', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

const sequelize = new Sequelize('pmmc', 'admin', '12345678', {
  host: 'pmmc1.cwdubawie51w.us-west-1.rds.amazonaws.com',
  port: 3306,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 60000
  },
  pool: { maxConnections: 5, maxIdleTime: 30},
  language: 'en'
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
