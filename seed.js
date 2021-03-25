require('./connection.js')
let mongoose = require('mongoose')
let fighterModel = require('./Inner-Sanctum/fmodel')
let trackModel = require('./soundmodel')
let websiteData = require('./fighter.json')
fighterModel.deleteMany({}).then( () => {
    const allFighters = websiteData.fighters
    console.log(allFighters)

    fighterModel.create(allFighters).then((fighters) => {
        console.log(fighters, 'Application data established')
    })
})

trackModel.deleteMany({}).then( () => {
    const allTracks = websiteData.tracks
    console.log(allTracks)
    trackModel.create(allTracks).then((fighters) => {
        console.log(fighters.length, 'The tracks have been established')
        mongoose.disconnect()
    })
})