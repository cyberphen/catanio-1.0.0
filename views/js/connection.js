const socket = io()

socket.on("initialize", () => {
    //variables roomName, userName, color
    boardData = {}
    boardData.roomName = "Eitght"
    boardData.userName = "ankush1492"
    boardData.color = "red"
    socket.emit("loadBoard", boardData)
})

socket.on("loadBoard", boardData => {
    //variables roomName, userName, color, seaData, boardData
    set_board(boardData)
})