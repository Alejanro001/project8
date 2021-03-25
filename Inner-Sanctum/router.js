let express = require('express')
let router = new express.Router()

let controller = require('./controller.js')

router.get('/tracks', controller.getAllTracks)
router.get('/fighters', controller.getAllFighters)
router.get('/:id', controller.readById)
router.post('/', controller.create)
router.delete('/:new', controller.destroy)

module.exports = router



