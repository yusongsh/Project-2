const db = require('../db')
const { Player, Position } = require('../models')


db.on('error', console.error.bind(console, 'MongoDb connection erorr:'))

const main = async () => {
    const center = await new Position({
        name: "Center",
        description: "The center is the tallest player on each team, playing near the basket. On offense, the center tries to score on close shots and rebound. But on defense, the center tries to block opponents’ shots and rebound their misses.",
    })
    center.save()
    
    const forward = await new Position({
        name: "Forward",
        description: "There are two types of forward. The power forward does many of the things a center does, playing near the basket while rebounding and defending taller players. But power forwards also take longer shots than centers. The small forward plays against small and large players. They roam all over on the court. Small forwards can score from long shots and close ones.",
    })
    forward.save()
    
    const guard = await new Position({
        name: "Guard",
        description: "There are also two types of guard. The point guard runs the offense and usually is the team’s best dribbler and passer. The point guard defends the opponent’s point guard and tries to steal the ball. The shooting guard is usually the team’s best shooter. The shooting guard can make shots from long distance and also is a good dribbler.",
    })
    guard.save()




    const players = [
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },
        {
            name: "",
            position: "",
            points: "",
            rebounds: "",
            assists: "",
            championships: "",
            bioHighlight: "",
            biography: "",
            image: "",
            video: "",
        },

    ]


    await Player.insertMany(players)
    console.log('Players create')
}

const run = async () => {
    await main()
    db.close()
}

run()




// {
//     name: "",
//     position: "",
//     points: "",
//     rebounds: "",
//     assists: "",
//     championships: "",
//     bioHighlight: "",
//     biography: "",
//     image: "",
//     video: "",
// },


//Postion description credit:
//https://jr.nba.com/basketball-positions/