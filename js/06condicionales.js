'use strict'

//CONDICIONAL IF

var edad1 = 30;
var edad2 = 12;
// Si pasa esto
if(edad1 < edad2){
    // Ejecuta esto
    console.log("Edad1 es mayor que edad2");
}   // Sino, ejecuta esto otro
else{
    console.log("La edad1 es inferior");
}
/*
//OPERADORES RELACIONALES
    Mayor >
    Menor <
    Mayor o igual >=
    Menor o igual <=
    Igual ==
    Distinto !=
*/

var edad = 40;
var nombre = "Carlos Lapenta";

if(edad >=18){
    console.log(nombre+ " tiene "+edad+" años, es mayor de edad.");
    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >= 70){
        console.log("Eres un anciano");
    }else{
        console.log("Ya no eres millenial");
    }
}else{
    console.log(nombre+ " tiene "+edad+" años, es MENOR de edad.");
}

/*
//OPERADORES LOGICOS
AND(y): &&
OR(O): ||
NEGACION: !
*/

var year = 2018;

//NEGACION

if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}

//AND
if(year>= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}
