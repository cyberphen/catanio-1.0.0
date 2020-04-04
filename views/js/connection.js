const socket = io()

socket.on("authCodeGenerated", authCode => {
    //alert(authCode)
    let authData = {}
    authData.userName = localStorage.getItem("userName")
    authData.authCode = localStorage.getItem("authCode")
    socket.emit("authCodeGenerated",authData)
    localStorage.setItem("authCode", authCode)
})

socket.on("logout", (message) => {
    alert(message)
    window.location.href = "/"
})