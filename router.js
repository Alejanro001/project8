const { request } = require('express')
let express = require('express')

let fighterRouter = require('./Inner-Sanctum/router')

let router = new express.Router()
router.get('/', (request, response)=> response.redirect('/fighters/fighters/'))

router.use('/fighters', fighterRouter)
module.exports = router