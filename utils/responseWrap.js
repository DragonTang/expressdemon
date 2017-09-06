import { Code } from '../config/resource'

export default function (fn) {
  return async (req, res, next) => {
    try {
      const result = await fn(req, res)
      let val = {}
      if (typeof result === 'object' && result.error) {
        val.code = 0 // 0失败， 1成功
        val.error = result.error
      } else if (typeof result === 'object' && !result.error) {
        val.code = 1
        val.data = result
      } else {
        val.code = 1
        val.data = { result }
      }
      res.status(Code.OK)
      .json(val)
    } catch (err) {
      next(err)
    }
  }
}
