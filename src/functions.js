const set_board = () => {
    let tile_array = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    let numberGrid = [5,2,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11]

    let tiles = [
        ["grain","url(images/tiles/grain-tile.png)"],
        ["grain","url(images/tiles/grain-tile.png)"],
        ["grain","url(images/tiles/grain-tile.png)"],
        ["sheep","url(images/tiles/sheep-tile.png)"],
        ["grain","url(images/tiles/grain-tile.png)"],
        ["sheep","url(images/tiles/sheep-tile.png)"],
        ["sheep","url(images/tiles/sheep-tile.png)"],
        ["sheep","url(images/tiles/sheep-tile.png)"],
        ["wood","url(images/tiles/wood-tile.png)"],
        ["wood","url(images/tiles/wood-tile.png)"],
        ["wood","url(images/tiles/wood-tile.png)"],
        ["wood","url(images/tiles/wood-tile.png)"],
        ["ore","url(images/tiles/ore-tile.png)"],
        ["ore","url(images/tiles/ore-tile.png)"],
        ["ore","url(images/tiles/ore-tile.png)"],
        ["brick","url(images/tiles/brick-tile.png)"],
        ["brick","url(images/tiles/brick-tile.png)"],
        ["brick","url(images/tiles/brick-tile.png)"],
        ["dessert","url(images/tiles/dessert-tile.png)"]
    ]
    var boardData = {}
    while(tile_array.length > 0) {
        let rand = Math.floor(Math.random() * tile_array.length)
        boardData[tile_array[rand]] = tiles[0]
        tile_array.splice(rand,1)
        tiles.splice(0,1)
        // console.log(boardData)
    }
    tile_array = ["c1","c3","c6","c10","c14","c17","c15","c11","c7"]
    tiles_any = [
        ["any",'<div class="hexagon hexagon2"><div class="hexagon-in1"><div style="background-image: url(images/tiles/any-port.png);" class="hexagon-in2"></div></div></div>']
    ]
    tiles = [
        ["sheep",'<div class="hexagon hexagon2"><div class="hexagon-in1"><div style="background-image: url(images/tiles/sheep-port.png);" class="hexagon-in2"></div></div></div>'],
        ["wood",'<div class="hexagon hexagon2"><div class="hexagon-in1"><div style="background-image: url(images/tiles/wood-port.png);" class="hexagon-in2"></div></div></div>'],
        ["grain",'<div class="hexagon hexagon2"><div class="hexagon-in1"><div style="background-image: url(images/tiles/grain-port.png);" class="hexagon-in2"></div></div></div>'],
        ["ore",'<div class="hexagon hexagon2"><div class="hexagon-in1"><div style="background-image: url(images/tiles/ore-port.png);" class="hexagon-in2"></div></div></div>'],
        ["brick",'<div class="hexagon hexagon2"><div class="hexagon-in1"><div style="background-image: url(images/tiles/brick-port.png);" class="hexagon-in2"></div></div></div>']
    ]
    var seaData = {}
    var o1 = ["c1","c6","c14","c15","c7"]
    var o2 = ["c3","c10","c17","c11"]
    var e1 = ["c3","c10","c17","c11","c7"]
    var e2 = ["c1","c6","c14","c15"]
    let oe = Math.floor(Math.random() * 2)
    if(oe == 0) {
        while(tile_array.length > 0) {
            let rand = Math.floor(Math.random() * tiles.length)
            seaData[o1[0]] = tiles[rand]
            tile_array.splice(0,1)
            if(tile_array.length > 0) {
                tile_array.splice(0,1)
                seaData[o2[0]] = tiles_any[0]
            }
            o1.splice(0,1)
            o2.splice(0,1)
            tiles.splice(rand,1)
        }
    }
    else {
        while(tile_array.length > 0) {
            let rand = Math.floor(Math.random() * tiles.length)
            seaData[e1[0]] = tiles[rand]
            tile_array.splice(0,1)
            if(tile_array.length > 0) {
                tile_array.splice(0,1)
                seaData[e2[0]] = tiles_any[0]
            }
            e1.splice(0,1)
            e2.splice(0,1)
            tiles.splice(rand,1)
        }
    }

    tile_array = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    let seq = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[3,4,5,6,7,8,9,10,11,12,1,2,14,15,16,17,18,13,19],[5,6,7,8,9,10,11,12,1,2,3,4,15,16,17,18,13,14,19],[7,8,9,10,11,12,1,2,3,4,5,6,16,17,18,13,14,15,19],[9,10,11,12,1,2,3,4,5,6,7,8,17,18,13,14,15,16,19],[11,12,1,2,3,4,5,6,7,8,9,10,18,13,14,15,16,17,19]]
    let k = Math.floor(Math.random() * seq.length)
    let j = 1
    seq[k].forEach(i => {
        if(boardData[tile_array[i-1]][0] != "dessert") {
            boardData[tile_array[i-1]][2] = numberGrid[j-1]
            j++
        }
    })
    return [boardData,seaData]
}

const get_places = (task, turnUser, seq) => {
    let eGrid = [{ //1
        xy:[101.5,215.5],
        edges: ["c1","one","c5"]
    },
    {
        xy:[75,263],
        edges: ["c1","c2","one"]
    },
    {
        xy:[101.5,310.5],
        edges: ["c2","twelve","one"]
    },
    {
        xy:[75,358],
        edges: ["c2","c3","twelve"]
    },
    {
        xy:[101.5,405.5],
        edges: ["c3","eleven","twelve"]
    },
    {
        xy:[75,453],
        edges: ["c3","c4","eleven"]
    },
    {
        xy:[101.5,500.5],
        edges: ["c4","c6","eleven"]
    },
    {//2
        xy:[184,168],
        edges: ["c5","two","c7"]
    },
    {
        xy:[157.5,215.5],
        edges: ["c5","one","two"]
    },
    {
        xy:[184,263],
        edges: ["one","thirteen","two"]
    },
    {
        xy:[157.5,310.5],
        edges: ["one","twelve","thirteen"]
    },
    {
        xy:[184,358],
        edges: ["twelve","eighteen","thirteen"]
    },
    {
        xy:[157.5,405.5],
        edges: ["twelve","eleven","eighteen"]
    },
    {
        xy:[184,453],
        edges: ["eleven","ten","eighteen"]
    },
    {
        xy:[157.5,500.5],
        edges: ["eleven","c6","ten"]
    },
    {
        xy:[184,548],
        edges: ["c6","c8","ten"]
    },
    { //3
        xy:[266.5,120.5],
        edges: ["c9","c7","three"]
    },
    { 
        xy:[240,168],
        edges: ["c7","two","three"]
    },
    {
        xy:[266.5,215.5],
        edges: ["three","two","fourteen"]
    },
    {
        xy:[240,263],
        edges: ["two","thirteen","fourteen"]
    },
    {
        xy:[266.5,310.5],
        edges: ["fourteen","thirteen","nineteen"]
    },
    {
        xy:[240,358],
        edges: ["thirteen","eighteen","nineteen"]
    },
    {
        xy:[266.5,405.5],
        edges: ["nineteen","eighteen","seventeen"]
    },
    {
        xy:[240,453],
        edges: ["eighteen","ten","seventeen"]
    },
    {
        xy:[266.5,500.5],
        edges: ["seventeen","ten","nine"]
    },
    {
        xy:[240,548],
        edges: ["ten","c8","nine"]
    },
    {
        xy:[266.5,595.5],
        edges: ["nine","c8","c10"]
    },
    { //4
        xy:[322.5,120.5],
        edges: ["c9","three","c11"]
    },
    { 
        xy:[349,168],
        edges: ["c11","three","four"]
    },
    {
        xy:[322.5,215.5],
        edges: ["three","fourteen","six"]
    },
    {
        xy:[349,263],
        edges: ["six","fourteen","fifteen"]
    },
    {
        xy:[322.5,310.5],
        edges: ["fourteen","nineteen","fifteen"]
    },
    {
        xy:[349,358],
        edges: ["fifteen","nineteen","sixteen"]
    },
    {
        xy:[322.5,405.5],
        edges: ["nineteen","seventeen","sixteen"]
    },
    {
        xy:[349,453],
        edges: ["sixteen","seventeen","eight"]
    },
    {
        xy:[322.5,500.5],
        edges: ["seventeen","nine","eight"]
    },
    {
        xy:[349,548],
        edges: ["eight","nine","c12"]
    },
    {
        xy:[322.5,595.5],
        edges: ["nine","c10","c12"]
    },
    {//5
        xy:[405,168],
        edges: ["c13","c11","six"]
    },
    {
        xy:[431.5,215.5],
        edges: ["c13","four","five"]
    },
    {
        xy:[405,263],
        edges: ["four","fifteen","five"]
    },
    {
        xy:[431.5,310.5],
        edges: ["five","fifteen","six"]
    },
    {
        xy:[405,358],
        edges: ["fifteen","sixteen","six"]
    },
    {
        xy:[431.5,405.5],
        edges: ["six","sixteen","seven"]
    },
    {
        xy:[405,453],
        edges: ["sixteen","eight","seven"]
    },
    {
        xy:[431.5,500.5],
        edges: ["seven","eight","c14"]
    },
    {
        xy:[405,548],
        edges: ["c14","eight","c12"]
    },{ //6
        xy:[487.5,215.5],
        edges: ["c15","c13","five"]
    },
    {
        xy:[514,263],
        edges: ["c15","five","c16"]
    },
    {
        xy:[487.5,310.5],
        edges: ["five","six","c16"]
    },
    {
        xy:[514,358],
        edges: ["c16","six","c17"]
    },
    {
        xy:[487.5,405.5],
        edges: ["six","seven","c17"]
    },
    {
        xy:[514,453],
        edges: ["c17","seven","c18"]
    },
    {
        xy:[487.5,500.5],
        edges: ["seven","c14","c18"]
    }]

    let rGrid = [{ //1
        xy:[88,240.5],
        edges: ["c1","one"]
    },
    {
        xy:[88,288.5],
        edges: ["c2","one"]
    },
    {
        xy:[88,336.5],
        edges: ["c2","twelve"]
    },
    {
        xy:[88,384.5],
        edges: ["c3","twelve"]
    },
    {
        xy:[88,432.5],
        edges: ["c3","eleven"]
    },
    {
        xy:[88,480.5],
        edges: ["c4","eleven"]
    },
    { //2
        xy:[130,215.5],
        edges: ["c5","one"]
    },
    {
        xy:[130,310.5],
        edges: ["one","twelve"]
    },
    {
        xy:[130,405.5],
        edges: ["twelve","eleven"]
    },
    {
        xy:[130,500.5],
        edges: ["eleven","c6"]
    },
    { //3
        xy:[171,192.5],
        edges: ["c5","two"]
    },
    {
        xy:[171,240.5],
        edges: ["one","two"]
    },
    {
        xy:[171,288.5],
        edges: ["one","thirteen"]
    },
    {
        xy:[171,336.5],
        edges: ["twelve","thirteen"]
    },
    {
        xy:[171,384.5],
        edges: ["twelve","eighteen"]
    },
    {
        xy:[171,432.5],
        edges: ["eleven","eighteen"]
    },
    {
        xy:[171,480.5],
        edges: ["eleven","ten"]
    },
    {
        xy:[171,528.5],
        edges: ["c6","ten"]
    },
    { //4
        xy:[212,165.5],
        edges: ["c7","two"]
    },
    {
        xy:[212,261.5],
        edges: ["two","thirteen"]
    },
    {
        xy:[212,357.5],
        edges: ["thirteen","eighteen"]
    },
    {
        xy:[212,453.5],
        edges: ["eighteen","ten"]
    },
    {
        xy:[212,549.5],
        edges: ["ten","c8"]
    },
    { //5
        xy:[254,144.5],
        edges: ["c7","three"]
    },
    { 
        xy:[254,192.5],
        edges: ["two","three"]
    },
    {
        xy:[254,240.5],
        edges: ["two","fourteen"]
    },
    {
        xy:[254,288.5],
        edges: ["thirteen","fourteen"]
    },
    {
        xy:[254,336.5],
        edges: ["thirteen","nineteen"]
    },
    {
        xy:[254,384.5],
        edges: ["eighteen","nineteen"]
    },
    {
        xy:[254,432.5],
        edges: ["eighteen","seventeen"]
    },
    {
        xy:[254,480.5],
        edges: ["ten","seventeen"]
    },
    {
        xy:[254,528.5],
        edges: ["ten","nine"]
    },
    {
        xy:[254,576.5],
        edges: ["c8","nine"]
    },
    { //6
        xy:[294,115.5],
        edges: ["c9","three"]
    },
    {
        xy:[294,211.5],
        edges: ["three","fourteen"]
    },
    {
        xy:[294,307.5],
        edges: ["fourteen","nineteen"]
    },
    {
        xy:[294,403.5],
        edges: ["nineteen","seventeen"]
    },
    {
        xy:[294,499.5],
        edges: ["seventeen","nine"]
    },
    {
        xy:[294,595.5],
        edges: ["nine","c10"]
    },
    { //7
        xy:[337,144.5],
        edges: ["three","c11"]
    },
    { 
        xy:[337,192.5],
        edges: ["three","four"]
    },
    {
        xy:[337,240.5],
        edges: ["fourteen","four"]
    },
    {
        xy:[337,288.5],
        edges: ["fourteen","fifteen"]
    },
    {
        xy:[337,336.5],
        edges: ["nineteen","fifteen"]
    },
    {
        xy:[337,384.5],
        edges: ["nineteen","sixteen"]
    },
    {
        xy:[337,432.5],
        edges: ["seventeen","sixteen"]
    },
    {
        xy:[337,480.5],
        edges: ["seventeen","eight"]
    },
    {
        xy:[337,528.5],
        edges: ["nine","eight"]
    },
    {
        xy:[337,576.5],
        edges: ["nine","c12"]
    },
    { //8
        xy:[376,165.5],
        edges: ["c11","four"]
    },
    {
        xy:[376,261.5],
        edges: ["four","fifteen"]
    },
    {
        xy:[376,357.5],
        edges: ["fifteen","sixteen"]
    },
    {
        xy:[376,453.5],
        edges: ["sixteen","eight"]
    },
    {
        xy:[376,549.5],
        edges: ["eight","c12"]
    },
    { //9
        xy:[420,192.5],
        edges: ["four","c13"]
    },
    {
        xy:[420,240.5],
        edges: ["four","five"]
    },
    {
        xy:[420,288.5],
        edges: ["fifteen","five"]
    },
    {
        xy:[420,336.5],
        edges: ["fifteen","six"]
    },
    {
        xy:[420,384.5],
        edges: ["sixteen","six"]
    },
    {
        xy:[420,432.5],
        edges: ["sixteen","seven"]
    },
    {
        xy:[420,480.5],
        edges: ["eight","seven"]
    },
    {
        xy:[420,528.5],
        edges: ["eight","c14"]
    },
    { //10
        xy:[458,215.5],
        edges: ["c13","five"]
    },
    {
        xy:[458,310.5],
        edges: ["five","six"]
    },
    {
        xy:[458,405.5],
        edges: ["six","seven"]
    },
    {
        xy:[458,500.5],
        edges: ["seven","c14"]
    },
    { //11
        xy:[503,240.5],
        edges: ["five","c15"]
    },
    {
        xy:[503,288.5],
        edges: ["five","c16"]
    },
    {
        xy:[503,336.5],
        edges: ["six","c16"]
    },
    {
        xy:[503,384.5],
        edges: ["six","c17"]
    },
    {
        xy:[503,432.5],
        edges: ["seven","c17"]
    },
    {
        xy:[503,480.5],
        edges: ["seven","c18"]
    }]

    if(seq == 1) {
        let naEdges = []
        task.users.forEach(user => {
            if(user.settlement) {
                // naEdges = naEdges.concat(user.settlements)
                // Array.prototype.push.apply(naEdges,user.settlements)
                naEdges = [...naEdges,...user.settlement]
            }
            if(user.city) {
                // naEdges = naEdges.concat(user.cities)
                // Array.prototype.push.apply(naEdges,user.cities)
                naEdges = [...naEdges,...user.city]
            }
        })
        naEdges.forEach(edge => {
            eGrid[edge].xy = [1000,1000]
        })
    }
    else if(seq == 1.5) {
        let naEdges = []
        task.users.forEach(user => {
            naEdges.push.apply(naEdges, user.roads)
        })
        naEdges.forEach(edge => {
            rGrid.splice(edge,1)
        })
    }
    return [eGrid,rGrid]
}

const get_turn = (db, socket, roomName) => {
    // console.log(roomName)
    let turnData = {}
    db.collection("rooms").findOne({roomName: roomName}, (error, task) => {
        if(task) {
            turnData.turn = task.turn
            if(task.progress) {

            }
            else {

            }
        }
        else if(error) {
            turnData.error = error
        }
        socket.nsp.to(roomName).emit("getTurn", turnData)
        // io.sockets.in(roomName).emit("getTurn", turnData)
    })
} 

const update_user = (option, detail, db) => {
    if(option == "addRoom") {
        let updateUser = db.collection("users").updateOne({
            userName: detail.body.userName, "activeRooms.roomName": detail.body.roomName
        },{
            $set: {"activeRooms.$.active":1}
        })
        updateUser.then((result) => {
            if(result.matchedCount == 0) {
                db.collection("users").updateOne({
                    userName: detail.body.userName
                },{
                    $push: {activeRooms:{
                        roomName: detail.body.roomName,
                        color: detail.body.color,
                        active: 1
                    }}
                })
            }
        })
    }
    else if(option == "updateSocket") {
        // console.log("inside updateSocket", detail.userName)
        let updateUser = db.collection("users").updateOne({
            userName: detail.userName
        },{
            $set: {id:detail.socket.id}
        })
        updateUser.then((result) => {
            // console.log("Query was run")
            if(result.matchedCount == 0) {
                console.log(`Socket for user: ${detail.userName}, not updated!`)
            }
            else {
                console.log(`Socket for user: ${detail.userName}, updated!`)
                detail.socket.emit("getGameDetails")
            }
        })
    }
}

const add_players_to_game = (db,roomName,io) => {
    db.collection("rooms").findOne({roomName: roomName}, (error, task) => {
        if(task) {
            task.users.forEach(user => {
                db.collection("users").findOne({userName: user.userName}, (error, task) => {
                    if(task) {
                        io.to(`${task.id}`).emit("joinGame", roomName)
                    }
                    else if(error) {
                        console.log(`Error fetching user details ${error}`)
                    }
                    else {
                        console.log(`User ${user.userName} not found`)
                    }
                })
            })
        }
        else if(error) {
            console.log(`Error fetching users in game: ${roomName}`)
        }
    })
}

const get_users = (db, socket, getUsersData) => {
    db.collection("rooms").findOne({roomName: getUsersData.roomName}, (error, task) => {
        if(task) {
            let active = ""
            let users = ""
            let self
            task.users.forEach(user => {
                if(task.turn === user.userName) {
                    active = "active"
                }
                else {
                    active = ""
                }
                if(user.userName === getUsersData.userName) {
                    self = `
                    <div class="div-block-6">
                        <div class="div-block-4 self ${active}" id="${user.userName}">
                            <div class="div-block-7 ${user.color}">
                                <div class="div-block-13"><img src="/images/avatars/${user.avatar}.png" alt="" class="image icon"></div>
                            </div>
                            <div class="div-block-8">
                                <div class="div-block-9 ${user.color}">
                                    <div class="text-block-2">${user.userName}</div>
                                </div>
                                <div class="div-block-10">
                                    <img src="/images/resource_card.png" alt="" class="image-2">
                                    <div class="text-block" id="${user.userName}-resource">0</div>
                                    <img src="/images/development_card.png" alt="" class="image-3">
                                    <div class="text-block" id="${user.userName}-dev">0</div>
                                    <img src="/images/longest_road.png" alt="" class="image-4 roadC">
                                    <div class="text-block" id="${user.userName}-roads">0</div>
                                    <img src="/images/largest_army.png" alt="" class="image-4 army">
                                    <div class="text-block" id="${user.userName}-knghts">0</div>
                                </div>
                                <div class="div-block-11 ${user.color}">
                                    <img src="/images/trophy.png" alt="" class="image-15">
                                    <div class="text-block-3" id="${user.userName}-victory-points">0</div>
                                </div>
                            </div>
                        </div>
                        <div class="div-block-4 self">
                            <div class="div-block-8">
                                <div class="div-block-10">
                                    <img src="/images/resources/wood-res.png" alt="" class="image-2 res">
                                    <div class="text-block" id="self-wood">0</div>
                                    <img src="/images/resources/brick-res.png" alt="" class="image-2 res">
                                    <div class="text-block" id="self-brick">0</div>
                                    <img src="/images/resources/grain-res.png" alt="" class="image-2 res">
                                    <div class="text-block" id="self-grain">0</div>
                                    <img src="/images/resources/sheep-res.png" alt="" class="image-2 res">
                                    <div class="text-block" id="self-sheep">0</div>
                                    <img src="/images/resources/ore-res.png" alt="" class="image-2 res">
                                    <div class="text-block" id="self-ore">0</div>
                                </div>
                                <div class="div-block-14">
                                    <div><img src="/images/trade%2Cpng.png" alt="" class="image-8"></div>
                                    <div class="div-block-16">
                                        <img id="self_city" src="/images/tokens/${user.color}-city.png" sizes="(max-width: 767px) 16vw, 105.58333587646484px" alt="" class="image-7"><img id="self-settlement" src="/images/tokens/${user.color}-settlement.png" sizes="(max-width: 767px) 16vw, 94.58333587646484px" alt="" class="image-7">
                                        <div class="div-block-15"><img id="self_road" src="/images/tokens/${user.color}-road.png" sizes="(max-width: 479px) 15vw, (max-width: 767px) 3vw, (max-width: 991px) 2vw, 4vw" alt="" class="image-7 rd"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="div-block-7 dice" onclick = "play_dice()"><img src="/images/dice.png" alt="" class="image-6"></div>
                        </div>
                    </div>
                    `
                }
                else {
                    let single = `
                    <div class="div-block-4 ${active}" id="${user.userName}">
                        <div class="div-block-7 ${user.color}">
                            <div class="div-block-13"><img src="/images/avatars/${user.avatar}.png" alt="" class="image icon"></div>
                        </div>
                        <div class="div-block-8">
                            <div class="div-block-9 ${user.color}">
                                <div class="text-block-2">${user.userName}</div>
                            </div>
                            <div class="div-block-10">
                                <img src="/images/resource_card.png" alt="" class="image-2">
                                <div class="text-block" id="${user.userName}-resource">0</div>
                                <img src="/images/development_card.png" alt="" class="image-3">
                                <div class="text-block" id="${user.userName}-dev">0</div>
                                <img src="/images/longest_road.png" alt="" class="image-4 roadC">
                                <div class="text-block" id="${user.userName}-roads">0</div>
                                <img src="/images/largest_army.png" alt="" class="image-4 army">
                                <div class="text-block" id="${user.userName}-knghts">0</div>
                            </div>
                            <div class="div-block-11 ${user.color}">
                                <img src="/images/trophy.png" alt="" class="image-15">
                                <div class="text-block-3" id="${user.userName}-victory-points">0</div>
                            </div>
                        </div>
                    </div>
                    `
                    users += single
                }
            })
            users += self
            socket.emit("getUsers", users)
        }
        else if(error) {
            console.log("Error in get_users(): ",error)
        }
    })
}

const get_turn_inputs = (db, socket, turnInputsData) => {
    db.collection("rooms").findOne({
        roomName: turnInputsData.roomName
    }, (error, task) => {
        if(task) {
            let eGrid = []
            let rGrid = []
            let turnUser = task.users.filter(user => user.userName === turnInputsData.userName)[0]
            if(task.turnData[task.turnData.length-1].seq > 1) {

            }
            else {
                if(!turnInputsData.lastType) {
                    eGrid = get_places(task, turnUser, 1)[0]
                    turnInputsData.turnType = "placeSettlement"
                    turnInputsData.eGrid = eGrid
                    turnInputsData.piece = "settlement"
                    turnInputsData.color = turnUser.color
                    turnInputsData.seq = 1
                }
                else if(turnInputsData.lastType == "placeSettlement") {
                    rGrid = get_places(task, turnUser, 1.5)[0]
                    turnInputsData.turnType = "placeRoad"
                    turnInputsData.rGrid = rGrid
                    turnInputsData.piece = "road"
                    turnInputsData.color = turnUser.color
                }
            }
            socket.emit("turnInputs", turnInputsData)
        }
        else if(error) {
            console.log("Error occured in get_turn_inputs():",error)
        }
    })
}

const place_piece = (db,socket,placePieceData) => {
    db.collection("rooms").findOne({
            roomName: placePieceData.roomName
        },(error, task) => {
        if(task) {
            let turnUser = task.users.filter(user => user.userName === placePieceData.userName)[0]
            let updateGame = db.collection("rooms").updateOne({
                roomName: placePieceData.roomName, "users.userName": placePieceData.userName
            },{
                $push: {["users.$." + placePieceData.piece]:placePieceData.index},
                $inc: {"users.$.vp":1}
            })
            updateGame.then((result) => {
                if(result.matchedCount == 1) {
                    let eGrid = [{ //1
                        xy:[101.5,215.5],
                        edges: ["c1","one","c5"]
                    },
                    {
                        xy:[75,263],
                        edges: ["c1","c2","one"]
                    },
                    {
                        xy:[101.5,310.5],
                        edges: ["c2","twelve","one"]
                    },
                    {
                        xy:[75,358],
                        edges: ["c2","c3","twelve"]
                    },
                    {
                        xy:[101.5,405.5],
                        edges: ["c3","eleven","twelve"]
                    },
                    {
                        xy:[75,453],
                        edges: ["c3","c4","eleven"]
                    },
                    {
                        xy:[101.5,500.5],
                        edges: ["c4","c6","eleven"]
                    },
                    {//2
                        xy:[184,168],
                        edges: ["c5","two","c7"]
                    },
                    {
                        xy:[157.5,215.5],
                        edges: ["c5","one","two"]
                    },
                    {
                        xy:[184,263],
                        edges: ["one","thirteen","two"]
                    },
                    {
                        xy:[157.5,310.5],
                        edges: ["one","twelve","thirteen"]
                    },
                    {
                        xy:[184,358],
                        edges: ["twelve","eighteen","thirteen"]
                    },
                    {
                        xy:[157.5,405.5],
                        edges: ["twelve","eleven","eighteen"]
                    },
                    {
                        xy:[184,453],
                        edges: ["eleven","ten","eighteen"]
                    },
                    {
                        xy:[157.5,500.5],
                        edges: ["eleven","c6","ten"]
                    },
                    {
                        xy:[184,548],
                        edges: ["c6","c8","ten"]
                    },
                    { //3
                        xy:[266.5,120.5],
                        edges: ["c9","c7","three"]
                    },
                    { 
                        xy:[240,168],
                        edges: ["c7","two","three"]
                    },
                    {
                        xy:[266.5,215.5],
                        edges: ["three","two","fourteen"]
                    },
                    {
                        xy:[240,263],
                        edges: ["two","thirteen","fourteen"]
                    },
                    {
                        xy:[266.5,310.5],
                        edges: ["fourteen","thirteen","nineteen"]
                    },
                    {
                        xy:[240,358],
                        edges: ["thirteen","eighteen","nineteen"]
                    },
                    {
                        xy:[266.5,405.5],
                        edges: ["nineteen","eighteen","seventeen"]
                    },
                    {
                        xy:[240,453],
                        edges: ["eighteen","ten","seventeen"]
                    },
                    {
                        xy:[266.5,500.5],
                        edges: ["seventeen","ten","nine"]
                    },
                    {
                        xy:[240,548],
                        edges: ["ten","c8","nine"]
                    },
                    {
                        xy:[266.5,595.5],
                        edges: ["nine","c8","c10"]
                    },
                    { //4
                        xy:[322.5,120.5],
                        edges: ["c9","three","c11"]
                    },
                    { 
                        xy:[349,168],
                        edges: ["c11","three","four"]
                    },
                    {
                        xy:[322.5,215.5],
                        edges: ["three","fourteen","six"]
                    },
                    {
                        xy:[349,263],
                        edges: ["six","fourteen","fifteen"]
                    },
                    {
                        xy:[322.5,310.5],
                        edges: ["fourteen","nineteen","fifteen"]
                    },
                    {
                        xy:[349,358],
                        edges: ["fifteen","nineteen","sixteen"]
                    },
                    {
                        xy:[322.5,405.5],
                        edges: ["nineteen","seventeen","sixteen"]
                    },
                    {
                        xy:[349,453],
                        edges: ["sixteen","seventeen","eight"]
                    },
                    {
                        xy:[322.5,500.5],
                        edges: ["seventeen","nine","eight"]
                    },
                    {
                        xy:[349,548],
                        edges: ["eight","nine","c12"]
                    },
                    {
                        xy:[322.5,595.5],
                        edges: ["nine","c10","c12"]
                    },
                    {//5
                        xy:[405,168],
                        edges: ["c13","c11","six"]
                    },
                    {
                        xy:[431.5,215.5],
                        edges: ["c13","four","five"]
                    },
                    {
                        xy:[405,263],
                        edges: ["four","fifteen","five"]
                    },
                    {
                        xy:[431.5,310.5],
                        edges: ["five","fifteen","six"]
                    },
                    {
                        xy:[405,358],
                        edges: ["fifteen","sixteen","six"]
                    },
                    {
                        xy:[431.5,405.5],
                        edges: ["six","sixteen","seven"]
                    },
                    {
                        xy:[405,453],
                        edges: ["sixteen","eight","seven"]
                    },
                    {
                        xy:[431.5,500.5],
                        edges: ["seven","eight","c14"]
                    },
                    {
                        xy:[405,548],
                        edges: ["c14","eight","c12"]
                    },{ //6
                        xy:[487.5,215.5],
                        edges: ["c15","c13","five"]
                    },
                    {
                        xy:[514,263],
                        edges: ["c15","five","c16"]
                    },
                    {
                        xy:[487.5,310.5],
                        edges: ["five","six","c16"]
                    },
                    {
                        xy:[514,358],
                        edges: ["c16","six","c17"]
                    },
                    {
                        xy:[487.5,405.5],
                        edges: ["six","seven","c17"]
                    },
                    {
                        xy:[514,453],
                        edges: ["c17","seven","c18"]
                    },
                    {
                        xy:[487.5,500.5],
                        edges: ["seven","c14","c18"]
                    }]
                    placePieceData.x = eGrid[placePieceData.index].xy[0]
                    placePieceData.y = eGrid[placePieceData.index].xy[1]
                    socket.nsp.to(placePieceData.roomName).emit("placePiece", placePieceData)
                }
            })
        }
        else if(error) {
            console.log(`Error fetching user details in place_piece(): ${error}`)
        }
    })
}

const get_roads_places = (db,socket,getRoadsData) => {
    
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}

module.exports = {
    set_board,
    get_turn,
    update_user,
    add_players_to_game,
    get_users,
    get_turn_inputs,
    place_piece,
    get_roads_places
}