const { Schema } = require('mongoose')

const Player = new Schema(
    {
        name: {type: string, required: true },
        position:{type: string, required: true},
        points: {type: number, required: true},
        rebounds: {type: number, required: true},
        assists: {type: number, required: true},
        championships: {type: number, required: true},
        bioHighlight:{type: string, required: true},
        biography: {type: string, required: true},
        image: {type: string, required: true}
    },
    {timestamps: true}
)

module.exports = Player