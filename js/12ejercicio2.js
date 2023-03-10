'use strict'

//UTILIZANDO UN BUBLE, MOSTRAR LA SUMA Y LA MEDDIA DE LOS NUMEROS INTRODUCIDOS HASTA  INTRODUCIR UN NUMERO NEGATIVO Y AHI MOSTRSR EL RESULTADO

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que coloques uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero > 0){
        suma += numero; // es igual a escribir: suma = suma + numero.

        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0);

alert("La suma de todos los números es "+ suma);
alert("La media de todos los números es " + (suma / contador));