const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { Player, Position } = require('./models')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')

const app = express()


app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})


app.get('/api/players', async (req, res) => {
  const allplayers = await Player.find()
  console.log(`All players should arrive!`)
  res.json(allplayers);
})


app.get('/api/positions', async (req, res) => {
  const allpositions = await Position.find()
  console.log(`All positions should be sent!`)
  res.json(allpositions);
})


app.get('/api/players/:id', async (req, res) => {
  try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectId");
      const thisPlayer = await Player.findById(id);
      if (!thisPlayer) throw Error ("No players found.")
      console.log(`Players should be here!`)
      res.json(thisPlayer);
  } catch (e) {
      console.log(e)
      res.send(`ERROR!!! ${e.message}`);
  }
})



app.get('/api/positions/:id', async (req, res) => {
  try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectId");
      const thisPosition = await Position.findById(id);
      if (!thisPosition) throw Error ("No position found.")
      console.log(`Positions should be here!`)
      res.json(thisPosition);
  } catch (e) {
      console.log(e)
      res.send(`ERROR!!!  ${e.message}`);
  }
})

app.post('/api/addPosition', async (req, res) => {
    const addPosition = await req.body
    Position.insertMany(addPosition)
    return res.status(201).json({Position})
})

app.post('/api/addComment', async (req, res) => {
  const addComment = await req.body
  Comment.insertMany(addComment)
  return res.status(201).json({Comment})
})







app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} 🫠`)
})

