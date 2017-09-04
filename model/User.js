import Sequelize from 'Sequelize'
import db from '../utils/db'

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  password: {
		type: Sequelize.STRING
	}
},
{  freezeTableName: true })

export default User
