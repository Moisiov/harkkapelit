import * as userService from '../services/user.service.js'
import { getJwt, verifyOAuth2Token } from '../utils/auth.util.js'

export const userLoginGoogle = async (req, res, next) => {
    const { token } = req.body

    const user = await verifyOAuth2Token(token)

    var userInDatabase = await userService.getUserByEmail(user.email)
    
    if (!userInDatabase) {
        await userService.create(user)
    }

    const { accessToken } = getJwt(user)


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

export const logout = (req, res) => {
    return res.clearCookie(
        'access_token'
        ).status(
            200
        ).json({
            message: 'Logged out'
        })
}