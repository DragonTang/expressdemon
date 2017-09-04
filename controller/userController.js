import { _getUserList, _addUser } from '../dao/userDao'

export default {
  getUserList (req, res) {
    return _getUserList(req, res)
  },
  addUser (req, res) {
    return _addUser(req, res)
  }
}
