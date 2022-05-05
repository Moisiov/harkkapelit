import express from 'express'
import { authorization } from '../middlewares/auth.middleware.js'
import * as gameAdController from '../controllers/gameAd.controller.js'

const router = express.Router()

router.post('/api/gamead', authorization, gameAdController.newGameAd)

export default router