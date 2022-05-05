import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
import sportRouter from './routes/sport.route.js'
import gameRouter from './routes/game.route.js'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(userRouter)
app.use(sportRouter)
app.use(gameRouter)

app.get('/', (req, res) => {
  res.send('Harkkapelit server')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})