const { Schema } = require('mongoose')

const Player = new Schema(
    {
        name: { type: String, required: true },
        position:{ type: String, required: true },
        points: { type: Number, required: true },
        rebounds: { type: Number, required: true },
        assists: { type: Number, required: true },
        championships: { type: Number, required: true },
        bioHighlight:{ type: String, required: true },
        biography: { type: String, required: true },
        image: { type: String, required: true },
        video: { type: String, required: false },
    },
    {timestamps: true}
)

module.exports = Player