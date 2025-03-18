// lista vacia para almacenar amigos
let amigos = [];

//funcion para agregar los amigos

function agregarAmigos()
{
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    
    if (nombre==="") {
        alert("Por favor, ingresa un nombre válido");
        return;
    };

    amigos.push(nombre);
    inputNombre.value= "";
    actualizarLista();
};

// función para actualizar la lista

function actualizarLista () {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML="";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li)
    }
}

//función para sortear un amigp

function sortearAmigo() {
    if (amigos.length ===0){
        alert("No hay amigos para sortear");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
