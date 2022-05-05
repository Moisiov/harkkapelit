import * as userService from '../services/user.service.js'
import { getJwt, verifyOAuth2Token, refreshJwt } from '../utils/auth.util.js'

// TODO: store somewhere else, Redis maybe?
global.refreshTokens = []

export const userLoginGoogle = async (req, res, next) => {
    const { token } = req.body

    const user = await verifyOAuth2Token(token)

    var userInDatabase = await userService.getUserByEmail(user.email)
    
    if (!userInDatabase) {
        await userService.create(user)
    }

    const { accessToken, refreshToken } = getJwt(user)
    refreshTokens.push(refreshToken)

    res.status(200)
    res.json({
        user: user,
        accessToken,
        refreshToken
    })
}

export const token = (req, res) => {
    const { token } = req.body

    if (!token) {
        return res.sendStatus(401)
    }

    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403)
    }

    const { status, accessToken } = refreshJwt(token)

    if (status === 403) {
        return res.sendStatus(403)
    }

    res.json({ accessToken })
}

export const logout = (req, res) => {
    const { token } = req.body
    refreshTokens.filter(token => t !== token)

    res.send('Logged out')
}