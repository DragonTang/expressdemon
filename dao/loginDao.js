import crypto from 'crypto'
import { Code } from '../config/resource'
import { User } from '../model'

export const login = async (req, res, next) => {
  const { name, password } = req.body
  const hash = crypto.createHash('md5').update(password).digest('hex')
  return User.findAll({
    where: {
      name,
      password: hash
    }
  })
  .then((result) => {
    if (result.length) {
      console.log(req.Url)
      res.cookie('testCookie11', 'hhh', { maxAge: 1000 * 600, domain: '192.168.33.94' })
      // req.session.isVisit = 'abcdefg';
      res.status(Code.OK)
      res.send({code: 1, data: result})
      return
    }
    res.status(Code.OK)
    res.send({code: 0, error: '用户名或密码不正确'})
  })
  .catch(err => next(err))
}
