import jwt from 'jsonwebtoken'

export const getJwt = (user) => {
    const accessToken = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '20m' })
    const refreshToken = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_REFRESH_SECRET)
    return { accessToken, refreshToken }
}