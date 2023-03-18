'use strict'

//PARAMETROS REST Y SPREAD

//REST ( ... )

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
  console.log("Fruta 1: " + fruta1);
  console.log("Fruta 2: " + fruta2);
  console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Limon", "Sandia", "Pera", "Melon", "Coco");

//SPREAD ( ... )

var frutas = ["Naranja", "Limon"]
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");