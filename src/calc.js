import runGame from './index.js';
import { getRandomNumber } from './utils.js';

const gameDescription = '¿Cuál es el resultado de la expresión?';

const operators = ['+', '-', '*'];

/**
 * Calcula el resultado de la operación entre dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @param {string} operator - Operador matemático.
 * @returns {number} El resultado de la operación.
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
 * @returns {[string, string]} Una pregunta y la respuesta correcta.
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
