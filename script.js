//Pedir a la pc que genere un elemento
function getComputerChoice(...args) {
    const indiceAleatorio = Math.floor(Math.random() * args.length);
    return args[indiceAleatorio];
  }
  
  const string1 = "Papel";
  const string2 = "Piedra";
  const string3 = "Tijera";
  
  const computerSelection = getComputerChoice(string1, string2, string3);
  console.log(computerSelection);
  
//Pedir al usuario un elemento
let playerSelection = prompt("Elije un elemento")
//Comparar ambos elementos y Condicionar quien gana a quien
function roundSingle (playerSelection, computerSelection) {
    if (playerSelection===computerSelection) {return console.log("Es un Empate")}
    else if (playerSelection==="Papel" && computerSelection==="Piedra" || playerSelection==="Piedra" && computerSelection==="Papel")
        {return console.log("Papel gana a la piedra") }
    else if (playerSelection==="Papel" && computerSelection==="Tijera" || playerSelection==="Tijera" && computerSelection==="Papel") 
        {return console.log("Tijera Gana a papel")}
    else if (playerSelection==="Piedra" && computerSelection==="Tijera" || playerSelection==="Tijera" && computerSelection==="Piedra") 
        {return console.log("Piedra gana a la Tijera")}
    }


console.log(roundSingle(playerSelection,computerSelection))


//Gana el mejor de 5 partidas

function game() {
    roundSingle (playerSelection, computerSelection)
    roundSingle (playerSelection, computerSelection)
    roundSingle (playerSelection, computerSelection)
    roundSingle (playerSelection, computerSelection)
    roundSingle (playerSelection, computerSelection)

}

console.log (game())