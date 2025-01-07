import readlineSync from 'readline-sync';
import askUserName from './cli.js';
import { showWinMessage, showLoseMessage, showWelcomeMessage } from './messages.js';
import { getRandomNumber } from './utils.js';

/**
 * Determina si un número es par.
 * @param {number} num - Número a evaluar.
 * @returns {boolean} Verdadero si es par, falso si es impar.
 */
const isEven = (num) => num % 2 === 0;

/**
 * Juego de números pares (modularizado).
 */
const startEvenGame = () => {
  const userName = askUserName();
  showWelcomeMessage(userName);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Pregunta: ${randomNumber}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      showLoseMessage();
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return; // Sale del juego si la respuesta es incorrecta
    }
  }

  showWinMessage();
  console.log(`¡Felicidades, ${userName}!`);
};

export default startEvenGame;
