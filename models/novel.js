const {Schema} = require('mongoose')

const novelSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: "Author"},
        genre_main: {type: String, required: true},
        subgenres: {type: Array, required: true},
        synopsis: {type: String, required: true},
        img: {type: String, required: false},
        read: {type: Boolean, required: true},
        rating: {type: Number, min: 1, max: 5, required: false},
        comments: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = novelSchema