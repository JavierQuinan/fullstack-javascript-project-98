import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const startEvenGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${randomNumber}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default startEvenGame;
