const startButton = document.getElementById('img-button-start');/*Botão de iniciar a animação */
const stopButton = document.getElementById('img-button-stop');/*Botão de parar a animação. */
const elementBreathe = document.getElementById('animation-element-circle');/*Elemento da animação. */


function startButtonCLicking(){
    elementBreathe.style.display ='flex';/*Exibo a animação*/
    startButton.style.display = "none";/*Escondo o botão de iniciar*/
    stopButton.style.display = "flex";/*Exibo o botão de parar */
    
}
function stopButtonClicking(){
    elementBreathe.style.display ='none';/*Retiro a animação*/
    startButton.style.display = "flex"; /*Exibo novamente o botão de iniciar*/
    stopButton.style.display = "none";/*Escondo o botão de stop*/
}

startButton.addEventListener('click', startButtonCLicking);/*Quando clicar o botão em imagem ele chama a função especifica.*/
stopButton.addEventListener('click', stopButtonClicking);/*Quando clicar o botão de stop, chamar a função de pausa.*/
