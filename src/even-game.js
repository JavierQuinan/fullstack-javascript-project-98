import { runGame } from './index.js';
import { getRandomNumber } from './utils.js';

const gameDescription = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const generateRound = () => {
    const number = getRandomNumber(1, 100);
    const question = `${number}`;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
};

const startEvenGame = () => {
    runGame(gameDescription, generateRound);
};

export default startEvenGame;
