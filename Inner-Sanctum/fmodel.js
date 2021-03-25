let mongoose = require('mongoose')


const fighterSchema = new mongoose.Schema({
        name: String,
        attack: String,
        description: String,
        origin: String
   
})
 

let Fighter = mongoose.model('Fighter', fighterSchema)
module.exports = Fighter