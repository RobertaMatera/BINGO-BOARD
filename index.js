const generateMainBoard = () => {
    const board = document.querySelector('.main-board')
    for (let i = 0; i < 76; i++) {
        board.innerHTML += `<div class="cell">${i+1}</div>`
        
    }
}

const fillArray = () => {
    const arr = []
    for (let i = 0; i < 76; i++) {
        arr.push(i+1)
    }
    return arr
}

const getRandomNumber = (range) => {
    const randIndex = Math.floor(Math.random() * range.length)
    const random = range.splice(randIndex, 1)[0]
    return random
}

const generateRandomNumber = (range) => {
    const randomNumb = getRandomNumber(range)
    const randNumbDiv = document.getElementById('randNumbDiv')
    randNumbDiv.innerText = "Number: " + randomNumb

    const cells = document.querySelectorAll('.main-board .cell')
    cells[randomNumb-1].classList.add('highlight')
}


const generateUserBoards = () => {
    const usersNumBoard = document.getElementById('usersNumBoard').value
    const container = document.querySelector('.container')
    if(parseInt(usersNumBoard)>0){
        for (let i = 0; i < parseInt(usersNumBoard); i++) {
            const range = fillArray()

            const board = document.createElement('div')
            board.className = 'user-board'

            for (let j = 0; j < 24; j++) {
                const random = getRandomNumber(range)
                board.innerHTML += `<div class='user-cell'>${random}</div>`
            }
            container.appendChild(board)
        }
    }
}

window.onload = function () {
    generateMainBoard()

    const randomBtn = document.getElementById('random-btn')

    const range = fillArray()

    randomBtn.addEventListener('click', function () {
        generateRandomNumber(range)
    })

    const userBoardBtn = document.getElementById('user-board-btn')
    userBoardBtn.addEventListener('click', function () {
        generateUserBoards()
    })
}