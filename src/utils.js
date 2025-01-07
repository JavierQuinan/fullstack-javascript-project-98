// src/utils.js

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
