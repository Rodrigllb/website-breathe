const startButton = document.getElementById('img-button-start');
const elementBreathe = document.getElementById('animation-element-circle');
const textElement = document.getElementById('text-element');

function ButtonCLicking(){
    textElement.style.display = 'none';
    elementBreathe.style.display ='flex';
}


startButton.addEventListener('click', ButtonCLicking);
