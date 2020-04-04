const set_board = (boardData) => {
    Object.keys(boardData.boardData).forEach(function(key) {
        document.getElementById(key).children[0].children[0].style.backgroundImage = boardData.boardData[key][1]
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
}