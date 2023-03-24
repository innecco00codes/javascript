'use strict'

//PLANTILLAS DE TEXTO

var nombre = prompt("Coloca tu nombre");
var apellidos = prompt("Coloca tus apellidos");

var texto = "Mi nombre es: " + nombre + ". Mis apellidos son: " + apellidos;

var texto = `
    <h1>PRESENTACION</H1>
    <h4>Mi nombre es: ${nombre}</h4>
    <h4>Mis apellidos son: ${apellidos}</h4>
`;


document.write(texto);