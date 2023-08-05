/* ******Botões********/

const startButtonAnimation = document.querySelector('.img-button-start');/*Botão de iniciar a animação */
const stopButtonAnimation = document.querySelector('.img-button-stop');/*Botão de parar a animação. */

const startRainSong = document.querySelector('.startRainSound');/*Botão para iniciar um som de chuva ao fundo.*/
const stopRainSong = document.querySelector('.stopRainSound');/*Botão de parar som de chuva.*/



/* *****Elementos****** */

/*Elemento bolinha da animação. */
const elementBreathe = document.querySelector('.element-ball');
/*Painel de audio para iniciar o som de chuva.*/
const elementPanelAudio = document.querySelector('.element-audio');
/*Janela flutuante de inicio.*/
const elementWindowFLoat = document.querySelector('.splash-Window-Float');




/* ******Funções****** */

function startButtonCLicking(){
    elementBreathe.style.display ='flex';/*Exibo a animação*/
    startButtonAnimation.style.display = "none";/*Escondo o botão de iniciar*/
    stopButtonAnimation.style.display = "flex";/*Exibo o botão de parar */
    
}
function stopButtonClicking(){
    elementBreathe.style.display ='none';/*Retiro a animação*/
    startButtonAnimation.style.display = "flex"; /*Exibo novamente o botão de iniciar*/
    stopButtonAnimation.style.display = "none";/*Escondo o botão de stop*/
}
function soundRainClicking(){
    elementPanelAudio.style.display = 'flex';/*Mostro o player de musica.*/
    soundRainButton.style.display = 'none';/*Escondo o botão de iniciar*/
    stopRainSong.style.display = 'flex';/*Exibo o botão de parar*/
}
function stopRainClicking(){
    elementPanelAudio.style.display = 'none';/*Escondo o player de musica.*/
    soundRainButton.style.display = 'flex';/*Exibo o botão de esconder o player*/
    stopRainSong.style.backgroundColor = "#ffa500";
    stopRainSong.style.display = 'none';/*Escondo o botão de parar*/
}
function closedWindow(){/*Fechar janela flutuante!*/
    elementWindowFLoat.style.display = 'none';/*Quando clicado, a janela flutuante é removida.*/
}


/* *****Eventos****** */
startButtonAnimation.addEventListener('click', startButtonCLicking);/*Quando clicar o botão em imagem ele chama a função especifica.*/
stopButtonAnimation.addEventListener('click', stopButtonClicking);/*Quando clicar o botão de stop, chamar a função de pausa.*/
startRainSong.addEventListener('click', soundRainClicking);/*Quando clicado o botão iniciar um som de chuva ao fundo!*/
stopRainSong.addEventListener('click', stopRainClicking);/*Evento para esconder o player de musica.*/
