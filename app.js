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
    }
    document.getElementById('amigo').value = '';
};

function listAmigos() {
    document.querySelector('#listaAmigos').innerHTML = inputValue;
};