const startButton = document.querySelector('.img-button-start');/*Botão de iniciar a animação */

const stopButton = document.querySelector('.img-button-stop');/*Botão de parar a animação. */

const elementBreathe = document.querySelector('.animation-element-circle');/*Elemento da animação. */

const soundRainButton = document.querySelector('.StartRainSound');/*Botão para iniciar um som de chuva ao fundo.*/

const stopRainSong = document.querySelector('.stopRainSound');/*Botão de parar som de chuva.*/

const elementPanelAudio = document.querySelector('.element-audio');/*Painel de audio.*/

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
function soundRainClicking(){
    elementPanelAudio.style.display = 'flex';/*Mostro o player de musica.*/
    soundRainButton.style.display = 'none';
    stopRainSong.style.display = 'flex';
}
function stopRainClicking(){
    elementPanelAudio.style.display = 'none';/*Mostro o player de musica.*/
    soundRainButton.style.display = 'flex';
    stopRainSong.style.display = 'none';
}

startButton.addEventListener('click', startButtonCLicking);/*Quando clicar o botão em imagem ele chama a função especifica.*/
stopButton.addEventListener('click', stopButtonClicking);/*Quando clicar o botão de stop, chamar a função de pausa.*/
soundRainButton.addEventListener('click', soundRainClicking);/*Quando clicado o botão iniciar um som de chuva ao fundo!*/
stopRainSong.addEventListener('click', stopRainClicking);
