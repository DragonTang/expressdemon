import configRoute from './configRoute'
import { login } from '../dao/loginDao'
import responseWrap from '../utils/responseWrap'


const config = [
  {
    type: 'post',
    path: '/',
    method: login
  }
]
export default configRoute(config)
