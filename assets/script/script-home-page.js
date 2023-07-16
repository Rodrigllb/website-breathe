const startButton = document.getElementById('img-button-start');
const elementBreathe = document.getElementById('animation-element-circle');
const textElement = document.getElementById('text-element');

function ButtonCLicking(){
    
    textElement.style.display = 'none';/*Retiro o texto "Just breathe" */
    elementBreathe.style.display ='flex';/*Exibo a animação*/
}


startButton.addEventListener('click', ButtonCLicking);/*Quando clicar o botão em imagem ele chama a função especifica. */
