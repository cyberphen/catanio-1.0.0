const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require('path')
const {set_board, get_turn, update_user, add_players_to_game, get_users, get_turn_inputs, place_piece, get_roads_places} = require('./src/functions')
const mkdirp = require('mkdirp')
const fs = require('fs-extra')
const hbs = require('hbs')
const bodyParser = require('body-parser')

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
app.use(bodyParser.urlencoded({extended: false}))

app.get('', (req, res) => {
    res.render('index')
})

app.post('/home', (req, res) => {
    MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
        if(error) {
            return console.log('Unable to connect to database!')
        }
        const db = client.db(databaseName)
        //Find user and match the authcode
        db.collection("users").findOne({
            userName: req.body.userName,
            pass: req.body.password
        }, (error, task) => {
            if(task) {
                res.render('home', {
                    userName: task.userName,
                    // authCode: task.authCode
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

app.post('/game', (req, res) => {
    MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
        if(error) {
            return console.log('Unable to connect to database!')
        }
        const db = client.db(databaseName)

        db.collection("users").findOne({
            userName: req.body.userName,
        }, (error, task) => {
            if(task) {
                let boardData = {}
                //Find room or create if does not exists
                db.collection("rooms").findOne({roomName: req.body.roomName}, (error, task) => {
                    if(task) {
                        // console.log("Room exists:",task.roomName)
                        boardData = task
                        //variables: roomName, userName, boardData, seaData, color
                        boardData.boardData = JSON.stringify(boardData)
                        res.render('game', boardData)
                    }
                    else if(error) {
                        console.log("Error checking room name:",error)
                    }
                    else {
                        let avatars = ["stan-marsh", "kyle-broflovski", "eric-cartman", "kenny-mccormick"]
                        let ind = Math.floor(Math.random() * avatars.length)
                        let avatar = avatars[ind]
                        avatars.splice(ind,1)
                        // console.log(`here;....: ${ind}, ${avatar}, ${avatars}`)
                        let colors = ["red", "white", "green", "yellow"]
                        let colorI = Math.floor(Math.random() * colors.length)
                        let color = colors[colorI]
                        colors.splice(colorI,1)
                        let userTurn
                        let users = []
                        users.push({
                            userName:req.body.userName,
                            avatar: avatar,
                            color: color,
                            resources: [],
                            devCards: [],
                            knights: 0,
                            vp: 0
                        })
                        if(req.body.user2) {
                            ind = Math.floor(Math.random() * avatars.length)
                            avatar = avatars[ind]
                            avatars.splice(ind,1)
                            // console.log(`here;....: ${ind}, ${avatar}, ${avatars}`)
                            colorI = Math.floor(Math.random() * colors.length)
                            color = colors[colorI]
                            colors.splice(colorI,1)
                            users.push({
                                userName:req.body.user2,
                                avatar: avatar,
                                color: color,
                                resources: [],
                                devCards: [],
                                knights: 0,
                                vp: 0
                            })
                        }
                        if(req.body.user3) {
                            ind = Math.floor(Math.random() * avatars.length)
                            avatar = avatars[ind]
                            avatars.splice(ind,1)
                            // console.log(`here;....: ${ind}, ${avatar}, ${avatars}`)
                            colorI = Math.floor(Math.random() * colors.length)
                            color = colors[colorI]
                            colors.splice(colorI,1)
                            users.push({
                                userName:req.body.user3,
                                avatar: avatar,
                                color: color,
                                resources: [],
                                devCards: [],
                                knights: 0,
                                vp: 0
                            })
                        }
                        if(req.body.user4) {
                            ind = Math.floor(Math.random() * avatars.length)
                            avatar = avatars[ind]
                            avatars.splice(ind,1)
                            // console.log(`here;....: ${ind}, ${avatar}, ${avatars}`)
                            colorI = Math.floor(Math.random() * colors.length)
                            color = colors[colorI]
                            colors.splice(colorI,1)
                            users.push({
                                userName:req.body.user4,
                                avatar: avatar,
                                color: color,
                                resources: [],
                                devCards: [],
                                knights: 0,
                                vp: 0
                            })
                        }

                        shuffle(users)

                        userTurn = users[Math.floor(Math.random() * users.length)].userName
                        let setBoard = set_board()
                        const boardData2db = db.collection("rooms").insertOne({
                            roomName: req.body.roomName,
                            admin: req.body.userName,
                            boardData: setBoard[0],
                            seaData: setBoard[1],
                            users: users,
                            turn: userTurn,
                            turnData: [{seq:1}]
                        })
                        boardData2db.then(result => {
                            boardData.roomName = result.ops[0].roomName
                            boardData.boardData = result.ops[0].boardData
                            boardData.seaData = result.ops[0].seaData
                            boardData.users = users
                            console.log("Created room:", result.ops[0].roomName)
                            boardData.boardData = JSON.stringify(boardData)
                            update_user("addRoom",req,db)
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

io.on('connection', (socket) => {

    console.log("Connected!", socket.id)
    socket.emit("getDetails")
    socket.on("getDetails", details => {
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            let detail = {}
            detail.userName = details.userName
            detail.socket = socket
            update_user("updateSocket",detail,db)
        })
    })

    socket.on("getGameDetails", gameData => {
        socket.join(gameData.roomName)
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            db.collection("rooms").findOne({roomName: gameData.roomName}, (error, task) => {
                if(task.admin == gameData.userName) {
                    add_players_to_game(db,gameData.roomName, io) //can only admin run pending
                }
                else {
                    socket.emit("joinGame", gameData.roomName)
                }
            })
        })
    })

    socket.on("getTurnDetails", turnData => {
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            // console.log(io.sockets.adapter.rooms[turnData.roomName].sockets)
            get_turn(db, socket, turnData.roomName)
        })
    })

    socket.on("joinGame", roomName => {
        socket.join(roomName)
        // socket.nsp.to(roomName).emit("message", `joined room ${roomName}`)
        socket.nsp.to(roomName).emit("redirectToGame", {roomName})
    })

    socket.on("getUsers", getUsersData => {
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            get_users(db, socket, getUsersData)
        })
    })

    socket.on("turnInputs", turnInputsData => {
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            get_turn_inputs(db,socket,turnInputsData)
        })
    })

    socket.on("placePiece", placePieceData => {
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            place_piece(db,socket,placePieceData)
        })
    })

    socket.on("getRoadsPlaces", getRoadsData => {
        MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
            if(error) {
                return console.log('Unable to connect to database!')
            }
            const db = client.db(databaseName)
            get_roads_places(db,socket,getRoadsData)
        })
    })

    socket.on("disconnect", () => {
        console.log("Disconnected!", socket.id)
    })

})

server.listen(port, () => {
    console.log(`Server is up on port: ${port}!`)
})

function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    // return array
}
