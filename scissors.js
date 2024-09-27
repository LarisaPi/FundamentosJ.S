const btnPlay = document.getElementById('playBtn');
const resultDiv = document.getElementById('result');
const compuChoiceImg = document.getElementById('compuChoice');
const userSelectionImg = document.getElementById('piedratijeraspapel');

let userChoice = '';

// Obtener todas las opciones de selección
const choices = document.querySelectorAll('.choice');

// Deshabilitar las opciones inicialmente
choices.forEach(choice => {
    choice.classList.add('disabled'); // Añade clase para deshabilitar
});

// Evento para el botón de juego
btnPlay.addEventListener('click', () => {
    // Habilitar las elecciones al hacer clic en el botón
    choices.forEach(choice => {
        choice.classList.remove('disabled');
        choice.addEventListener('click', () => {
            userChoice = choice.dataset.choice; // Guarda la elección del usuario
            userSelectionImg.src = `./imagenes/${userChoice}.jpg`;
            userSelectionImg.style.display = 'block';

            const compuChoice = getComputerChoice();
            compuChoiceImg.src = `./imagenes/${compuChoice}.jpg`;
            compuChoiceImg.style.display = 'block';

            const result = determineWinner(userChoice, compuChoice);
            resultDiv.textContent = `Tú elegiste: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}. Computadora eligió: ${compuChoice.charAt(0).toUpperCase() + compuChoice.slice(1)}. ${result}`;
            
            // Deshabilitar las opciones nuevamente después de hacer la elección
            choices.forEach(choice => {
                choice.classList.add('disabled');
            });
        });
    });
});

// Función para obtener una elección aleatoria de la computadora
function getComputerChoice() {
    const options = ['piedra', 'papel', 'tijeras'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Función para determinar el ganador
function determineWinner(user, computer) {
    if (user === computer) {
        return "¡Es un empate!";
    } else if (
        (user === 'piedra' && computer === 'tijeras') ||
        (user === 'tijeras' && computer === 'papel') ||
        (user === 'papel' && computer === 'piedra')
    ) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}
