import { runGame } from './index.js';

const gameDescription = '¿Cuál es el resultado de la expresión?';

/**
 * Genera un número aleatorio entre min y max.
 */
const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const operators = ['+', '-', '*'];

/**
 * Calcula el resultado de la operación entre dos números.
 */
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

/**
 * Genera una ronda del juego.
 */
const generateRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

/**
 * Ejecuta el juego de cálculo.
 */
const runCalcGame = () => {
  runGame(gameDescription, generateRound);
};

export default runCalcGame;
