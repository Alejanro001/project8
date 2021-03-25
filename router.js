const { request } = require('express')
let express = require('express')

let fighterRouter = require('./Inner-Sanctum/router')

let router = new express.Router()

router.use('/fighters', fighterRouter)
router.get('/', (request, response)=> response.redirect('/fighters/track/'))
module.exports = router