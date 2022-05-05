import * as gameAdService from '../services/gameAd.service.js'
import { getUserByEmail } from '../services/user.service.js'

export const newGameAd = async (req, res, next) => {
    const user = req.user
    await gameAdService.createNewAd(req.body, user)
}