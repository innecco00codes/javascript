'use strict'

//BUCLE WHILE ES UN BUCLE INDEFINIDO

var year = 2018;

while ( year <= 2051){
    //Ejecuta esto
    console.log("Estamos en el año " + year);
    year++; //IMPORTANTE CONDICIONAR PARA QUE NO SEA UN BUCLE INFINITO
}

while(year != 1991){
    //Ejecuta esto
    console.log("Estamos en el año " + year);
    
    if(year == 2000){
        break;
    }

    year--;

}



//DO WHILE
/*
var years = 30;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;

}while(years > 25)*/