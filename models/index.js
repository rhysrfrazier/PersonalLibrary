const mongoose = require('mongoose')
const novelSchema = require('./novel')
const authorSchema = require('./author')
const specialSchema = require('./special')

const Novel = mongoose.model('Novel', novelSchema)
const Author = mongoose.model('Author', authorSchema)
const Special = mongoose.model('Special', specialSchema)

module.exports = {
    Novel,
    Author,
    Special,
}