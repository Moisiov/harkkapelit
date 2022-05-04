import * as sportsService from '../services/sport.service.js'

export const getSports = async (req, res, next) => {
    const sports = await sportsService.get()

    res.status(200)
    res.json(sports)
}