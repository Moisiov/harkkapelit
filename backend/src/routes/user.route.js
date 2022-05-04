import express from 'express'
import * as userController from '../controllers/user.controller.js'

const router = express.Router()

router.post('/api/login/google', userController.userLoginGoogle)

export default router