let gameboard = {
    gameBoard: []
};

let start = document.querySelector('#start');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

const arr = [];

for (let i = 1; i <= 9; i++) {
    arr.push(document.querySelector('.item'));

}

//Markers
let xMarker = document.querySelector('#xmarker');
let oMarker = document.querySelector('#omarker');
let mark = '';

xMarker.addEventListener('click', () => {
    mark = xMarker.innerText;
})

oMarker.addEventListener('click', () => {
    mark = oMarker.innerText;
})

//Board generation

const boxes = document.querySelectorAll('.item');
        boxes.forEach(box => {
            box.addEventListener('click', () => {
                if (box.innerText === '') { // Prevent overwriting marks
                    box.innerText = mark;
                    if([one, four, seven] == box.innerText) {
                        console.log("win");
                    }
                }
            });
        });

