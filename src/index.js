import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

/**
 * Ejecuta un juego de Brain Games.
 * @param {string} gameDescription - Descripción del juego.
 * @param {Function} generateRound - Función que genera una ronda del juego.
 */
const runGame = (gameDescription, generateRound) => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!\n`);
  console.log(gameDescription);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default runGame;
