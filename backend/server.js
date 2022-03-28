const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()




app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})




app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} 🫠`)
})

