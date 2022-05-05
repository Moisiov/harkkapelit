import jwt from 'jsonwebtoken'

export const getJwtToken = (user) => {
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({ email: user.email, name: user.name }, secret)
    return token
}