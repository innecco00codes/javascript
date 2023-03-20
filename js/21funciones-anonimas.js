'use stritc'

/*
FUNCIONES ANONIMAS:
ES UNA FUNCION QUE NO TIENE NOMBRE


var peliculas = function (nombre){
  return "La pelicula es: " + nombre; 
}

console.log(peliculas ("Harry Potter"));
*/

// FUNCIONES CALLBACK
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
  var sumar = (numero1 + numero2);

  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

//console.log(sumame(4,5));

sumame(5,7,function(dato){
  console.log("La suma es: " + (dato));
},
function(dato){
  console.log("La suma por dos es: " + (dato * 2));
});