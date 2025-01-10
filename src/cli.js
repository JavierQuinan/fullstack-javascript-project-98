// src/cli.js
import readlineSync from 'readline-sync';

const askUserName = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    return userName;
};

export default askUserName;

