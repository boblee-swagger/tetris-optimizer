import Tetromino from "./tetrominos.js";

export default class Game extends HTMLElement{
    constructor(){
        super();
        this.Tetromino = new Tetromino();
        this.game_board = [[]];
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.time = 0;
        this.gameSpeed = 1;
        this.gameOver = false;
        this.gamePaused = false;
        this.gameStarted = false;
        this.MAX_WIDTH = 10;
        this.MAX_HEIGHT = 20;
    }

    connectedCallback(){
        this.renderHTML()
    }

    renderHTML() {
        this.innerHTML = `
        <div id="game_window">
        <div id="score">

        </div>
        <div id="board_aside">
            <div id="random_pieces">
    
            </div>
            <div id="line">
    
            </div>
        </div>
         <div id="game_board">
    
        </div>
        <div id="lives">

        </div>
    </div>
        `;
    }


    initBoard() {
        this.game_board = Array(this.MAX_HEIGHT).fill(null).map(() => Array(this.MAX_WIDTH).fill(0));
    }
    
    startGame = () => {
        this.initBoard();  
        this.gameStarted = true;
        const tetro = this.Tetromino.generateTetro();
        this.game_board = this.insertTetro(tetro, this.game_board);
        this.displayBoard(this.game_board);
        
        
    }

    displayBoard(game_board) {
        // Clear the game board container before rendering
        const boardElem = document.getElementById("game_board");
        if (boardElem) boardElem.innerHTML = "";

        for (let i = 0; i < this.MAX_HEIGHT; i++) {
            for (let j = 0; j < this.MAX_WIDTH; j++) {
                const s = game_board[i][j];
                if (s === 0) continue; // Only render non-zero cells

                let color = '';
                switch (s) {
                    case 1:
                        color = this.Tetromino.tetro_O().color;
                        break;
                    case 2:
                        color = this.Tetromino.tetro_I().color;
                        break;
                    case 3:
                        color = this.Tetromino.tetro_J().color;
                        break;
                    case 4:
                        color = this.Tetromino.tetro_L().color;
                        break;
                    case 5:
                        color = this.Tetromino.tetro_S().color;
                        break;
                    case 6:
                        color = this.Tetromino.tetro_T().color;
                        break;
                    case 7:
                        color = this.Tetromino.tetro_Z().color;
                        break;
                    default:
                        color = "#222"; // fallback color for unknown
                        break;
                }
                this.displayTetro(color, i, j);
            }
        }
    }
    
    

    insertTetro = (tetro, game_board) => {
        for (let i = 0; i < tetro.shape.length; i++){
            for (let j = 0; j < tetro.shape[i].length; j++){
                if (tetro.shape[i][j] != 0){
                    game_board[i + tetro.position.y][j + tetro.position.x] = tetro.shape[i][j];
                }
            }
        }
        return game_board;
    }

    displayTetro = (color, row, col) => {
        const block = document.createElement("div");
        block.classList.add("tetro");
        block.style.backgroundColor = color;
        block.style.width = "30px";
        block.style.height = "30px";
        block.style.margin = "1px";
        block.style.border="2px solid black";
        block.style.boxSizing = "border-box";
        block.style.position = "absolute";
        block.style.left = `${col * 30}px`;
        block.style.top = `${row * 30}px`;
        block.setAttribute("id", `tetro-${row}-${col}`);
        const boardElem = document.getElementById("game_board");
        boardElem.appendChild(block);
    }

    updateBoard() {
        
    }

    updateScore() {
    }

    updateLives() {
    }

    updateLevel() {
    }

    updateGameSpeed() {
    }


    displayStats() {    
    }


}
