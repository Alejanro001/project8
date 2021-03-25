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
            .then(fighter=> response.json(fighter))
    },
    readAll(request, response){
        Fighter
            .find({})
            .then(fighter=> response.json(fighter))
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
        
    }
    
}


module.exports = controller