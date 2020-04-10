const socket = io()

socket.on("getDetails", () => { //To send initial details of the user (variables): userName
    let details = {}
    details.userName = localStorage.getItem("userName")
    socket.emit("getDetails", details)
}) //emits: getDetails

socket.on("message", message => {
    alert(message)
})

socket.on("logout", (message) => {
    alert(message)
    window.location.href = "/"
})