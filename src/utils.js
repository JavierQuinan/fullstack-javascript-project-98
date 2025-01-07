import readlineSync from 'readline-sync';

/**
 * Genera un número aleatorio entre min y max.
 */
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Calcula el Máximo Común Divisor usando el Algoritmo de Euclides.
 */
export const findGCD = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

/**
 * Genera una progresión aritmética con un número oculto.
 */
export const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    const hiddenIndex = getRandomNumber(0, length - 1);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return { progression, hiddenNumber };
};

/**
 * Verifica si un número es primo.
 */
export const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

/**
 * Juego: ¿Es Primo?
 */
export const runPrimeGame = () => {
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

/**
 * Juego: Máximo Común Divisor
 */
export const runGCDGame = () => {
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

/**
 * Juego: Progresión Aritmética
 */
export const runProgressionGame = () => {
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

