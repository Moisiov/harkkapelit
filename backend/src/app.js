const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

var userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
  res.send('Harkkapelit server')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})