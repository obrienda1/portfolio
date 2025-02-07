//setup
let board;
let currentSquares = [];
let currentMaxSquares = 9;
let possibleContent = [
    "Potato",
    "Doge",
    "Cheems",
    "Silly little example",
    "Cat on screen",
    "Hi Stephen",
    "Bob",
    "Screen share jar",
    "Meme history",
    "Food emoji react",
    "Animal emoji react",
    "It's magic",
    "Eagle team"
];
let completedSquares = 0;

//what content/information does each square need?
//1. text for the bingo event
//2. class for if checked off or not
//3. color (?)
//4. meme/image (?)

//block dimensions (if necessary)

document.addEventListener('DOMContentLoaded', 
    () => {
        //"get" the board div to add blocks into
        board = document.getElementById("board");

        //create blocks and add event listeners and css classes to each
        //randomize content on each block upon page reload
        setBoard();

        //reset game button
        let button = document.getElementById('resetBtn');
        button.addEventListener('click', reset);

        //winning mechanic (besides if all blocks are selected)
        let gameOver = document.getElementById('win-message');
        gameOver.classList.add('incomplete');
    }
);

function setBoard() {
    //from 1 to MaxSquares, make new box with randomized possibleContent information
    //new box id number increases from 1 to 9 as index
    for(let i = 0; i < currentMaxSquares; i++) {
        //set up new block element
        let newBlock = document.createElement('div');
        let blockId = i+1;
        newBlock.classList.add('block', 'unchecked');
        newBlock.setAttribute('id', 'block' + blockId);
        

        if(blockId === 5) {
            newBlock.content = document.createElement('div');
            newBlock.content.classList.add('content', 'markedCompleted');
            newBlock.classList.add('markedCompleted');
            newBlock.classList.remove('unchecked');
            newBlock.content.innerText='Free';
            currentSquares.push(newBlock.getAttribute('id'));
            newBlock.appendChild(newBlock.content);
            board.appendChild(newBlock);
        } else {
            //set up new element for content
            newBlock.content = document.createElement('div');
            newBlock.content.classList.add('content');
            let randomizedIndex = Math.floor(Math.random()*possibleContent.length);
            let contentStr = possibleContent[randomizedIndex];
            possibleContent = possibleContent.filter(
                (possible) => !possible.includes(contentStr)
            );
            newBlock.content.innerText=contentStr;
            newBlock.addEventListener('click', (evt) => {
                if(evt.target.classList.contains('unchecked')) {
                    evt.target.classList.add('markedCompleted');
                    evt.target.classList.remove('unchecked');
                    completedSquares++;
                    currentSquares.push(evt.target.getAttribute('id'))
                    if (completedSquares == currentMaxSquares-1) {
                        bingo();
                    } else {
                        checkDiagonal();
                        checkHorizontal();
                        checkVertical();
                    }
                }
            });

            //add content to block and block to board
            newBlock.appendChild(newBlock.content);
            board.appendChild(newBlock);
        }
    }
}

function bingo() {
    let gameOver = document.getElementById('win-message');
    gameOver.classList.remove('incomplete');
    gameOver.classList.add('complete');
}

function reset() {
    location.reload();
}

function checkDiagonal() {
    if( currentSquares.includes('block1') && currentSquares.includes('block9') || currentSquares.includes('block3') && currentSquares.includes('block7')) {
        bingo();
    }
}

function checkHorizontal() {
    //first row
    if ( currentSquares.includes('block1') && currentSquares.includes('block2') && currentSquares.includes('block3') ) {
        bingo();
    }
    //second row
    else if ( currentSquares.includes('block4') && currentSquares.includes('block6') ) {
        bingo();
    }
    //third row
    else if ( currentSquares.includes('block7') && currentSquares.includes('block8') && currentSquares.includes('block9') ) {
        bingo();
    }
}

function checkVertical() {
    //first column
    if ( currentSquares.includes('block1') && currentSquares.includes('block4') && currentSquares.includes('block7') ) {
        bingo();
    }
    //second column
    else if ( currentSquares.includes('block2') && currentSquares.includes('block8') ) {
        bingo();
    }
    //third column
    else if ( currentSquares.includes('block3') && currentSquares.includes('block6') && currentSquares.includes('block9') ) {
        bingo();
    }
}