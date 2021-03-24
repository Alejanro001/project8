let mongoose = require('mongoose')
let Track = mongoose.Schema

const soundSchema = new mongoose.Schema({
    name: String,
    url: String
})

let Track = mongoose.model('Fighter', trackSchema)
module.exports = Track