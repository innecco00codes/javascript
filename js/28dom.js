'use strict'

//DOM - DOCUMENT OBJECT MODEL

function cambiaColor(color){
    caja.style.background = color;
};

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto Nuevo de la caja";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";

console.log(caja);

//CONSEGUIR ELEMENTOS POR SU ETIQUETA 
var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";//SE MANIPULA EL TEXTO DE LA PAGINA

console.log(todosLosDivs);

//CONSEGUIR ELEMENTOS POR SU CLASE CSS

