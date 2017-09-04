import { Code } from '../config/resource'

export default function (fn) {
  return async (req, res, next) => {
    try {
      const result = await fn(req, res)
      const data = typeof result === 'object' ? result : { result }
      res.status(Code.OK)
      .json({ code: 0, data: data })
    } catch (err) {
      next(err)
    }
  }
}
