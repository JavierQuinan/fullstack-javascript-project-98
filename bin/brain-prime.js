#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isPrime, getRandomNumber } from '../src/utils.js';

/**
 * Juego: ¿Es Primo?
 */
const runPrimeGame = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('Responde "yes" si el número es primo, de lo contrario responde "no".');

    const roundsToWin = 3;
    let correctAnswers = 0;

    while (correctAnswers < roundsToWin) {
        const number = getRandomNumber(1, 100);
        console.log(`Pregunta: ${number}`);
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

        if (userAnswer === correctAnswer) {
            console.log('¡Correcto!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Inténtalo de nuevo, ${userName}!`);
            return;
        }
    }
    console.log(`¡Felicidades, ${userName}! Has ganado.`);
};

runPrimeGame();
