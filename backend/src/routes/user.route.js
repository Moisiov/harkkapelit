import express from 'express'
import { authorization } from '../middlewares/auth.middleware.js'
import * as userController from '../controllers/user.controller.js'

const router = express.Router()

router.post('/api/login/google', userController.userLoginGoogle)
router.post('/api/token', userController.token)
router.get('/api/logout', authorization, userController.logout)

export default router