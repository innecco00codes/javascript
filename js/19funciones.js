'use strict'

// FUNCIONES : ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES

//Defino la funciones
function calculadora(numero1, numero2){

    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("*****************************");

    return "Hola soy la calculadora";
   
}

//INVOCAR O LLAMAR LA FUNCION
calculadora(5,5);
calculadora(9,3);

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}






