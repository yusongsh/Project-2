const db = require('./db')
const { Position, Player } = require('./models')


const findPostion = async () => {
    const position = await Position.find()
    console.log ('Positions: ', position)
}

const findPlayer = async () => {
    const player = await Player.find()
    console.log ('PolayPlayer: ', player)
}

const run = async () => {
    try {

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}