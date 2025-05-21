import Tetromino from "./tetrominos.js";
import { MAX_WIDTH, MAX_HEIGHT } from "./game.js";

class Render {
    constructor(game_board){
        this.Tetromino = new Tetromino();
        this.game_board = game_board;
    }
    
    displayBoard(docID) {
        // Clear the game board container before rendering
        const boardElem = document.getElementById(docID);
        if (boardElem) boardElem.innerHTML = "";

        for (let i = 0; i < MAX_HEIGHT; i++) {
            for (let j = 0; j < MAX_WIDTH; j++) {
                const s = this.game_board[i][j];
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
                this.displayTetro(color, i, j, docID);
            }
        }
    }

    displayTetro = (color, row, col, docID) => {
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
        const boardElem = document.getElementById(docID);
        boardElem.appendChild(block);
    }

    displayNextTetro(tetro, docID){
        for (let i = 0; i < tetro.shape.length; i++){
            for (let j = 0; j < tetro.shape[i].length; j++){
                if (tetro.shape[i][j] != 0){
                    this.displayTetro(tetro.color, i, j, docID);
                }
            }
        }
    }
}

export default Render;
