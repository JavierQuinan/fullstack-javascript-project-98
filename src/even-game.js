import runGame from './index.js'; // Cambiado de { runGame } a runGame
import { getRandomNumber } from './utils.js';

const gameDescription = 'Responde "yes" si el número es par, de lo contrario responde "no".';

/**
 * Genera una ronda del juego "Par o Impar".
 * @returns {[string, string]} Una pregunta y la respuesta correcta.
 */
const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

/**
 * Inicia el juego "Par o Impar".
 */
const startEvenGame = () => {
  runGame(gameDescription, generateRound);
};

export default startEvenGame;
