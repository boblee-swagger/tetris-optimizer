class Utils{
    constructor(){
    }

    updateScore() {
    }
    
    updateLives() {
    }
    
    updateLevel() {
    }
    
    updateGameSpeed() {
    }
    
    updateBoard() {
    }
    
    rotate(tetro) {
        const original = tetro.shape.map(row => [...row]);
        const newRows = original[0].length;
        const newCols = original.length;
        
        // Create a new shape array with correct dimensions
        tetro.shape = Array(newRows).fill().map(() => Array(newCols).fill(0));
        
        for (let i = 0; i < newRows; i++) {
          for (let j = 0; j < newCols; j++) {
            tetro.shape[i][j] = original[newCols - 1 - j][i];
          }
        }
        return tetro;
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

    moveLeft(tetro) {
    }

    moveRight(tetro) {
    }

    moveDown(tetro) { 
    }
}

export default Utils;
