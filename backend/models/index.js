const { model } = require('mongoose')
const PlayerSchema = require('./player')
const PositionSchema = require('./position')


const Player = model('player', PlayerSchema)
const Position = model('position', PositionSchema)


module.exports = {
    Player,
    Position,
}