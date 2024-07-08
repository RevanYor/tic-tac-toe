let gameboard = {
    gameBoard: []
};

let mark = '';

//Markers
let xMarker = document.querySelector('#xmarker');
let oMarker = document.querySelector('#omarker');

xMarker.addEventListener('click', () => {
    mark = xMarker.innerText;
})

oMarker.addEventListener('click', () => {
    mark = oMarker.innerText;
    console.log(mark);
})

let box = document.querySelectorAll('.item');

box.forEach(box.addEventListener('click', () => {
    box.innerText = mark;
}));

const playerFactory = (marker) => {
    const hey = () => console.log(marker);
    return {marker, hey};
}
const boy = playerFactory(this.marker);