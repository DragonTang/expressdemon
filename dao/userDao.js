import crypto from 'crypto'
import { User } from '../model'

export const _getUserList = async (req, res) => {
  return User.findAll()
}

export const _addUser = async (req, res) => {
  const { name, password } = req.body
  const hash = crypto.createHash('md5').update(password).digest('hex')

  return UserMode.then(() => {
    return User.create({ name, password: hash})
  })
  .catch((err) => {
    console.error('create table user error:', err)
  })
}
