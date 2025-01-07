// @ts-check
import readlineSync from 'readline-sync';

/**
 * Solicita el nombre del usuario y lo retorna.
 * @returns {string} - El nombre del usuario ingresado.
 */
const askUserName = () => {
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    return name;
};

export default askUserName;
