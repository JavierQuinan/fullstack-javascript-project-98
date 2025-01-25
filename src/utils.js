import runGame from './index.js';
import { showLoseMessage, showWinMessage } from './messages.js';

/**
 * Genera un número aleatorio entre min y max.
 */
export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Calcula el Máximo Común Divisor usando el Algoritmo de Euclides.
 */
export const findGCD = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

/**
 * Verifica si un número es primo.
 */
export const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Genera una progresión aritmética con un número oculto.
 */
export const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenIndex = getRandomNumber(0, length - 1);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenNumber };
};

/**
 * Valida la respuesta del usuario.
 */
export const validateAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer.toString() === correctAnswer.toString()) {
    console.log('¡Correcto!');
    return true;
  }
  console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.`);
  showLoseMessage();
  return false;
};

/**
 * Juego: Máximo Común Divisor.
 */
export const runGCDGame = () => {
  const gameDescription = 'Encuentra el máximo común divisor de los números dados.';
  const generateRound = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = findGCD(num1, num2).toString();
    return [`${num1} ${num2}`, correctAnswer];
  };

  runGame(gameDescription, generateRound);
  showWinMessage();
};

/**
 * Juego: ¿Es Primo?
 */
export const runPrimeGame = () => {
  const gameDescription = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
  const generateRound = () => {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [number.toString(), correctAnswer];
  };

  runGame(gameDescription, generateRound);
  showWinMessage();
};

/**
 * Juego: Progresión Aritmética.
 */
export const runProgressionGame = () => {
  const gameDescription = '¿Qué número falta en la progresión?';
  const generateRound = () => {
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(1, 10);
    const length = 10;
    const { progression, hiddenNumber } = generateProgression(start, step, length);
    return [progression.join(' '), hiddenNumber.toString()];
  };

  runGame(gameDescription, generateRound);
  showWinMessage();
};
