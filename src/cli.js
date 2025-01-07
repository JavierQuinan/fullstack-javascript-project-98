// src/cli.js
import readlineSync from 'readline-sync';

/**
 * Solicita el nombre del usuario y lo retorna.
 * @returns {string} - El nombre ingresado por el usuario.
 */
const askUserName = () => {
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    return userName;
};

export default askUserName;

