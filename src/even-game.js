// src/even-game.js
import askUserName from './cli.js';
import { showWinMessage, showLoseMessage } from './messages.js';
import { getRandomNumber } from './utils.js';

/**
 * Juego: ¿Es Par?
 */
const startEvenGame = () => {
    const userName = askUserName();
    console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

    const roundsToWin = 3;
    let correctAnswers = 0;

    while (correctAnswers < roundsToWin) {
        const randomNumber = getRandomNumber(1, 100);
        console.log(`Pregunta: ${randomNumber}`);
        const isEven = randomNumber % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';
        const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

        if (userAnswer === correctAnswer) {
            console.log('¡Correcto!');
            correctAnswers += 1;
        } else {
            showLoseMessage();
            return;
        }
    }

    showWinMessage();
};

export default startEvenGame;
