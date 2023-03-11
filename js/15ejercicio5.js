'use strict'

/*
HACER PROGRAMA QUE MUESTRE TODOS LOS NUMEROS DIVISORES DE UN NUMERO INTRODUCIDOS EN UN PROMPT
*/

var numero1 = parseInt(prompt("Introduce un número", 1));

for(var i = 1; i <= numero1; i++){

    if(numero1 % i == 0){
    console.log("Divisor: " + i);
    }
}
