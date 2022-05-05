import jwt from 'jsonwebtoken'
import { OAuth2Client  } from 'google-auth-library'

export const getJwt = (user) => {
    const accessToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION })
    const refreshToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION })
    return { accessToken, refreshToken }
}

export const refreshJwt = (token) => {
    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) {
            return {
                status: 403,
                accessToken: null
            }
        }

        const accessToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION })

        return {
            status: 200,
            accessToken: accessToken
        }
    })
}

// Verifies token and returns user
export const verifyOAuth2Token = async (token) => {
    const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    })
    const { name, email, picture } = ticket.getPayload()

    return {
        name: name,
        email: email,
        picture: picture
    }
}