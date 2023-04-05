'use strict'

//DOM - DOCUMENT OBJECT MODEL

function cambiaColor(color){
    caja.style.background = color;
};

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto Nuevo de la caja";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";

console.log(caja);

