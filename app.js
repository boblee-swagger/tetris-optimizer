import Game from './data/game.js'

customElements.define('tetris-game', Game);

window.addEventListener('load', () => {
const tetrisGameElement = document.querySelector('tetris-game');
tetrisGameElement.startGame();
});
