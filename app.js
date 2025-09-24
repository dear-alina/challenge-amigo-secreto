// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let sorteoRealizado = false;

// Función para asignar texto a elementos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para validar y almacenar los nombres de los amigos
function agregarAmigos() {
    // Si el sorteo ya se hizo y se agrega un nuevo nombre, reiniciamos el juego
    if (sorteoRealizado) {
        reiniciarJuego();
    }

    let ingresarNombre = document.getElementById("amigo");
    let nombre = ingresarNombre.value;

    if (nombre !== "") {
        if (amigos.includes(nombre)) {
            asignarTextoElemento("h2", `${nombre} ya se encuentra en la lista :)`);
        } else {
            amigos.push(nombre);
            asignarTextoElemento("h2", "Agrega a tus amigos que falten ✨");
        }
    } else {
        alert("Por favor, ingresa un nombre unu");
    }

    mostrarListaAmigos(); // Llama a esta función para actualizar la lista mostrada
    limpiarCaja();
}

// Esta función limpiará la caja de entrada
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

// Función para sortear al amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡No hay suficientes amigos para el sorteo!");
        return;
    }
    
    // Obtener un amigo secreto al azar
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el amigo secreto y deshabilitar el botón
    document.getElementById("resultado").innerHTML = `🎉 ¡Tu amigo secreto es <strong>${amigoSorteado}</strong> 😁!!`;
    document.querySelector(".button-draw").disabled = true;

    // Marcar que el sorteo ya se realizó
    sorteoRealizado = true;
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    let listaAmigosUL = document.getElementById("listaAmigos");
    listaAmigosUL.innerHTML = ""; // Limpia la lista antes de añadir los nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i];
        listaAmigosUL.appendChild(elementoLista);
    }
}

// Nueva función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vacía la lista de amigos
    sorteoRealizado = false;
    
    // Habilitar el botón de sortear
    document.querySelector(".button-draw").disabled = false;
    
    // Limpiar el resultado y la lista visual
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";

    // Restablecer el mensaje inicial
    condicionesIniciales();
}

// Función para las condiciones iniciales en el juego
function condicionesIniciales() {
    asignarTextoElemento("h2", "Ingresa el nombre de tus amigos uwu");
}

// Iniciar el juego al cargar la página
condicionesIniciales();