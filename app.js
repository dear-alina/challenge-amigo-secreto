// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = 0;
let amigos= [];

// Función para asiganción de texto
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Función para validar y almacenar el nombre de los amigos ingresados
function agregarAmigos(){
    //Ingreso de nombres
    let  ingresarNombre= document.getElementById("amigo");
    //Obtener nombre ingresado
    let nombre = ingresarNombre.value;
   //Funcion que valide que el nombre no esté vacío
    if(nombre != ""){
        //En esta linea se agregó código para verificar si el nombre ya existe en la lista
        if(amigos.includes(nombre)){
            asignarTextoElemento("h2",`${nombre} ya se encuentra en la lista :)`);
            limpiarCaja();
            return;
        }
        asignarTextoElemento("h2","Agrega a tus amigos que falten ✨");
    } else{ 
            alert("Por favor, ingresa un nombre unu");
            return;
        }
    amigos.push(nombre); //Ingresa los valores en la lista
    console.log(amigos);
    limpiarCaja();
}

//Esta función limpiará la caja de entrada cada que se añada un nombre
function limpiarCaja(){
    document.querySelector("#amigo").value= "";
}
//Función para sortear al amigo
function sortearAmigo(){
    //Obtener amigo secreto con random
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    //Mostrar al amigo secreto
    /*Primera versión:
    if (amigoSorteado){
        asignarTextoElemento("h2",`Tu amigo secreto es ${amigoSorteado}😁!!`);
    }
    */
    //Segunda versión:
    document.getElementById("resultado").innerHTML = 
    `🎉 ¡Tu amigo secreto es <strong>${amigoSorteado}</strong> 😁!!`;
}
//Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML= "";

    for(let i =0;  i< amigos.length; i++){
        let elementoLista = document.createElement("li");
        elementoLista.textContent= amigos[i];
        listaAmigos.appendChild(elementoLista);
    } 
}
//Funcion para las condiciones iniciales en el juego
function condicionesIniciales() {
    asignarTextoElemento("h2","Ingresa el nombre de tus amigos uwu");  
}
condicionesIniciales();
