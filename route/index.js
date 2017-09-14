import express from 'express'
import tiger from './tiger'
import user from './user'
import login from './login'

const router = express.Router()

router.use('/tiger', tiger)
router.use('/user', user)
router.use('/login', login)

export default router
