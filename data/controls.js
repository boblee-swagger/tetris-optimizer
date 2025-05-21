class Controls {

    constructor() {
    }

    canTetroMoveLeft() {
        for (let i = 0; i < this.tetro.shape.length; i++) { 
            for (let j = 0; j < this.tetro.shape[i].length; j++) {
                if (this.game_board[this.tetro.position.y + i][this.tetro.position.x + j] !== 0){
                    return false;
                }
            }
        }
        return true;
    }

    canTetroMoveRight(tetro) {   
    }

    canTetroMoveDown(tetro) {   
    }
}

export default Controls;

