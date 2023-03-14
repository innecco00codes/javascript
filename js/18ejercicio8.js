'use strict'

/* CALCULADORA :
- PIDA 2 NUMEROS POR PANTALLA
- SI METEMOS UNO MAL, QUE LO VUELVA A PEDIR
- EN EL CUERPO DE LA PAGIINA, EN UNA ALERTA Y POR CONSOLA EL RESULTADO DE LAS 2 CIFRAS

*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer número", 0));
    numero2 = parseInt(prompt("Introduce el segundo número", 0));
}
var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" + 
                "La resta es: " + (numero1 - numero2) + "<br/>" + 
                "La multiplicacion es :" + (numero1 * numero2)+"<br/>"+
                "La división es :" + (numero1 / numero2) + "<br/>";

var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" + 
                "La resta es: " + (numero1 - numero2) + "\n" + 
                "La multiplicacion es :" + (numero1 * numero2)+"\n"+
                "La división es :" + (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
