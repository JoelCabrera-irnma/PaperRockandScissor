function selectorImg1(option){
    if(option==="tijera"){
    
    const tijera = document.querySelector('.imgUser')
    tijera.innerHTML = "";
    const imagen = document.createElement('img');
    imagen.src = "./img/scissors-28697_640.png";
    tijera.appendChild(imagen)   
}
    else if(option==='papel'){
    const papel = document.querySelector('.imgUser')
    papel.innerHTML = "";
    const imagen = document.createElement('img');
    imagen.src = "./img/scroll-34696_640.png";
    papel.appendChild(imagen)
    }
    else {
    const piedra = document.querySelector('.imgUser')
    piedra.innerHTML = "";
    const imagen = document.createElement('img');
    imagen.src = "./img/stone-576268_640.png";
    piedra.appendChild(imagen)
    }
}

function selectorImg2(option){
    if(option==="tijera"){
    
    const tijera = document.querySelector('.imgCompu')
    tijera.innerHTML = "";
    const imagen = document.createElement('img');
    imagen.src = "./img/scissors-28697_640.png";
    tijera.appendChild(imagen)   
}
    else if(option==='papel'){
    const papel = document.querySelector('.imgCompu')
    papel.innerHTML = "";
    const imagen = document.createElement('img');
    imagen.src = "./img/scroll-34696_640.png";
    papel.appendChild(imagen)
    }
    else {
    const piedra = document.querySelector('.imgCompu')
    piedra.innerHTML = "";
    const imagen = document.createElement('img');
    imagen.src = "./img/stone-576268_640.png";
    piedra.appendChild(imagen)
    }
}

//Creacion de un Array con los elementos del juego y f. eleccion de la computadora
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
    
    let User = e.target.computedName.toLowerCase(); //Aqui esta implicita la eleccion del Jugador
    document.querySelector('.optionUser').textContent=`Usted eligio ${User}`;
    selectorImg1(User);
    let Compu = getComputerChoice()
    document.querySelector('.optionCompu').textContent=`La PC eligio ${Compu}`;
    selectorImg2(Compu);
    rondasJugadas++
    let winner = comparation(User,Compu)
    
    console.log(User)
    console.log(winner)
    //Esta parte de la funcion sirve para la acumlacion de puntos
    if (winner.includes("Usuario Gana")) 
    {userScore++}
    else if (winner.includes("Computer Gana"))
    {compuScore++};
    document.querySelector('.score').textContent=`Usuario: ${userScore}  Computadora: ${compuScore}`
    
    //Esta parte decide hasta que numero de rondas jugar y quien gana.
    if(rondasJugadas<5){ (document.querySelector('.rondas').textContent=`Ronda ${rondasJugadas}`)}
    else {  document.querySelector('.rondas').textContent=`Ronda 5`
            if (userScore>compuScore) { document.querySelector('.resultado').textContent ="Ganaste eres un capo/a!!!"}
            else if (userScore<compuScore) { document.querySelector('.resultado').textContent ="Perdiste la partida...Intentalo otra vez"}
            else { document.querySelector('.resultado').textContent ="Empataron"}
            document.querySelectorAll('button').forEach(button => {
                button.disabled = true;})
        }
    }
//console.log(singleRound(playerSelection,computerSelection))


const buttons = document.querySelectorAll('.push')
const way = buttons.forEach(buton => buton.addEventListener('click',singleRound));


document.querySelector('.start').addEventListener('click', function() {
  // Obtener todos los botones a habilitar
  const botones = document.querySelectorAll('.push');

  // Recorrer los botones y habilitarlos
  botones.forEach(function(boton) {
    boton.removeAttribute('disabled');
    boton.classList.add('button-19')
  });
});


