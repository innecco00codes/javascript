'use strict'

// FUNCIONES : ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES

//Defino la funciones

function porConsola(numero1, numero2){
  console.log("Suma: " + (numero1 + numero2));
  console.log("Resta: " + (numero1 - numero2));
  console.log("Multiplicacion: " + (numero1 * numero2));
  console.log("Division: " + (numero1 / numero2));
  console.log("*****************************");
}

function porPantalla(numero1, numero2){
  document.write("Suma: " + (numero1 + numero2) + "<br/>");
  document.write("Resta: " + (numero1 - numero2) + "<br/>");
  document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
  document.write("Division: " + (numero1 / numero2) + "<br/>");
  document.write("*****************************") + "<br/>";
}
function calculadora(numero1, numero2, mostrar = false){
  if(mostrar == false){
    porConsola(numero1, numero2);  
  }else{
    porPantalla(numero1, numero2);
  }

  return true;
   
}

//INVOCAR O LLAMAR LA FUNCION
calculadora(5,5);
calculadora(3,5, true);

/*
for(var i = 1; i <= 10; i++){
  console.log(i);
  calculadora(i,8);
}
*/





