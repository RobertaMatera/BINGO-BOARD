const generateMainBoard = () => {
    const board = document.querySelector('.main-board')
    for (let i = 0; i < 76; i++) {
        board.innerHTML += `<div class="cell">${i+1}</div>`
        
    }
}

window.onload = function () {
    generateMainBoard()
}