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
const textPlayer = document.querySelector('.js-textPlayer');
const textComputer = document.querySelector('.js-textComputer');

// FUNCIONES

const opciones = {
    Piedra: "Tijera",
    Papel: "Piedra",
    Tijera: "Papel",
 /* (clave): "(valor)" */
};

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
        console.log(`CPU: ${'Papel'}`);
        return opciones.Tijera;
    }
}

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
    
        /* opciones(); */
        if (player === cpu) {
            console.log("Empate");
            return "Empate";
        } 
        else if (cpu === opciones[player]) {
            console.log("Ganas!");
            return "Ganas!";
        }
        else {
            console.log("Pierdes");
            return "Pierdes";
        }
    }

// Funciones
/* function handleClickSelect(event) {
    event.preventDefault();
    console.log('hola');
    if (select.value == "Tijera" && btnSelect.onclick) {
        console.log('tijera');
    }
} */

// Handle (Selección jugadora/player)
function handleClickBtnSelect(event) {
    event.preventDefault();
    player();
}

function handleClickBtnPlay(event) {
    event.preventDefault();
    cpu();
    player();
    juego(player,cpu);
    console.log(`Así ha quedado ${juego()}`);
}

// Event/Listeners
/* selectListener.addEventListener('click', handleClickSelect); */
btnSelect.addEventListener('click', handleClickBtnSelect);
btnPlay.addEventListener('click', handleClickBtnPlay);