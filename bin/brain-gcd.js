#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { findGCD, getRandomNumber } from '../src/utils.js';

/**
 * Juego: Máximo Común Divisor (GCD)
 */
const runGCDGame = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('Encuentra el máximo común divisor de los siguientes números.');

    const roundsToWin = 3;
    let correctAnswers = 0;

    while (correctAnswers < roundsToWin) {
        const num1 = getRandomNumber(1, 100);
        const num2 = getRandomNumber(1, 100);
        console.log(`Pregunta: ${num1} ${num2}`);
        const correctAnswer = findGCD(num1, num2);
        const userAnswer = readlineSync.question('Tu respuesta: ');

        if (parseInt(userAnswer, 10) === correctAnswer) {
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

runGCDGame();
