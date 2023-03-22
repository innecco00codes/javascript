'use strict'

// TRANSFORMACION DE TEXTOS

var numero = 444;
var texto1 = "Bienvenidos al curso de Javascript";
var texto2 = "Es muy buen curso";

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

// BUSCAR PALABRA DENTRO DE STRING = indexOf  o  lastIndexOf

var busqueda = texto1.indexOf("curso");
console.log(busqueda);
