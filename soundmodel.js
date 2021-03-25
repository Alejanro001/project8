let mongoose = require('mongoose')


let trackSchema = new mongoose.Schema({
    name: String,
    url: String
})

let Track = mongoose.model('Track', trackSchema)
module.exports = Track