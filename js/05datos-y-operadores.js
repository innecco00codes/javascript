'use strict'

//OPERADORES  +suma -resta *producto /cociente %resto division
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("Es resultado de la operacón es: "+operacion);

//TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_o_falso = true; //true o false, 0 O 1 VARIABLE BULEANO

//FUNCION: PARA CAMBIAR UN DATO A OTRO

var numero_falso = "33"; //es un string (cadena de caracteres)

console.log(Number(numero_falso)+7); //Funcion Number cambia el valor del string a numero 
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7); //numeros con decimales
console.log(String(numero_entero)+4);// String cambia el valor de numero a texto
