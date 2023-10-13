const { Schema } = require('mongoose')

const specialSchema = new Schema (
    {
        title: {type: String, required: true},
        author_last: {type: String, required: true},
        author_first: {type: String, required: true},
        date: {type: Date},
        publisher: {type: String, required: true},
        editor: {type: String},
        editor_bio: {type: String},
        img: {type: String, required: true},
        provenance: {type: String, required: true},
        condition: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = specialSchema