const {Schema} = require('mongoose')

const authorSchema = new Schema(
    {
        last_name: {type: String, required: true},
        first_name: {type: String, required: true},
        born: {type: Date, required: true},
        died: {type: Date},
        nationality: {type: String, required: true},
        bio: {type: String, required: true},
        hist_context: {type: String},
        img: {type: String}
    },
    {timestamps: true}
)

module.exports = authorSchema