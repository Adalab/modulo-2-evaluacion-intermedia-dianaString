/* Pasos:
    - escuchar con main
 */

'use strict'

// VARIABLES

// Variables del html
// const main = document.querySelector('.js-main'); necesario?
/* const selectListener = document.querySelector('.js-select-listener'); */
const select = document.querySelector('.js-select');
const btnSelect = document.querySelector('.js-btn-select');
const btnPlay = document.querySelector('.js-btn-play');
const textResult = document.querySelector('.js-text-result');
const textPlayer = document.querySelector('.js-text-player');
const textComputer = document.querySelector('.js-text-computer');

// OBJETOS
const opciones = {
    Piedra: "Tijera",
    Papel: "Piedra",
    Tijera: "Papel",
 /* (clave): "(valor)" */
};

// FUNCIONES

// CPU (Computadora)
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }; 

const randomNumber = getRandomNumber(9);
console.log(randomNumber);

function cpu(){
    if (randomNumber <= 3) {
        console.log(`CPU: ${'Piedra'}`);
        return opciones.Piedra;
    }
    else if (randomNumber >= 7) {
        console.log(`CPU: ${'Papel'}`);
        return opciones.Papel;
    }
    else { // (select.value === "Tijera" ) 
        console.log(`CPU: ${'Tijera'}`);
        return opciones.Tijera;
    }
}

// La jugadora
function player() {
    if (select.value === "Piedra" ) {
        console.log(`Player: ${'Piedra'}`);
        return opciones.Piedra;
    }
    if (select.value === "Papel" ) {
        console.log(`Player: ${'Papel'}`);
        return opciones.Papel;
    }
    if (select.value === "Tijera" ) {
        console.log(`Player: ${'Tijera'}`);
        return opciones.Tijera;
    }
}

// El juego
const juego = function(player, cpu){
    
    if (player === cpu) {
        console.log("Empate");
        return "Empate";
    } 
    else if (opciones[player] === cpu) {
        console.log("Has Ganado");
        return "Ganas";
    }
    else {
        console.log("Pierdes");
        return "Has perdido";
    }
    /* opciones[player] devuelve un valor según una clave,
        por lo que si el user escribió Piedra, opciones[player] 
        devolverá el valor "Tijeras". Si es el mismo valor que
        el de la cpu, gana! */
}

// HANDLES

// Selección jugadora/player
function handleClickBtnSelect(event) {
    event.preventDefault();
    player();
}

// Botón "¡Vamos a jugar!"
function handleClickBtnPlay(event) {
    event.preventDefault();
    const computerOption = cpu(); // Se almacena la jugada de la CPU en una variable
    const playerOption = player(); // Lo mismo con la del jugador
    const result = juego(playerOption, computerOption); // Se comparan ambas variables
    console.log(`Resultado: ${result}`);

    textResult.innerHTML = `¡${result}!`;

}
// Puntos que lleva la jugadora
function handleClickTxtResult(event) {
    /* event.preventDefault(); */
    if (result === Ganas) {
        textPlayer.innerHTML = `Jugador: playerWonGames[i]`;
    } 
}

// Event/Listeners
btnSelect.addEventListener('click', handleClickBtnSelect);
btnPlay.addEventListener('click', handleClickBtnPlay);
textPlayer.addEventListener('click', handleClickTxtResult);