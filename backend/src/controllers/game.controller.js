import * as gameService from '../services/game.service.js'

export const create = async (req, res, next) => {
    const user = req.user
    const game = await gameService.create(req.body, user)

    if (!game) {
        return res.sendStatus(500)
    }

    return res.sendStatus(200)
}