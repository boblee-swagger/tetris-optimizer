import Tetromino from "./tetrominos.js";
import Render from "./render.js";
import Move from "./utils.js";
import Controls from "./controls.js";


const MAX_WIDTH = 10;
const MAX_HEIGHT = 20;

export default class Game extends HTMLElement{
    constructor(){
        super();
        this.game_board = Array(MAX_HEIGHT).fill(null).map(() => Array(MAX_WIDTH).fill(0));

        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.time = 0;
        this.gameSpeed = 1;
        this.gameOver = false;
        this.gamePaused = false;
        this.gameStarted = false;

        this.Tetromino = new Tetromino();
        this.Utils = new Move();
        this.Render = new Render(this.game_board);
        this.Controls = new Controls();
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
        this.game_board = Array(MAX_HEIGHT).fill(null).map(() => Array(MAX_WIDTH).fill(0));
    }
    
    startGame = () => {
        this.initBoard();  
        this.gameStarted = true;
        
        const tetro = this.Tetromino.generateTetro();
        this.game_board = this.Utils.insertTetro(tetro, this.game_board);
        this.Render.displayNextTetro(tetro, "random_pieces");
        this.Render.displayBoard("game_board");
        
    }

    displayStats() {    
    }

}

export {MAX_WIDTH, MAX_HEIGHT};