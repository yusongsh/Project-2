const db = require('../db')
const { Player, Position } = require('../models')


db.on('error', console.error.bind(console, 'MongoDb connection erorr:'))

const main = async () => {

    
    
    const players = [
        
    ]

    await Player.insertMany(players)
    console.log('Players creat')
}

const run = async () => {
    await main()
    db.close()
}

run()


