// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputValue = document.getElementById('amigo').value.trim().toUpperCase();
    const invalidNames = /[^a-zA-Z ]/g.test(inputValue);
    if (inputValue === '') {
        alert('Por favor, inserte un nombre');
    } else if (inputValue.length < 3) {
        alert('Por favor ingrese un nombre con 3 caracteres mínimo')
    } else if (invalidNames) { 
        alert('Por favor ingrese nombre sin tilde');
    } else if (amigos.includes(inputValue)) {
        alert('Este nombre ya existe, ingrese uno diferente');
    } else {
        amigos.push(inputValue);
        console.log('amigos: ', amigos);
        listAmigos();
    }
    document.getElementById('amigo').value = '';
};

function listAmigos() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
} 

function sortearAmigo(){
    if (amigos.length > 0) {
        const amigoAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[amigoAleatorio];
        document.querySelector('#resultado').innerHTML = `Tu amigo secreto es : ${amigoSecreto}`;
        } else {
            alert('Por favor ingrese un amigo');
        }
};