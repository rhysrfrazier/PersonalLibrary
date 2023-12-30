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
        img: {type: String, maxLength: 1000000000}
    },
    {timestamps: true}
)

module.exports = authorSchema