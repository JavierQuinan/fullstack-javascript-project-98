#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber, isPrime } from '../src/utils.js';

const playBrainPrime = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

    let correctAnswers = 0;
    const rounds = 3;

    while (correctAnswers < rounds) {
        const number = getRandomNumber(1, 100);
        console.log(`Pregunta: ${number}`);
        const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

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

playBrainPrime();
