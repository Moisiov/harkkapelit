import express from 'express'
import { authenticateJwt } from '../middlewares/auth.middleware.js'
import * as gameAdController from '../controllers/gameAd.controller.js'

const router = express.Router()

router.put('/api/gamead', authenticateJwt, gameAdController.newGameAd)

export default router