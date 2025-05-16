class game {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.time = 0;
        this.gameSpeed = 1;
        this.gameOver = false;
        this.gamePaused = false;
        this.gameStarted = false;
    }

    tetro_O() {
        return {
            shape: [
                [1, 1],
                [1, 1],
            ],
            color: "#ffec33",
        };
    }
    tetro_I() {
        return {
            shape: [
                [1, 1, 1, 1],
            ],
            color: "#a1fbff",
        };
    }
    tetro_J() {
        return {
            shape: [
                [0, 1],
                [0, 1],
                [1, 1],
            ],
            color: "#0f3dfa",
        };
    }
    tetro_L() {
        return {
            shape: [
                [1, 0],
                [1, 0],
                [1, 1],
            ],
            color: "#f79600",
        };
    }
    tetro_S() {
        return {
            shape: [
                [1, 1, 0],
                [0, 1, 1],
            ],
            color: "#00ff8c",
        };
    }
    tetro_T() {
        return {
            shape: [
                [1, 1, 1],
                [0, 1, 0],
            ],
            color: "#00ffff",
        };
    }
    tetro_Z() {
        return {
            shape: [
                [0, 1, 1],
                [1, 1, 0],
            ],
            color: "#ff00ff",
        };
    }
}

const game = new game();