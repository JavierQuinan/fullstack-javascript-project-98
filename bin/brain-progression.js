#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateProgression, getRandomNumber } from '../src/utils.js';

/**
 * Juego: Progresión Aritmética
 */
const runProgressionGame = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('¿Puedes adivinar el número faltante en la progresión?');

    const roundsToWin = 3;
    let correctAnswers = 0;

    while (correctAnswers < roundsToWin) {
        const start = getRandomNumber(1, 20);
        const step = getRandomNumber(1, 10);
        const length = 10;
        const { progression, hiddenNumber } = generateProgression(start, step, length);

        console.log(`Pregunta: ${progression.join(' ')}`);
        const userAnswer = readlineSync.question('Tu respuesta: ');

        if (parseInt(userAnswer, 10) === hiddenNumber) {
            console.log('¡Correcto!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${hiddenNumber}'.`);
            console.log(`¡Inténtalo de nuevo, ${userName}!`);
            return;
        }
    }
    console.log(`¡Felicidades, ${userName}! Has ganado.`);
};

runProgressionGame();
