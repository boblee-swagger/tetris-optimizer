import Tetromino from "./data/tetrominos.js";
const tetromino = new Tetromino();

// Create a single tetromino instance
let tetro = tetromino.tetro_Z();
console.log("Original shape:");
console.log(tetro.shape);

// First rotation (90°)
tetromino.rotate(tetro);
console.log("After 1st rotation (90°):");
console.log(tetro.shape);

// Second rotation (180° from original)
tetromino.rotate(tetro);
console.log("After 2nd rotation (180° from original):");
console.log(tetro.shape);

// Third rotation (270° from original)
tetromino.rotate(tetro);
console.log("After 3rd rotation (270° from original):");
console.log(tetro.shape);