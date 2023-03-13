 ' use strict'
 
/*  
HAC  ER PROGRAMA Q UE NOS MUESTRE SI UN NUMERO ES PAR O IMPAR
1. VENTANA PROMPT     
2. SI NO ES VALIDO QUE NOS PIDA DE NUEVO EL NUMERO
*/  

var numero1 = parseInt(prompt("Introduce un número", 0));
 
while(isNaN(numero1)){
    numero1 = parseInt(prompt("Introduce un número", 0));
}
if(numero1 % 2 == 0){
    alert(numero1 + " Es un número Par");
    console.log("ES UN NUMERO PAR");
}else{
    alert(numero1 + " Es un número Impar");
    console.log("ES UN NUMERO IMPAR");
}