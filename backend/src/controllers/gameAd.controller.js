import * as gameAdService from '../services/gameAd.service.js'
import { getUserByEmail } from '../services/user.service.js'

export const newGameAd = async (req, res, next) => {
    const user = req.user
    const newAd = await gameAdService.createNewAd(req.body, user)

    if (!newAd) {
        return res.sendStatus(500)
    }

    return res.sendStatus(200)
}