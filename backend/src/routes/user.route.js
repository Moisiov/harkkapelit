import express from 'express'
import * as userController from '../controllers/user.controller.js'

const router = express.Router()

router.post('/api/login/google', userController.userLoginGoogle)
router.post('/api/token', userController.token)
router.post('/api/logout', userController.logout)

export default router