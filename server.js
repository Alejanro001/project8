let app = require('./app')

app.set('port', process.env.PORT || 9000)

let server = app.listen(app.get('port'))


server.on('listening', ()=> console.log('Server is listening'))
server.on('error', ()=> console.error('Server is dead'))

module.exports = server