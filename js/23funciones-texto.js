'use strict'

// TRANSFORMACION DE TEXTOS

var numero = 444;
var texto1 = "   Bienvenidos al curso de Javascript";
var texto2 = "Es muy buen curso   ";

// CAMBIAR EL NUMERO A STRING

var dato = numero.toString();
console.log(typeof dato); // typeof : muestra que tipo de dato es

// cambiar de minusculas a mayusculas
//            toLowerCase  toUpperCase

var dato2 = texto1.toUpperCase();
console.log(dato2);

// CALCULAR LONGITUD TEXTO

var nombre = " Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ";
console.log(nombre.length);

// CONCATENAR (UNIR) TEXTOS

var textoTotal = texto1 + ". " + texto2;
console.log(textoTotal);

var textoTotal2 = texto1.concat(". " + texto2);
console.log(textoTotal2);

// BUSCAR PALABRA DENTRO DE STRING = indexOf/search o lastIndexOf  

var busqueda = texto1.search("de");
console.log(busqueda);

//BUSQUEDA EN FORMA DE Array DE FORMA GLOBAL.

var busqueda2 = textoTotal.match(/curso/gi); 
console.log(busqueda2);

//PARA BUSCAR PARABRAS EN UNA POSICION ESPECIFICA

var busqueda3 = textoTotal.substr(24,11);
console.log(busqueda3);

//PARA BUSCAR UNA LETRA ESPECIFICA

var busqueda4 = textoTotal.charAt(24);
console.log(busqueda4);

//PARA BUSCAR AL INICIO DE UN STRING O AL FINAL ( startWith - endsWith)
// te coloca si es true o false


//BUSQUEDA DE PALABRA - true o false

var busqueda5 = textoTotal.includes("Carlos");
console.log(busqueda5);

//REAMPLAZAR PALABRA POR OTRA

var busqueda6 = textoTotal.replace("Javascript", "Java");
console.log(busqueda6);

//retornar una parte del string desde donde queramos

var busqueda7 = textoTotal.slice(15,24);
console.log(busqueda7);

//RECORTAR UN STRING Y SEPARA LAS PALABRAS : split(" ") o split()

var busqueda8 = textoTotal.split();
console.log(busqueda8);

//RECORTAR ESPACIOS SOBRANTES EN UN STRING

var busqueda9 = textoTotal.trim();
console.log(busqueda9);









