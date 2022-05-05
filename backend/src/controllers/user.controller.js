import * as userService from '../services/user.service.js'
import { OAuth2Client  } from 'google-auth-library'
import { getJwt } from '../utils/auth.util.js'

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

export const userLoginGoogle = async (req, res, next) => {
    const { token } = req.body

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    })
    const { name, email, picture } = ticket.getPayload()

    const user = {
        name: name,
        email: email
    }

    var userInDatabase = await userService.getUserByEmail(user.email)
    
    if (!userInDatabase) {
        await userService.create(user)
    }

    const { accessToken, refreshToken } = getJwt(user)

    res.status(200)
    res.json({
        user: user,
        accessToken: accessToken,
        refreshToken: refreshToken
    })
}