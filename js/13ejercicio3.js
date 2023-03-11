'use strict'

/*
CREAR UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo nümero", 0));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros</h1>");

for( var i = numero1; i <= numero2; i++){
    document.write(i+"</br>");
}
