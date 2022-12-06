import express from 'express'
import * as sportsController from '../controllers/sport.controller.js'

const router = express.Router()

router.get('/api/sport/getall', sportsController.getSports)

export default router