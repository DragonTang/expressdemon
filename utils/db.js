import Sequelize from 'Sequelize'
import dbConfig from '../config/db/dbConfig.json'

const config = dbConfig[process.env.NODE_ENV || 'development']
const { database, username, password, host, type, pool, port } = config

const db = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: type,
  pool: pool
})

db.authenticate()
.then(() => {
  console.log('database connection has been established successfully.')
  return db.sync()
})
.then(() => {
  console.log('init model success!')
})
.catch(err => {
  console.error('Unable to connect to the database:', err)
})

export default db
