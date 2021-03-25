let express = require('express')
let router = new express.Router()

let controller = require('./controller.js')

router.get('/tracks', controller.getAllTracks)
router.get('/fighters', controller.getAllFighters)
router.get('/:id', controller.readById)
router.post('/fighters', controller.createFighter)
router.post('/tracks', controller.createTrack)
router.delete('/:new', controller.destroy)

module.exports = router



