#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber, generateProgression } from '../src/utils.js';

const playBrainProgression = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('¿Qué número falta en la progresión?');

    let correctAnswers = 0;
    const rounds = 3;

    while (correctAnswers < rounds) {
        const progressionLength = getRandomNumber(5, 10); // Longitud aleatoria entre 5 y 10
        const start = getRandomNumber(1, 50); // Primer número de la progresión
        const step = getRandomNumber(1, 10); // Paso de la progresión
        const { progression, hiddenNumber } = generateProgression(start, step, progressionLength);

        console.log(`Pregunta: ${progression.join(' ')}`);
        const userAnswer = parseInt(readlineSync.question('Tu respuesta: '), 10);

        if (userAnswer === hiddenNumber) {
            console.log('¡Correcto!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${hiddenNumber}'.`);
            console.log(`¡Intentémoslo de nuevo, ${userName}!`);
            return;
        }
    }

    console.log(`¡Felicidades, ${userName}!`);
};

playBrainProgression();
