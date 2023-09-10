//Creacion de un Array con los elementos del juego
const choices = ["piedra", "papel", "tijera"]; 


function getComputerChoice() {
    numAle = choices[Math.floor(Math.random() * choices.length)]
    console.log("La computadora eligio " + numAle)
    return numAle
} 
  
//Comparar ambos elementos y Condicionar quien gana a quien    
function comparation (User,Compu) {
    if (User===Compu) {return "Es un empate"}
    else if (
    User==="papel" && Compu==="piedra" ||
    User==="piedra" && Compu==="tijera" ||
    User==="tijera" && Compu==="papel") 
    {return "Usuario Gana"}
    else 
    {return "Computer Gana"}
}

/*Funcion que resumen todas las otras tres funciones, !es importante respetar el orden
de colocacion de las funciones*/
let rondasJugadas = 0
let userScore = 0;
let compuScore = 0;
function singleRound(e){
    //console.log("-------")
    let User = e.target.computedName.toLowerCase();
    let Compu = getComputerChoice()
    rondasJugadas++
    let winner = comparation(User,Compu)
    
    //Esta parte de la funcion sirve para la acumlacion de puntos
    console.log(User)
    console.log(winner)
    if (winner.includes("Usuario Gana")) 
    {userScore++}
    else if (winner.includes("Computer Gana"))
    {compuScore++};

    if(rondasJugadas<5){return (document.querySelector('.rondas').textContent=`Ronda ${rondasJugadas}`)}
    else {  if (userScore>compuScore) {return document.querySelector('.resultado').textContent ="Ganaste eres un capo!!!"}
            else if (userScore<compuScore) {return document.querySelector('.resultado').textContent ="Perdiste la partida...Intentalo otra vez"}
            else {return document.querySelector('.resultado').textContent ="Empataron"}
        }
    }
//console.log(singleRound(playerSelection,computerSelection))



const buttons = document.querySelectorAll('button')
const way = buttons.forEach(buton => buton.addEventListener('click',singleRound));


