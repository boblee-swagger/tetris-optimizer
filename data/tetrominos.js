class Tetromino {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }

    tetro_O = () => {
        return new Tetromino([
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0],
            ],
            "#ffec33");
    }
    tetro_I = () => {
        return new Tetromino([
                [0,0,0,1],
                [0,0,0,1],
                [0,0,0,1],
                [0,0,0,1],
            ],
            "#a1fbff");
    }
    tetro_J = () => {
        return new Tetromino([
            [0,0,0,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,1,1,0],
            ],
            "#0f3dfa");
    }
    tetro_L = () => {
        return new Tetromino([
                [0,0,0,0],
                [1,0,0,0],
                [1,0,0,0],
                [1,1,0,0],
            ],
            "#f79600");
    }
    tetro_S = () => {
        return new Tetromino([
                [0,0,0,0],
                [0,1,1,0],
                [0,0,1,1],
                [0,0,0,0],
            ],
            "#00ff8c");
    }
    tetro_T = () => {
        return new Tetromino([
                [1,1,1,0],
                [0,1,0,0],
                [0,1,0,0],
                [0,0,0,0],
            ],
            "#00ffff");
    }
    tetro_Z = () => {
        return new Tetromino([
                [0,0,0,0],
                [0,0,1,1],
                [0,1,1,0],
                [0,0,0,0],
            ],
            "#ff00ff");
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
}

export default Tetromino;