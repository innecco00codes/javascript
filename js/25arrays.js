'use strict'

//ARRAYS, ARREGLOS, MATRICES : COLECCION DE DATOS O VALORES AGRUPADOS
// 1 solo dato
var nombre = "Carlos Innecco";
//Array con varios datos
var nombres = ["Carlos Innecco", "Eduardo Lapenta", "Eleny Gonzalez", 80, false];

//Arrays en forma de objeto
var lenguajes = new Array("PHP", "JS", "JAVA", "PHYTON", "GO", "C#", "C", "PASCAL");

//Los Arrays tienen indice y empiezan desde el 0
var lenguajes2 = new Array("PHP", "JS", "JAVA", "PHYTON", "GO");
//                           0      1      2        3       4

console.log(nombres);
console.log(lenguajes);

console.log(lenguajes[1]);//solicitar solo un dato de un array
console.log(lenguajes.length);//cantidad de datos de un array
/*
var elemento = parseInt(prompt("Qué elemento del array quieres??", 0));
if(elemento >= nombres.length){
    alert("Introduce un un número correcto. Menor que: " + nombres.length);
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/


document.write("<h1>LENGUAJES DE PROGRAMACION</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
*/

lenguajes.forEach((elemento, indice) => 
    document.write("<li>" + indice + " - " + elemento + "</li>"
));

document.write("</ul>");