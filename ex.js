const Gameboard = (() => {
    let board = Array(9).fill('');

    const getBoard = () => board;

    const setMark = (index, mark) => {
        if (board[index] === '') {
            board[index] = mark;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = Array(9).fill('');
    };

    return { getBoard, setMark, resetBoard };
})();

const Player = (marker) => {
    return { marker };
};

const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let currentMarker = '';

    const startGame = () => {
        players = [Player('X'), Player('O')];
        currentPlayerIndex = 0;
        currentMarker = '';
        Gameboard.resetBoard();
        renderBoard();
        document.querySelector('.markers').classList.remove('dis');
        document.querySelector('.container').classList.add('dis');
        addMarkerEventListeners();
    };

    const renderBoard = () => {
        const board = Gameboard.getBoard();
        const boxes = document.querySelectorAll('.item');
        boxes.forEach((box, index) => {
            box.innerText = board[index];
        });
    };

    const addMarkerEventListeners = () => {
        const xMarker = document.querySelector('#xmarker');
        const oMarker = document.querySelector('#omarker');

        xMarker.addEventListener('click', () => {
            currentPlayerIndex = 0;
            currentMarker = 'X';
            document.querySelector('.markers').classList.add('dis');
            document.querySelector('.container').classList.remove('dis');
            addBoardEventListeners();
        });

        oMarker.addEventListener('click', () => {
            currentPlayerIndex = 1;
            currentMarker = 'O';
            document.querySelector('.markers').classList.add('dis');
            document.querySelector('.container').classList.remove('dis');
            addBoardEventListeners();
        });
    };

    const addBoardEventListeners = () => {
        const boxes = document.querySelectorAll('.item');
        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                const index = box.getAttribute('data-index');
                if (Gameboard.setMark(index, players[currentPlayerIndex].marker)) {
                    switchPlayer();
                    renderBoard();
                }
            });
        });
    };

    const switchPlayer = () => {
        currentPlayerIndex = 1 - currentPlayerIndex;
    };

    return { startGame };
})();

document.querySelector('#start').addEventListener('click', () => {
    GameController.startGame();
});
