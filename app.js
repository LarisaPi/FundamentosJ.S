// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightball = () => {
    // TODO
    // crear numero aleatorio (0-8)
    // switch/case para mensajes distintos
    const phrase = Math.floor(Math.random() * 8);
    switch(phrase){
        case 0:
    message.innerText = "Compra un café"
    break;
    case 1:
    message.innerText = "Duerme bien"
    break;
    case 2:
    message.innerText = "Come bien "
    break;
    case 3:
    message.innerText = "Haz ejercicio"
    break;
    case 4:
    message.innerText = "Echate un baño"
    break;
    case 5:
    message.innerText = "Cuida el agua"
    break;
    case 6:
    message.innerText = "Estudia"
    break;
    case 7:
    message.innerText = "Aprende"
    break;
    }
}

ball.addEventListener('click', eightball);

