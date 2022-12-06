import jwt from 'jsonwebtoken'
import { OAuth2Client  } from 'google-auth-library'

export const getJwt = (user) => {
    const accessToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION })
    return { accessToken }
}

// Verifies token and returns user
export const verifyOAuth2Token = async (token) => {
    const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.REACT_APP_GOOGLE_CLIENT_ID
    })
    const { name, email, picture } = ticket.getPayload()

    return {
        name: name,
        email: email,
        picture: picture
    }
}