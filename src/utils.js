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

// Genera una progresión aritmética con un número oculto
export const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }

    const hiddenIndex = getRandomNumber(0, length - 1); // Índice del número oculto
    const hiddenNumber = progression[hiddenIndex]; // Número oculto
    progression[hiddenIndex] = '..'; // Reemplaza el número con '..'

    return { progression, hiddenNumber }; // Retorna la progresión y el número oculto
};
