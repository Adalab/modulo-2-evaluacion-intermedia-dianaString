  /* Pasos javascript:
    1.- Generar un Número random
    2.- Hacer la comparativa, según el nº random sale Piedra, Papel, Tijeras

    Pasos generales:
    1.- Crear estructura html
    2.- Crear var con cada elemento del html
    3.- Crear un nº aleatorio al darle al botón Jugar
    4.- Crear una función para convertir el nº aleatorio en Piedra, Papel, Tijeras
        (Se obtiene el value del CPU)
    5.- Se obtiene el value de la usuaria, ejecutar la función del dato del ordenador
    6.-Comparó el dato de la usuaria y el del pc y decidir quien ganó, perdió o si se empató.
  */
  

'use strict'

// VARIABLES

// VARIABLES

// Variables del html
const selectUser = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-btn-play');
const textResult = document.querySelector('.js-text-result');
const counterUser = document.querySelector('.js-counter-user');
const counterPc = document.querySelector('.js-counter-pc');
const btnReset = document.querySelector('.js-button-reset');

let playerScore = 0;
let pcScore = 0;
let moves = 0;

// FUNCIONES

// Contador
function counterPlayers(){
    counterUser.innerHTML = playerScore;
    counterPc.innerHTML = pcScore;
}

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}; 

// CPU (Computadora)
function ComputerTurn() {
    const randomNumber = getRandomNumber(9);
    console.log(randomNumber);

    let PcOption = ""; // Para almacenar los valores en una variable
    if (randomNumber <= 3) {
        PcOption = 'piedra';
    }
    else if (randomNumber >= 7) {
        PcOption = 'papel';
    }
    else { // 
        PcOption = 'tijera';
    }
    return PcOption;
}


// El juego
function playGame() {
    const PcValue = ComputerTurn();
    const PlayerValue = selectUser.value;

    console.log(`CPU: ${PcValue}`);
    console.log(`Player: ${PlayerValue}`);

    if (PcValue !== ''){
        moves++;
        if ( PlayerValue === PcValue){
            textResult.innerHTML = `Habéis escogido lo mismo, empate`;
        } else if (
            (PlayerValue === "piedra" && PcValue === "tijera") || 
            (PlayerValue === "papel" && PcValue === "piedra") || 
            (PlayerValue === "tijera" && PcValue === "papel")){
                playerScore++
                textResult.innerHTML = `La CP escogió ${PcValue} ¡Has ganado!`;
        } else {
            pcScore++
            textResult.innerHTML = `La CP escogió ${PcValue} ¡Has perdido!`;
        }
    }
    counterPlayers();
}

// Recuento partidas
function gameOver() {
    if (moves >= 10){
        
        btnReset.classList.remove('hidden');
        btnPlay.classList.add('blocked');
        if (pcScore > playerScore){
            textResult.innerHTML = `¡Se acabó! ¡Has perdido!`;
        } else if (playerScore > pcScore){
            textResult.innerHTML = `¡Se acabó! ¡Has ganado!`;
        } else {
            `¡Empate!`
        }
    } 
}

// HANDLES

// Botón "¡Vamos a jugar!"
function handleClickBtnPlay(event) {
    event.preventDefault();
    playGame();
    gameOver();
    if (moves >= 10){
        btnPlay.disabled = true;
    }
}

// reset
function handleCLickReset() {
    document.location.reload();
}

// Event/Listeners
btnPlay.addEventListener('click', handleClickBtnPlay);
btnReset.addEventListener('click', handleCLickReset);