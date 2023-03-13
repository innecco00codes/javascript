'use strict'

/*
TABLA DE MULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA
*/

var numero = parseInt(prompt("¿De qué número quieres la tabla?"));

document.write("<h1> Tabla del " + numero + "</h1>");

for(var i = 1; i <= 10; i++){
    document.write(i + " x " + numero + " = " + (i * numero) + "<br/>");
}

/* TODAS LAS TABLAS DE MULTIPLICAR */

for(var c = 1; c <= 10; c++){
    document.write("<h1> Tabla del " + c + "</h1>");

        for(var i = 1; i <= 10; i++){
        document.write(i + " x " + c + " = " + (i * c) + "<br/>");
    }
}
