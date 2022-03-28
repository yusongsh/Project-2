const { Schema } = require('mongoose')

const Player = new Schema(
    {
        name: { type: String, required: true },
        position:{ type: String, required: true },
        points: { type: String, required: true },
        rebounds: { type: String, required: true },
        assists: { type: String, required: true },
        championships: { type: String, required: true },
        HoFYear: { type: String, requied: true },
        bioHighlight:{ type: String, required: true },
        biography: { type: String, required: true },
        image: { type: String, required: true },
    },
    {timestamps: true}
)

module.exports = Player