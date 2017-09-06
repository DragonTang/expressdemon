import crypto from 'crypto'
import { User } from '../model'

export const _getUserList = async (req, res) => {
  return User.findAll()
}

export const _addUser = async (req, res) => {
  const { name, password } = req.body
  const hash = crypto.createHash('md5').update(password).digest('hex')
  return User.findOrCreate({where: { name, password: hash }})
  .spread((user, created) => {
    if (created)
      return Promise.resolve([1])
    return Promise.resolve({error: '相同用户名和密码存在'})
  })
}
