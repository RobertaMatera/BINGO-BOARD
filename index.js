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

const getRandomArray = (range) => {
    const randIndex = Math.floor(Math.random() * range.length)
    const random = range.splice(randIndex, 1)[0]
    return random
}

const generateRandomNumber = (range) => {
    const randomNumb = getRandomArray(range)
    const randNumbDiv = document.getElementById('randNumbDiv')
    randNumbDiv.innerText = "Number: " + randomNumb

    const cells = document.querySelectorAll('.main-board .cell')
    cells[randomNumb-1].classList.add('highlight')
}

window.onload = function () {
    generateMainBoard()

    const randomBtn = document.getElementById('random-btn')

    const range = fillArray()

    randomBtn.addEventListener('click', function () {
        generateRandomNumber(range)
    })
}