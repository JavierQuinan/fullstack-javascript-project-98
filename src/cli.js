// @ts-check
import readlineSync from 'readline-sync';

/**
 * Función para saludar al usuario
 */

const askUserName = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
};

export default askUserName;
