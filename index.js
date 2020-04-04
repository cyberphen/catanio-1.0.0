const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require('path')
const {set_board} = require('./src/functions')
const mkdirp = require('mkdirp')
const fs = require('fs-extra')
const hbs = require('hbs')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'catanio'

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = 80
const publicDirectoryPath = path.join(__dirname, './views')
const templateDirectoryPath = path.join(__dirname, './templates')

app.set('view engine', 'hbs')
app.set('views', publicDirectoryPath)
hbs.registerPartials(templateDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})
app.get('/home', (req, res) => {
    res.render('home')
})

io.on('connection', (socket) => {

    console.log("Connected!", socket.id)
    socket.emit("initialize")

    socket.on("loadBoard", boardData => {
        //variables: roomName, userName, color

        let setBoard = set_board()
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            console.log("Connected to database successfully!")
            const db = client.db(databaseName)

            db.collection("rooms").findOne({roomName: boardData.roomName}, (error, task) => {
                if(task) {
                    console.log("Room exists:",task.roomName)
                    boardData = task
                    //variables: roomName, userName, boardData, seaData, color
                    socket.emit("loadBoard", boardData)
                }
                else{
                    const boardData2db = db.collection("rooms").insertOne({
                        roomName: boardData.roomName,
                        admin: boardData.userName,
                        boardData: setBoard[0],
                        seaData: setBoard[1]
                    })
                    boardData2db.then(result => {
                        boardData.boardData = result.ops[0].boardData
                        boardData.seaData = result.ops[0].seaData
                        console.log("Created room:", result.ops[0].roomName)
                        //variables: roomName, userName, boardData, seaData, color
                        socket.emit("loadBoard", boardData)
                    }).catch(error => {
                        console.log(error)
                    })
                }
            })
        })
    })

    socket.on("disconnect", () => {
        console.log("Disconnected!", socket.id)
    })

})

server.listen(port, () => {
    console.log(`Server is up on port: ${port}!`)
})
