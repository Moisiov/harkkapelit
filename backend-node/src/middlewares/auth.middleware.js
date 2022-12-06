import jwt from 'jsonwebtoken'

export const authorization = (req, res, next) => {
    const token = req.cookies.access_token

    if(!token) {
        return res.sendStatus(401)
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {
            email: data.email,
            role: data.role
        }

        return next()
    }
    catch {
        return res.sendStatus(403)
    }
}