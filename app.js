let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function aisgnarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    aisgnarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"} `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      aisgnarTextoElemento("p", "El numero secreto es menor");
    } else {
      aisgnarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if(listaNumerosSorteados.length == numeroMaximo){
      aisgnarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
  }else {
  //si el numero generado esta incluido en la lista
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else {
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
  }
}
}

function condicionesIniciales() {
  aisgnarTextoElemento("h1", "juego del numero secreto");
  aisgnarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de inicio
  //generar el numero aleatorio
  //inicializar el numero de intentos
  //deshabilitar el boton de nuevo juego
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



