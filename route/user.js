import configRoute from './configRoute'
import userController from '../controller/userController'
import responseWrap from '../utils/responseWrap'

const { getUserList, addUser } = userController

const config = [
  {
    type: 'get',
    path: '/getUserList',
    method: responseWrap(getUserList)
  },
  {
    type: 'post',
    path: '/addUser',
    method: responseWrap(addUser)
  }
]
export default configRoute(config)
