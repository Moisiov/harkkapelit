import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import userRouter from './routes/user.route.js'
import sportRouter from './routes/sport.route.js'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(sportRouter)

app.get('/', (req, res) => {
  res.send('Harkkapelit server')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})