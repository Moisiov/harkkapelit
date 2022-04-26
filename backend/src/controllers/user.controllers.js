const e = require('express')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

const userLoginGoogle = async (req, res, next) => {
    const { token } = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    })
    const { name, email, picture } = ticket.getPayload()
    const user = {
        name: name,
        email: email,
        picture: picture
    }
    res.status(201)
    res.json(user)
}

module.exports = {
  userLoginGoogle
}