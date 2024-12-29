#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber, findGCD } from '../src/utils.js';

const playBrainGCD = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('Encuentra el máximo común divisor de los números dados.');

    let correctAnswers = 0;
    const rounds = 3;

    while (correctAnswers < rounds) {
        const num1 = getRandomNumber(1, 100);
        const num2 = getRandomNumber(1, 100);
        const correctAnswer = findGCD(num1, num2);

        console.log(`Pregunta: ${num1} ${num2}`);
        const userAnswer = parseInt(readlineSync.question('Tu respuesta: '), 10);

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

playBrainGCD();
