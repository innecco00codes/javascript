'use strict'

/*
PROGRAMA QUE PIDA DOS NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES

PLUS: SI LOS NUMEROS NO SON NUMEROS O MENORES DE 0 O IGUALES A 0, NOS VUELVA A PEDIR LOS DATOS
*/

var numero1 = parseInt(prompt("Inroduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Inroduce el primer número", 0));
    var numero2 = parseInt(prompt("Introduce el segundo número", 0));
}

if (numero1 == numero2){
    alert("Los números son iguales");
}else if (numero1 > numero2){
    alert("El número mayor es: " + numero1);
    alert("El número menor es: " + numero2);
}else if(numero2 > numero1){
    alert("El Número mayor es " + numero2);
    alert("El número menor es " + numero1);
}else{
    alert("Introduce números correctos");
}
