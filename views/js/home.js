socket.on("joinGame", roomName => { //To join game room when someone add this user to their game (variables): roomName
    socket.emit("joinGame", roomName)
}) //emits: joinGame

socket.on("redirectToGame", roomData => { //After joining game room to redirect from home page to game page (variables) : n/a
    var myForm = document.getElementById("gameForm")
    myForm.method="post"
    myForm.action = "/game"
    var roomNameF = document.getElementById("roomName")
    var userNameF = document.getElementById("userName")
    var colorF = document.getElementById("color")
    roomNameF.setAttribute("name", "roomName")
    roomNameF.setAttribute("value", roomData.roomName)
    userNameF.setAttribute("name", "userName")
    userNameF.setAttribute("value", localStorage.getItem("userName"))
    localStorage.setItem("roomName", roomData.roomName)
    alert(`Redirecting to the game now! Press OK: ${roomData.roomName}`)
    myForm.submit()
}) //emits: n/a
