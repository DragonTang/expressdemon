import configRoute from './configRoute'
import { getUserList, addUser } from '../dao/userDao'
import responseWrap from '../utils/responseWrap'


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
