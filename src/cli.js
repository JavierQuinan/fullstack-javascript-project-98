// @ts-check
import readlineSync from 'readline-sync';


/** 
 * Función para saludar al usuario
 */

 const greetUser = () => {
      console.log('¡Bienvenido a Brian Games!');
      const name = readlineSync.question('¿Cuál es tu nomnbre? ');
      console.log(' ¡Hola, ${name}!');
};

export default greetUser;

