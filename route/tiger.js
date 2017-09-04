import configRoute from './configRoute'
import tigerController from '../controller/tigerController'

const { getTigers }  = tigerController

const config = [
  {
    type: 'get',
    path: '/getTigers',
    method: getTigers
  },
  {
    type: 'post',
    path: '/updateTigers',
    method: (req, res) => {
      console.log(req.body)
      res.status(200)
      .json({ msg: 'hahaha' })
    },
  },
  {
    type: 'options',
    path: '/path',
    method: (req, res) => {
      console.log(req.body)
      console.log(123)
      res.send('qqq')
    }
  }
]

export default configRoute(config)
