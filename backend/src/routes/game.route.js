import express from 'express'
import { authorization } from '../middlewares/auth.middleware.js'
import * as gameController from '../controllers/game.controller.js'

const router = express.Router()

router.post('/api/game/create', authorization, gameController.create)
router.get('/api/game/getall', gameController.getAll)

export default router