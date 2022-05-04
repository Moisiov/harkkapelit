import express from 'express'
import * as gameAdController from '../controllers/gameAd.controller.js'

const router = express.Router()

router.put('/api/gamead', gameAdController.newGameAd)

export default router