let mongoose = require('mongoose')
let Track = mongoose.Schema

const trackSchema = new mongoose.Schema({
    name: String,
    url: String
})

let Track = mongoose.model('Track', trackSchema)
module.exports = Track