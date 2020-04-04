const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require('path')
const {set_board, addRoom, check_auth, update_authCode} = require('./src/functions')
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

app.get('/game', (req, res) => {
    MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
        if(error) {
            return console.log('Unable to connect to database!')
        }
        console.log("Connected to database successfully!")
        const db = client.db(databaseName)

        //Find user and match the authcode
        db.collection("users").findOne({
            userName: req.query.userName,
            authCode: req.query.authCode
        }, (error, task) => {
            if(task) {
                let setBoard = set_board()
                let boardData = {}

                //Find room or create if does not exists
                db.collection("rooms").findOne({roomName: req.query.roomName}, (error, task) => {
                    if(task) {
                        console.log("Room exists:",task.roomName)
                        boardData = task
                        //variables: roomName, userName, boardData, seaData, color
                        boardData.boardData = JSON.stringify(boardData) 
                        addRoom(db,req)
                        res.render('game', boardData)
                    }
                    else if(error) {
                        console.log("Error checking room name:",error)
                    }
                    else {
                        let users = []
                        if(req.query.user1) {
                            users.push(req.query.user1)
                        }
                        if(req.query.user2) {
                            users.push(req.query.user2)
                        }
                        if(req.query.user3) {
                            users.push(req.query.user2)
                        }
                        const boardData2db = db.collection("rooms").insertOne({
                            roomName: req.query.roomName,
                            admin: req.query.userName,
                            boardData: setBoard[0],
                            seaData: setBoard[1],
                            users: users
                        })
                        boardData2db.then(result => {
                            boardData.boardData = result.ops[0].boardData
                            boardData.seaData = result.ops[0].seaData
                            console.log("Created room:", result.ops[0].roomName)
                            boardData.boardData = JSON.stringify(boardData)
                            addRoom(db,req)
                            res.render('game', boardData)
                        }).catch(error => {
                            console.log(error)
                        })
                    }
                })               
            }
            else if(error) {
                console.log("Error checking user details:",error)
                res.render('index', {
                    loginError: error
                })
            }
            else{
                console.log("User error")
                let loginError = "Please login again!"
                res.render('index', {
                    loginError
                })
            }
        })
    })
})

app.get('/home', (req, res) => {
    MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
        if(error) {
            return console.log('Unable to connect to database!')
        }
        console.log("Connected to database successfully!")
        const db = client.db(databaseName)

        //Find user and match the authcode
        db.collection("users").findOne({
            userName: req.query.userName,
            authCode: req.query.authCode
        }, (error, task) => {
            if(task) {
                res.render('home', {
                    userName: task.userName,
                    authCode: "initial"
                })
            }
            else if(error) {
                console.log("Error checking user details:",error)
                res.render('index', {
                    loginError: error
                })
            }
            else{
                console.log("User error")
                let loginError = "Please login again!"
                res.render('index', {
                    loginError
                })
            }
        })
    })
})

io.on('connection', (socket) => {

    socket.emit("authCodeGenerated", socket.id)
    console.log("Connected!", socket.id)

    socket.on("authCodeGenerated", authData => {
        console.log(authData)
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            console.log("Connected to database successfully!")
            const db = client.db(databaseName)
    
            //Find user and match the authcode
            authData.newAuthCode = socket.id
            check_auth(db,authData,socket)
        })
    })
    socket.on("disconnect", () => {
        console.log("Disconnected!", socket.id)
    })

})

server.listen(port, () => {
    console.log(`Server is up on port: ${port}!`)
})
