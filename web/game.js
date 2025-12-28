// Estado del juego
let playerName = '';
let currentGame = '';
let currentQuestion = 0;
let correctAnswers = 0;
let currentAnswer = '';
let questions = [];

// Juegos disponibles
const games = {
    even: {
        title: '🎲 Brain Even',
        instructions: 'Responde "yes" si el número es par, de lo contrario responde "no"',
        generateQuestion: () => {
            const num = Math.floor(Math.random() * 100) + 1;
            return {
                question: num,
                answer: num % 2 === 0 ? 'yes' : 'no'
            };
        }
    },
    calc: {
        title: '🧮 Brain Calc',
        instructions: 'Resuelve la operación matemática',
        generateQuestion: () => {
            const num1 = Math.floor(Math.random() * 50) + 1;
            const num2 = Math.floor(Math.random() * 50) + 1;
            const operations = ['+', '-', '*'];
            const op = operations[Math.floor(Math.random() * operations.length)];
            
            let answer;
            let question = `${num1} ${op} ${num2}`;
            
            switch(op) {
                case '+': answer = num1 + num2; break;
                case '-': answer = num1 - num2; break;
                case '*': answer = num1 * num2; break;
            }
            
            return { question, answer: answer.toString() };
        }
    },
    gcd: {
        title: '🔢 Brain GCD',
        instructions: 'Encuentra el máximo común divisor de los dos números',
        generateQuestion: () => {
            const num1 = Math.floor(Math.random() * 50) + 10;
            const num2 = Math.floor(Math.random() * 50) + 10;
            
            const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
            
            return {
                question: `${num1} ${num2}`,
                answer: gcd(num1, num2).toString()
            };
        }
    },
    progression: {
        title: '📊 Brain Progression',
        instructions: 'Encuentra el número que falta en la progresión',
        generateQuestion: () => {
            const start = Math.floor(Math.random() * 20) + 1;
            const step = Math.floor(Math.random() * 5) + 2;
            const length = 10;
            const hiddenIndex = Math.floor(Math.random() * length);
            
            let progression = [];
            for (let i = 0; i < length; i++) {
                progression.push(start + step * i);
            }
            
            const answer = progression[hiddenIndex];
            progression[hiddenIndex] = '..';
            
            return {
                question: progression.join(' '),
                answer: answer.toString()
            };
        }
    },
    prime: {
        title: '🔍 Brain Prime',
        instructions: 'Responde "yes" si el número es primo, de lo contrario responde "no"',
        generateQuestion: () => {
            const num = Math.floor(Math.random() * 100) + 2;
            
            const isPrime = (n) => {
                if (n < 2) return false;
                for (let i = 2; i <= Math.sqrt(n); i++) {
                    if (n % i === 0) return false;
                }
                return true;
            };
            
            return {
                question: num,
                answer: isPrime(num) ? 'yes' : 'no'
            };
        }
    }
};

// Navegación entre pantallas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Iniciar juego
function startGame() {
    playerName = document.getElementById('player-name').value.trim();
    
    if (!playerName) {
        alert('Por favor, ingresa tu nombre');
        return;
    }
    
    document.getElementById('greeting-name').textContent = playerName;
    showScreen('game-selection');
}

// Seleccionar juego
function selectGame(gameType) {
    currentGame = gameType;
    currentQuestion = 0;
    correctAnswers = 0;
    questions = [];
    
    // Generar 3 preguntas
    for (let i = 0; i < 3; i++) {
        questions.push(games[gameType].generateQuestion());
    }
    
    // Configurar pantalla de juego
    document.getElementById('game-title').textContent = games[gameType].title;
    document.getElementById('game-instructions').textContent = games[gameType].instructions;
    
    showScreen('game-screen');
    showQuestion();
}

// Mostrar pregunta
function showQuestion() {
    if (currentQuestion >= 3) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestion];
    
    document.getElementById('question-number').textContent = `${currentQuestion + 1}/3`;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    
    // Actualizar barra de progreso
    const progress = ((currentQuestion) / 3) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    // Focus en input
    document.getElementById('answer-input').focus();
    
    currentAnswer = question.answer;
}

// Enviar respuesta
function submitAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
    
    if (!userAnswer) {
        alert('Por favor, ingresa una respuesta');
        return;
    }
    
    if (userAnswer === currentAnswer.toLowerCase()) {
        correctAnswers++;
        feedback.textContent = '¡Correcto! ✓';
        feedback.classList.add('correct');
    } else {
        feedback.textContent = `Incorrecto ✗ La respuesta correcta era: ${currentAnswer}`;
        feedback.classList.add('incorrect');
    }
    
    feedback.classList.add('show');
    
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 2000);
}

// Permitir enter para enviar
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (document.getElementById('welcome-screen').classList.contains('active')) {
            startGame();
        } else if (document.getElementById('game-screen').classList.contains('active')) {
            submitAnswer();
        }
    }
});

// Mostrar resultados
function showResults() {
    const percentage = (correctAnswers / 3) * 100;
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    
    if (correctAnswers === 3) {
        resultIcon.textContent = '🎉';
        resultTitle.textContent = `¡Felicidades, ${playerName}!`;
        resultMessage.textContent = '¡Perfecto! Has respondido todas las preguntas correctamente.';
    } else if (correctAnswers >= 2) {
        resultIcon.textContent = '👍';
        resultTitle.textContent = '¡Buen trabajo!';
        resultMessage.textContent = `${playerName}, lo hiciste muy bien. Sigue practicando.`;
    } else {
        resultIcon.textContent = '💪';
        resultTitle.textContent = 'Sigue intentando';
        resultMessage.textContent = `${playerName}, la práctica hace al maestro. ¡Inténtalo de nuevo!`;
    }
    
    document.getElementById('final-correct').textContent = correctAnswers;
    
    // Completar barra de progreso
    document.getElementById('progress-fill').style.width = '100%';
    
    showScreen('result-screen');
}

// Volver a selección
function backToSelection() {
    showScreen('game-selection');
}

// Reiniciar juego
function restartGame() {
    selectGame(currentGame);
}
