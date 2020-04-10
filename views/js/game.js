localStorage.setItem("turn", 0)
socket.on("getGameDetails", () => { //To send game details whenever requested by server (variables): roomName, userName
    let gameData = {}
    gameData.roomName = localStorage.getItem("roomName")
    gameData.userName = localStorage.getItem("userName")
    socket.emit("getGameDetails", gameData)
}) //emits: getGameDetails

socket.on("getTurn", turnData => { //To check if its the user's turn and perform actions accordingly (variables): n/a
if(turnData.error) {
        alert(turnData.error)
        return turnData.error
    }
    if(localStorage.getItem("userName") == turnData.turn) {
        if(localStorage.getItem("turn") == 0) {
            let turnInputsData = {
                userName: localStorage.getItem("userName"),
                roomName: localStorage.getItem("roomName")
            }
            localStorage.setItem("turn",1)
            socket.emit("turnInputs", turnInputsData)
            turn_animation("your")
        }
    }
    else {
        localStorage.setItem("turn",0)
        turn_animation(`${turnData.turn}'s`)
    }
}) //emits turnInputs

socket.on("joinGame", roomName => { //to get initial turn details when the user joins the game (variables) : roomName
    let turnData = {}
    turnData.roomName = roomName
    socket.emit("getTurnDetails", turnData)
}) //emits getTurnDetails

socket.on("getUsers", users => {
    document.getElementById("players").innerHTML = users
})

socket.on("turnInputs", turnInputsData => {
    localStorage.setItem("seq",turnInputsData.seq)
    if(turnInputsData.turnType == "placeSettlement") {
        show_places(turnInputsData)
    }
})

socket.on("placePiece", placePieceData => {
    place_piece_client(placePieceData)
})