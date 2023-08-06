//  var data = ["A", "B", "C", "D", "E", "F", "G", "H", "I" ];
// var html = '<table>  <tr>';
// for(var i = 0 ; i<data.length; i++){
//     if(i%3 == 0 && i != 0){
//        html+= '</tr><tr>'
//     }
//     html+='<td>'+data[i]+'</td>';
// }
// html+='</tr></table>';

// document.write(html);

const  body = document.getElementById('body')
body.style.padding = "0"
body.style.margin = "0"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.padding = "0"
body.style.flexDirection = "column"


const board = document.getElementById('gameboard')
board.style.height = '300px'
board.style.width = '300px'
board.style.backgroundColor = 'black'
board.style.display = 'flex'
board.style.flexWrap = 'wrap'
board.style.border = "solid black 2px"



const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const circle = document.createElement('div')
circle.classList.add('Circle')
const startCells = [
    " ", " ", " ",  " ", " ", " ", " ",  " ", " "
]

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square')
        gameBoard.append(cellElement)

    })
}


createBoard()
body.append(circle)



