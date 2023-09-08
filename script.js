//Creacion de un Array con los elementos del juego
const choices = ["piedra", "papel", "tijeras"]; 

/*Funcion que selecciona una posicion del Array (0, 1 o 2) en base al
  producto de la longitud del Array (osea 3) por un numero al azar entre
  0 y 1 (generado por la f. Math.random), y luego redondeado hacia abajo.*/
function getComputerChoice() {
    numAle = choices[Math.floor(Math.random() * choices.length)]
    console.log("La computadora eligio " + numAle)
    return numAle
} 
  
//Pedir al usuario un elemento
function getUserChoice() {
    let input = prompt("Selecciona  piedra,  papel  o  tijeras")
    itemUser = input.toLowerCase()
    console.log("Usted eligio " + itemUser)
    return itemUser
    }

//Comparar ambos elementos y Condicionar quien gana a quien    
function roundSingle (User,Compu) {
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
let userScore = 0;
let compuScore = 0;
function singleRound (){
    
    console.log("-------")
    let User = getUserChoice()
    let Compu = getComputerChoice()
    let winner = roundSingle(User,Compu)
    
    //Esta parte de la funcion sirve para la acumlacion de puntos
    console.log(winner)

    if (winner.includes("Usuario Gana")) 
    {userScore++}
    else if (winner.includes("Computer Gana"))
    {compuScore++} 
}

/*console.log(roundSingle(playerSelection,computerSelection))*/

//Funcion que itera las 5 rondas

function game() {
   
    for(let i=1; i<=5; i++) {
        singleRound()
    }    
    
    /*Esta parte de la funcion arroja quien es el vencedor de la partida en base 
    a la acumlacion de puntos*/
    if (userScore>compuScore) {return alert("Ganaste eres un capo!!!")}
    else if (userScore<compuScore) {return alert("Perdiste la partida...Intentalo otra vez")}
    else {return alert("Empataron")}
}

console.log (game())