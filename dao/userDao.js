import crypto from 'crypto'
import { User } from '../model'

export const getUserList = async (req, res) => {
  console.log(3333333)
    console.log(req.cookies['testSession'])
        console.log(req.cookies['bcd'])
                console.log(req.cookies['abc'])
      console.log(33333333)
  return User.findAll()
}

export const addUser = async (req, res) => {
  const { name, password } = req.body
  const hash = crypto.createHash('md5').update(password).digest('hex')
  return User.findOrCreate({where: { name, password: hash }})
  .spread((user, created) => {
    if (created)
      return Promise.resolve([1])
    return Promise.resolve({error: '相同用户名和密码存在'})
  })
}
