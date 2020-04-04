const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require('path')
//const {set_board, check_places, get_board, place_piece} = require('./src/functions')
const mkdirp = require('mkdirp')
const fs = require('fs-extra')
const hbs = require('hbs')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = 80
const publicDirectoryPath = path.join(__dirname, './views')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        name: "Ankush"
    })
})

io.on('connection', (socket) => {

    console.log("Connected!", socket.id)

})

server.listen(port, () => {
    console.log(`Server is up on port: ${port}!`)
})
