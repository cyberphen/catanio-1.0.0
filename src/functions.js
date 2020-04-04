const set_board = () => {
    let tile_array = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    let tiles = [
        ["grain","url(images/tiles/grain-tile.png)"],
        ["grain","url(images/tiles/grain-tile.png)"],
        ["grain","url(images/tiles/grain-tile.png)"],
        ["grain","url(images/tiles/grain-tile.png)"],
        ["sheep","url(images/tiles/sheep-tile.png)"],
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
        //let rand_tile = Math.floor(Math.random() * tiles.length)
        boardData[tile_array[rand]] = tiles[0]
        tile_array.splice(rand,1)
        tiles.splice(0,1)
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
            //let rand_tile = Math.floor(Math.random() * tiles.length)
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
            //let rand_tile = Math.floor(Math.random() * tiles.length)
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
    return [boardData,seaData]
}

module.exports = {
    set_board
}