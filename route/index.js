import express from 'express'
// import tiger from './tiger'
// import user from './user'
// import login from './login'
import image from '../controller/image.js'

const router = express.Router()

// router.use('/tiger', tiger)
// router.use('/user', user)
// router.use('/login', login)
router.use('/image', image)

export default router
