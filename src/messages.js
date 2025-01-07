// src/messages.js

/**
 * Muestra un mensaje de bienvenida con el nombre del usuario.
 * @param {string} name - El nombre del usuario.
 */
export const showWelcomeMessage = (name) => {
    console.log(`¡Hola, ${name}! Bienvenido al juego.`);
};

/**
 * Muestra un mensaje de victoria.
 */
export const showWinMessage = () => {
    console.log('¡Ganaste! 🎉');
};

/**
 * Muestra un mensaje de derrota.
 */
export const showLoseMessage = () => {
    console.log('Lo siento, perdiste. 😢');
};
