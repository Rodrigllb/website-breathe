const startButton = document.getElementById('img-button-start');
const stopButton = document.getElementById('img-button-stop');
const elementBreathe = document.getElementById('animation-element-circle');
const textElement = document.getElementById('text-element');

function startButtonCLicking(){
    textElement.style.display = 'none';/*Retiro o texto "Just breathe" */
    elementBreathe.style.display ='flex';/*Exibo a animação*/
    startButton.style.display = "none";/*Escondo o botão de iniciar*/
    stopButton.style.display = "flex";/*Exibo o botão de parar */
}
function stopButtonClicking(){
    textElement.style.display = 'flex';/*Exibo o texto "Just breathe" */
    elementBreathe.style.display ='none';/*Retiro a animação*/
    startButton.style.display = "flex"; /*Exibo novamente o botão de iniciar*/
    stopButton.style.display = "none";/*Escondo o botão de stop*/
}


startButton.addEventListener('click', startButtonCLicking);/*Quando clicar o botão em imagem ele chama a função especifica. */
stopButton.addEventListener('click', stopButtonClicking);
