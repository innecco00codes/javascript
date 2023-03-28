'use strict'

/*
1. pida 6 numeros y los colocque en un array
2. mostrar todos los elementos en el cuarpo de la pagina y la consola
3. ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (Se valorara el uso de funcioneds)
*/

function mostrarArray(elementos, textoCustom){
    document.write("<h3>Los Numeros son: "+textoCustom+"</h3>");
    document.write("<ul>")
    elementos.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li>")
});
    document.write("</ul>");
}

var numeros = new Array(6);
//var numeros = []

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
    //numeros.push = parseInt(prompt("Introduce un numero", 0))
}
mostrarArray(numeros);

console.log(numeros);

//numeros.sort(); ORDENA NUMEROS  ALFABETICAMENTE
numeros.sort(function(a,b){return a-b});//FUNCION NUMEROS ORDENADOS
mostrarArray(numeros, "ordenado");
