const Sequelize = require('sequelize')
const db = {}

process.env.DBNAME = 'pmmc'
process.env.USERNAME = 'root'
process.env.PASSWORD = '0923'


// Connection to LocalDB
const sequelize = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
  host: 'localhost',
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
// const sequelize = new Sequelize('pmmc', 'admin', '12345678', {
//   host: 'pmmc1.cwdubawie51w.us-west-1.rds.amazonaws.com',
//   port: 3306,
//   logging: console.log,
//   maxConcurrentQueries: 100,
//   dialect: 'mysql',
//   dialectOptions: {
//     connectTimeout: 60000
//   },
//   pool: { maxConnections: 5, maxIdleTime: 30},
//   language: 'en'
// })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
