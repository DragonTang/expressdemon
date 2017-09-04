import Sequelize from 'Sequelize'
import db from '../utils/db'

const Tiger = db.define('tiger', {
  id: {
    type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  color: {
		type: Sequelize.STRING
	},
  weight: {
    type: Sequelize.INTEGER
  },
  age: {
    type: Sequelize.INTEGER
  }
},
{  freezeTableName: true })

export default Tiger
