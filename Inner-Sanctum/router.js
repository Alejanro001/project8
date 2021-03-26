let express = require('express')
let router = new express.Router()

let controller = require('./controller.js')

router.get('/tracks', controller.getAllTracks)
router.get('/fighters', controller.getAllFighters)
router.get('/:id', controller.readById)
router.post('/fighters', controller.createFighter)
router.post('/tracks', controller.createTrack)
router.delete('/fighters/:id', controller.destroyFighter)
router.delete('/tracks/:id', controller.destroyTrack)

module.exports = router



