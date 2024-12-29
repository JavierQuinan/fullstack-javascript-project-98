// Genera un número aleatorio entre min y max
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Calcula el MCD usando el algoritmo de Euclides
export const findGCD = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};
