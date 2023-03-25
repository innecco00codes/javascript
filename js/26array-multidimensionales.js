'use strict'

// SON ARRAYS DENTRO DE OTRO ARRAY

var peliculas = ["Harry Potter", "stars wars", "Scream", "Cars"];
var categorias = ["Futurista", "Terror", "Animacion", "Fantasticas"];

var cine = [categorias, peliculas];

console.log(cine[0][3]);
//               0 categorias
//               3 fantasticas

console.log(cine[1][0]);

console.log(cine);

//AÑADIR ELEMENTOS A UN ARRAY

peliculas.push("Superman");
console.log(peliculas);