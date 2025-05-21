class Tetromino{
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
        this.position = {x : 0, y : 0};
    }

    tetro_O = () => {
        return new Tetromino([
                [1,1],
                [1,1],
            ],
            "#ffec33");
            {5, 3};
    }
    tetro_I = () => {
        return new Tetromino([
                [2,2,2,2],
            ],
            "#a1fbff");
            {0, 0};

    }
    tetro_J = () => {
        return new Tetromino([
                [3,3,3],
                [0,3,0],
            ],
            "#0f3dfa");
            {0, 0};

    }
    tetro_L = () => {
        return new Tetromino([
                [0,4],
                [0,4],
                [4,4],
            ],
            "#f79600");
            {0, 0};

    }
    tetro_S = () => {
        return new Tetromino([
                [0,5,5],
                [5,5,0],
            ],
            "#00ff8c");
            {0, 0};

    }
    tetro_T = () => {
        return new Tetromino([
                [6,0],
                [6,0],
                [6,6],
            ],
            "#00ffff");
            {0, 0};

    }
    tetro_Z = () => {
        return new Tetromino([
                [0,7,7],
                [7,7,0],
            ],
            "#ff00ff");
            {0, 0};
    }
    //generate a random tetromino from the between the seven tetrominos
    generateTetro = () => {
        let num = Math.ceil(Math.random() * 7);
        
        switch (num) {
            case 1:
                return this.tetro_I();
            case 2: 
                return this.tetro_J();
            case 3:
                return this.tetro_L();
            case 4:
                return this.tetro_O();
            case 5:
                return this.tetro_S();
            case 6:
                return this.tetro_T();
            case 7:
                return this.tetro_Z();
        }
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

    moveLeft(tetro) {
       
    }

    moveRight(tetro) {
        
    }

    moveDown(tetro) {
      
    }

    

}

export default Tetromino;