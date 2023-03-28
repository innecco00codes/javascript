'use strict'

// SON ARRAYS DENTRO DE OTRO ARRAY

var peliculas = ["Harry Potter", "Stars wars", "Scream", "Cars"];
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

//ELIMINAR UN ELEMENTO DEL ARRAY

var indice = peliculas.indexOf ("Scream");

if(indice > -1){
    peliculas.splice(indice, 1);
}

console.log(peliculas);

// CONVERTIR UN ARRAY A STRING

var peliculas_string = peliculas.join();
console.log(peliculas_string);

//CONVERTIR UN STRING A ARRAY

var cadena = "Perro, Gato, Raton, Elefante, Jirafa";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

//ORDENAR UN ARRAY (POR DEFECTO LOS ORDENA ALFABETICAMENTE)

peliculas.sort();
console.log(peliculas);

peliculas.reverse();
console.log(peliculas);  // invierte los elementos del array

//RECORRER UN ARRAY

document.write("<ul>");

for(let pelicula in peliculas){
    document.write("<li>" + peliculas[pelicula] + "</li>");
}

document.write("</ul>");

//BUSQUEDA

var busqueda = peliculas.find( pelicula => pelicula == "Cars");
var busqueda2 = peliculas.findIndex( pelicula => pelicula == "Cars")

console.log(busqueda);
console.log(busqueda2);


