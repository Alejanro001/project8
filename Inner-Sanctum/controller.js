let Fighter = require('./fmodel')
let Track = require('../soundmodel')
require('../connection')



let controller = {
    create(request, response){
        let fighter = request.body
        Fighter
            .create(fighter)
            .then(fighter=> response.json(fighter))
    },
    readById(request, response){
        let id = request.params.id
        Fighter
            .find({})
            .then(fighters=> response.json(fighters))
    },
    readAll(request, response){
        Fighter
            .find({})
            .then(fighters=> response.json(fighters))
    },
    update(request, response) {
        let fighter = requestbody
        let id = request.params.id
        Fighter 
            .findByIdAndUpdate(id, fighter, {new: true})
            .then(fighter=> response.json(fighter))
    },
    destroy(request, response) {
        let id = request.params.id
        Fighter
            .findByIdAndDelete(id)
            .then(()=> response.json({ok: true}))
    },
    getAllTracks(request, response) {
        console.log(request)
        Track
            .find({})
            .then((data)=> response.json(data))
        
    }, 
    getAllFighters(request, response) {
        console.log(request)
        Fighter
            .find({})
            .then((data)=> response.json(data))
        
    },
    create(request, response){
        let track = request.body
        Track
            .create(track)
            .then(track=> response.json(track))
    },
    readById(request, response){
        let id = request.params.id
        Track
            .find({})
            .then(tracks=> response.json(tracks))
    },
    update(request, response) {
        let track = requestbody
        let id = request.params.id
        Track 
            .findByIdAndUpdate(id, track, {new: true})
            .then(track=> response.json(track))
    },
    destroy(request, response) {
        let id = request.params.id
        Track
            .findByIdAndDelete(id)
            .then(()=> response.json({ok: true}))
    }
    
}


module.exports = controller