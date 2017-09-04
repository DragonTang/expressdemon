import express from 'express'
import tiger from './tiger'
import user from './user'

const router = express.Router()

router.use('/tiger', tiger)
router.use('/user', user)

export default router
