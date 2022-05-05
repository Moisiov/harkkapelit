import * as userService from '../services/user.service.js'
import { getJwt, verifyOAuth2Token, refreshJwt } from '../utils/auth.util.js'

export const userLoginGoogle = async (req, res, next) => {
    const { token } = req.body

    const user = await verifyOAuth2Token(token)

    var userInDatabase = await userService.getUserByEmail(user.email)
    
    if (!userInDatabase) {
        await userService.create(user)
    }

    const { accessToken, refreshToken } = getJwt(user)


    return res.cookie(
        'access_token',
        accessToken,
        {
            httpOnly: true,
            secure: false
        }).status(
            200
        ).json({
            user: user
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
    return res.clearCookie(
        'access_token'
        ).status(
            200
        ).json({
            message: 'Logged out'
        })
}