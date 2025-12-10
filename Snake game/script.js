const board = document.querySelector(".board");
const blockHeight = 80;
const blockWidth = 80;
const rows = Math.floor(board.clientHeight/blockHeight);
const cols = Math.floor(board.clientWidth/blockWidth);
let block = '';
// for(let i = 1; i<= rows*cols; i++){
//     block += `<div class="block"></div>`;
// }
for(let row = 0; row<rows; row++){
    for(let col = 0; col<cols; col++){
        block += `<div class="block js-block">${row}-${col}</div>`;
    }
}
document.querySelector(".board").innerHTML = block;
