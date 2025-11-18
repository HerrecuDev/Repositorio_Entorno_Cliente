
"use strict";

//Funcion global :
function sayHi(name = ``){

   console.log(`soy la funcion sayHi global`)
   console.log(`Say hi ` + name)

}

//De esta forma si termina como punto y coma :

let sayHiexpression = function(nombre , message = "Hello world"){

   console.log(`Soy la funcion expresion`)
   console.log(`Hola` + nombre + `Message ` + message)

};

sayHi(`Peter`);
sayHi();

//Llamada a funcion 
sayHiexpression(`james`);

sayHiexpression(`Àndrea` , `welcome onboard!`);



//Funciones lambdas : 

let sayhiExpression2 = (nombre,message) =>{

};