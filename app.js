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
    //Obtener nmbre ingresado
    let nombre = ingresarNombre.value;
   //Funcion que valide que el nombre no esté vacío
    if(nombre != ""){
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

//Funcion para las condiciones iniciales en el juego

function condicionesIniciales() {
    asignarTextoElemento("h2","Ingresa el nombre de tus amigos uwu");
    agregarAmigos();  
}

condicionesIniciales();
