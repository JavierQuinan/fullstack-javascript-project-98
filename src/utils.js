import readlineSync from "readline-sync";
import { showWinMessage, showLoseMessage } from "./messages.js";

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
    if (num % i === 0) {
      return false;
    }
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
  progression[hiddenIndex] = "..";
  return { progression, hiddenNumber };
};

/**
 * Valida la respuesta del usuario y muestra el resultado.
 */
const validateAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer.toString() === correctAnswer.toString()) {
    console.log("¡Correcto!");
    return true;
  }
  console.log(
    `'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.`
  );
  showLoseMessage();
  return false;
};

/**
 * Juego: Máximo Común Divisor
 */
export const runGCDGame = () => {
  console.log("¡Bienvenido a Brain Games!");
  const userName = readlineSync.question("¿Cuál es tu nombre? ");
  console.log(`¡Hola, ${userName}!\n`);
  console.log("Encuentra el máximo común divisor de los números dados.");

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    console.log(`Pregunta: ${num1} ${num2}`);
    const correctAnswer = findGCD(num1, num2);
    const userAnswer = readlineSync.question("Tu respuesta: ");

    if (isNaN(userAnswer)) {
      console.log(
        `'${userAnswer}' no es un número válido. Por favor, intenta de nuevo.`
      );
      continue;
    }

    if (validateAnswer(userAnswer, correctAnswer)) {
      correctAnswers += 1;
    } else {
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${userName}!`);
};

/**
 * Juego: ¿Es Primo?
 */
export const runPrimeGame = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!\n`);
    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
  
    const roundsToWin = 3;
    let correctAnswers = 0;
  
    while (correctAnswers < roundsToWin) {
      const number = getRandomNumber(1, 100);
      console.log(`Pregunta: ${number}`);
      const correctAnswer = isPrime(number) ? 'yes' : 'no';
      const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();
  
      if (userAnswer !== 'yes' && userAnswer !== 'no') {
        console.log(`'${userAnswer}' no es una respuesta válida. Por favor, responde "yes" o "no".`);
        continue;
      }
  
      if (userAnswer === correctAnswer) {
        console.log('¡Correcto!');
        correctAnswers += 1;
      } else {
        console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.`);
        console.log(`¡Intentémoslo de nuevo, ${userName}!`);
        return;
      }
    }
    console.log(`¡Felicidades, ${userName}!`);
  };  

/**
 * Juego: Progresión Aritmética
 */
export const runProgressionGame = () => {
  console.log("¡Bienvenido a Brain Games!");
  const userName = readlineSync.question("¿Cuál es tu nombre? ");
  console.log(`¡Hola, ${userName}!\n`);
  console.log("¿Qué número falta en la progresión?");

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(1, 10);
    const length = 10;
    const { progression, hiddenNumber } = generateProgression(
      start,
      step,
      length
    );

    console.log(`Pregunta: ${progression.join(" ")}`);
    const userAnswer = readlineSync.question("Tu respuesta: ");

    if (isNaN(userAnswer)) {
      console.log(
        `'${userAnswer}' no es un número válido. Por favor, intenta de nuevo.`
      );
      continue;
    }

    if (validateAnswer(userAnswer, hiddenNumber)) {
      correctAnswers += 1;
    } else {
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${userName}!`);
};
