const set_board = (boardData) => {
    Object.keys(boardData.boardData).forEach(function(key) {
        document.getElementById(key).children[0].children[0].style.backgroundImage = boardData.boardData[key][1]
        if(boardData.boardData[key][2]) {
            if(boardData.boardData[key][2] == 2 || boardData.boardData[key][2] == 12)
            {
                document.getElementById(key).children[0].children[0].innerHTML = `<div class="dice-number-piece"><span style="height: 13px">${boardData.boardData[key][2]}</span><span style="letter-spacing:-5px;margin-left:-5px">.</span></div>`
            }
            else if(boardData.boardData[key][2] == 3 || boardData.boardData[key][2] == 11)
            {
                document.getElementById(key).children[0].children[0].innerHTML = `<div class="dice-number-piece"><span style="height: 13px">${boardData.boardData[key][2]}</span><span style="letter-spacing:-5px;margin-left:-5px">..</span></div>`
            }
            else if(boardData.boardData[key][2] == 4 || boardData.boardData[key][2] == 10)
            {
                document.getElementById(key).children[0].children[0].innerHTML = `<div class="dice-number-piece"><span style="height: 13px">${boardData.boardData[key][2]}</span><span style="letter-spacing:-5px;margin-left:-5px">...</span></div>`
            }
            else if(boardData.boardData[key][2] == 5 || boardData.boardData[key][2] == 9)
            {
                document.getElementById(key).children[0].children[0].innerHTML = `<div class="dice-number-piece"><span style="height: 13px">${boardData.boardData[key][2]}</span><span style="letter-spacing:-5px;margin-left:-5px">....</span></div>`
            }
            else
            {
                document.getElementById(key).children[0].children[0].innerHTML = `<div class="dice-number-piece" style="color:red"><span style="height: 13px">${boardData.boardData[key][2]}</span><span style="letter-spacing:-5px;margin-left:-5px">.....</span></div>`
            }
        }
    })
    Object.keys(boardData.seaData).forEach(function(key) {
        document.getElementById(key).children[0].children[0].innerHTML = boardData.seaData[key][1]
        if(key == "c3"|| key == "c6") {
            document.getElementById(key).children[0].children[0].children[0].children[0].children[0].style.transform = "rotateZ(0deg)"
        }
        else if(key == "c10") {
            document.getElementById(key).children[0].children[0].children[0].children[0].children[0].style.transform = "rotateZ(60deg)"
        }
        else if(key == "c14"|| key == "c17") {
            document.getElementById(key).children[0].children[0].children[0].children[0].children[0].style.transform = "rotateZ(120deg)"
        }
        else if(key == "c15") {
            document.getElementById(key).children[0].children[0].children[0].children[0].children[0].style.transform = "rotateZ(180deg)"
        }
        else if(key == "c11"|| key == "c7") {
            document.getElementById(key).children[0].children[0].children[0].children[0].children[0].style.transform = "rotateZ(240deg)"
        }
    })
    boardData.users.forEach(user => {
        if(user.settlement) {
            user.settlement.forEach(piece => {
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
                let placePieceData = {
                    index: piece,
                    color: user.color,
                    piece: "settlement",
                    x: eGrid[piece].xy[0],
                    y: eGrid[piece].xy[1]
                }
                place_piece_client(placePieceData)
            })
        }
    })
}

const show_places = (turnInputsData) => {
    if(turnInputsData.turnType == "placeSettlement") {
        turnInputsData.eGrid.forEach(edge => {
            document.getElementById("placement").innerHTML += `
            <div class="placement-circle" id="e${turnInputsData.eGrid.indexOf(edge)}" name="${edge.xy[0]},${edge.xy[1]}" style="top: ${edge.xy[0]}px; left: ${edge.xy[1]}px;" onmouseenter="piece_over('e${turnInputsData.eGrid.indexOf(edge)}', '${turnInputsData.piece}', '${turnInputsData.color}')" onmouseleave="piece_out('e${turnInputsData.eGrid.indexOf(edge)}')" onclick="place_piece(${turnInputsData.eGrid.indexOf(edge)}, '${turnInputsData.piece}', '${turnInputsData.color}')">
            </div>
            `
        })
    }
    if(turnInputsData.turnType == "placeRoad") {
        turnInputsData.rGrid.forEach(edge => {
            document.getElementById("placement").innerHTML += `
            <div class="placement-circle" id="r${turnInputsData.rGrid.indexOf(edge)}" name="${edge.xy[0]},${edge.xy[1]}" style="top: ${edge.xy[0]}px; left: ${edge.xy[1]}px;" onmouseenter="piece_over('e${turnInputsData.rGrid.indexOf(edge)}', '${turnInputsData.piece}', '${turnInputsData.color}')" onmouseleave="piece_out('e${turnInputsData.rGrid.indexOf(edge)}')" onclick="place_piece(${turnInputsData.rGrid.indexOf(edge)}, '${turnInputsData.piece}', '${turnInputsData.color}')">
            </div>
            `
        })
    }
}

const piece_over = (id,piece,color) => {
    document.getElementById(id).innerHTML += `
    <img class=${piece} src="/images/tokens/${color}-${piece}.png" onmouseover="event.stopPropagation()">
    <img class="arrow" src="/images/arrow.gif" onmouseover="event.stopPropagation()">
    `
}

const piece_out = (id) => {
    document.getElementById(id).innerHTML = ""
}

const place_piece = (index, piece, color) => {
    document.getElementById(`e${index}`).remove()
    let placePieceData = {
        userName: localStorage.getItem("userName"),
        roomName: localStorage.getItem("roomName"),
        index: index,
        piece: piece,
        color: color
    }
    socket.emit("placePiece", placePieceData)
}

const place_piece_client = (placePieceData) => {
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

    eGrid.forEach(edge => {
        if(document.getElementById(`e${eGrid.indexOf(edge)}`)) {
            document.getElementById(`e${eGrid.indexOf(edge)}`).remove()
        }
    })
    // if(document.getElementsByName(`${placePieceData.x+56},${placePieceData.y}`)[0]) {
    //     document.getElementsByName(`${placePieceData.x+56},${placePieceData.y}`)[0].remove()
    // }
    // if(document.getElementsByName(`${placePieceData.x-56},${placePieceData.y}`)[0]) {
    //     document.getElementsByName(`${placePieceData.x-56},${placePieceData.y}`)[0].remove()
    // }
    // if(document.getElementsByName(`${placePieceData.x-26.5},${placePieceData.y+47.5}`)[0]) {
    //     document.getElementsByName(`${placePieceData.x-26.5},${placePieceData.y+47.5}`)[0].remove()
    // }
    // if(document.getElementsByName(`${placePieceData.x-26.5},${placePieceData.y-47.5}`)[0]) {
    //     document.getElementsByName(`${placePieceData.x-26.5},${placePieceData.y-47.5}`)[0].remove()
    // }
    // if(document.getElementsByName(`${placePieceData.x+26.5},${placePieceData.y+47.5}`)[0]) {
    //     document.getElementsByName(`${placePieceData.x+26.5},${placePieceData.y+47.5}`)[0].remove()
    // }
    // if(document.getElementsByName(`${placePieceData.x+26.5},${placePieceData.y-47.5}`)[0]) {
    //     document.getElementsByName(`${placePieceData.x+26.5},${placePieceData.y-47.5}`)[0].remove()
    // }
    document.getElementById("placement").innerHTML += `
    <div id="e${placePieceData.index}" style="top: ${placePieceData.x}px; left: ${placePieceData.y}px; position:absolute">
        <img class=${placePieceData.piece} src="/images/tokens/${placePieceData.color}-${placePieceData.piece}.png" style="top:5px">
    </div>
    `
    if(localStorage.getItem("seq") == 1) {
        let getRoadsData = {
            userName: localStorage.getItem("userName"),
            roomName: localStorage.getItem("roomName"),
            seq: 1.5
        }
        localStorage.setItem("seq", 1.5)
        socket.emit("getRoadsPlaces", getRoadsData)
    }
}

const play_dice = () => {
    alert("dice played")
}

const turn_animation = (name) => {
    document.getElementById("turn-text").innerHTML = `${name} turn`
        document.getElementById("turn-pop").style.display = "flex"
        document.getElementById("turn-pop").style.animationName = "turn-pop"
        document.getElementById("turn-text").style.animationName = "turn-text-pop"
        setTimeout(function(){ 
            document.getElementById("turn-pop").style.animationName = "turn-out"
            document.getElementById("turn-text").style.animationName = "turn-text-out"
            setTimeout(function(){ 
                document.getElementById("turn-pop").style.display = "none"
            },400)
        }, 1000)
}

const join_room_submit = () => {
    var myForm = document.getElementById("gameForm")
    localStorage.setItem("roomName", document.getElementById("roomName").value)
    myForm.submit()
}