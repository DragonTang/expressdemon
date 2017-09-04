import express from 'express'
const router = express.Router()

export default function (config) {
  config.forEach((val) => {
    const { method, path, type } = val
    router[type](path, method)
  })

  return router
}
