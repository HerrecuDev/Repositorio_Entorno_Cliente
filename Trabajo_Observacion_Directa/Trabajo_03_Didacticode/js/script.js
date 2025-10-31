//Este es mi codigo JavaScript : Pablo Herrera


//Suma dos numeros y devuelve el valor:
function sumar(valor1,valor2){

    return valor1 + valor2;
}


//Resta dos numeros y devuelve el valor :
function restar(valor1,valor2){

    return valor1 - valor2;
}

//Multiplica dos numeros y devuelve el valor:
function multiplicar(valor1,valor2){

    return valor1 * valor2;
}

/*AUN NO PODEMOS HACER ESTO
//GENERO UNA FUNCION GENERICA PARA CADA OPERACION :

function realizarOperacion(tipo){
    var num1 = Number(document.getElementById('txtNumero1').value);
    var num2 = Number(document.getElementById('txtNumero2').value);
    var lblResultado = document.getElementById('resultOp');


    if(isNaN(num1) || isNaN(num2)){

        console.log("No es posible realizar la operacion")
        return;
    }

    //Declaro la variable resultado generica:

    let resultado = 0;

    switch(tipo){

        case 'sumar':
            resultado = sumar(num1,num2);
            break;
        case 'restar':
             resultado = restar(num1,num2);
            break;
        case 'multiplicar':
             resultado = multiplicar(num1,num2);
            break;

        default:
            console.log("Operacion no valida");
            return;


    }

    console.log(`Resultado de la (${tipo}): ${resultado}`);
   
    lblResultado.innerHTML = resultado.toFixed(2);

}

*/


/*Funcion para obtener numeros */

function obtenerNumeros(){

    //Obtener numero 1:
    var num1 = document.getElementById('txtNumero1').value;
    num1 = Number(num1);

    //Obtener numero 2 :
    var num2 = document.getElementById('txtNumero2').value;
    num2 = Number(num2);

    //Array de los valores devueltos :
    return [num1 , num2];


}



/*REALIZO VARIAS FUNCIONES SIMILARES PARA CADA OPERACION*/ 
//Realiza la operación suma:


function realizarOperacionSumar(){

    console.log("Realiar operacion de suma");

    var resultadoDevuelto = obtenerNumeros();

    num1 = resultadoDevuelto[0];
    num2 = resultadoDevuelto[1];

    var resultadoSuma = 0;

    //REalizar la suma :

    if (!isNaN (num1) && !isNaN (num2)) {

        resultadoSuma = sumar(num1 , num2);
        
    }else{
        console.log("No puedo hacer la suma");
        return;
    }
    console.log("\n")
    console.log("Resultado sumar : " + resultadoSuma);

    //Mostrar resultado en etiqueta
    var lblResultado = document.getElementById('resultOp');
    lblResultado.innerHTML = resultadoSuma.toFixed(2);

}

//Funcion Restar :

function realizarOperacionRestar(){

    console.log("Realiar operacion restar");

    var resultadoDevuelto = obtenerNumeros();

    num1 = resultadoDevuelto[0];
    num2 = resultadoDevuelto[1];


    var resultadoResta = 0;

    //Realizar la resta :

    if (!isNaN (num1) && !isNaN (num2)) {

        resultadoResta = restar(num1 , num2);
        
    }else{
        console.log("No puedo hacer la resta");
        return;
    }

    console.log("Resultado restar : " + resultadoResta);

    //Mostrar resultado en etiqueta
    var lblResultado = document.getElementById('resultOp');
    lblResultado.innerHTML = resultadoResta.toFixed(2);

}

//Funcion Multiplicar:
function realizarOperacionMultiplicar(){

    console.log("Realiar operacion Multiplicacion");

     var resultadoDevuelto = obtenerNumeros();

    num1 = resultadoDevuelto[0];
    num2 = resultadoDevuelto[1];

    var resultadoMultiplicar = 0;


    if (!isNaN (num1) && !isNaN (num2)) {

        resultadoMultiplicar = multiplicar(num1 , num2);
        
    }else{
        console.log("No puedo hacer la multiplicación");
        return;
    }

    console.log("Resultado multiplicar : " + resultadoMultiplicar);

    //Mostrar resultado en etiqueta
    var lblResultado = document.getElementById('resultOp');
    lblResultado.innerHTML = resultadoMultiplicar.toFixed(2);

}




//Funcion Inicializadora :

function init(){

    //Obtengo la referencia de todos los botones :
   
    //Forma mas legible de declararlo :
    var btnSumar = document.getElementById("btnSumar");
    btnSumar.addEventListener("click" , realizarOperacionSumar);

    //Forma mas avanzada de generarlo:
    document.getElementById("btnRestar").addEventListener("click" , realizarOperacionRestar);
    document.getElementById("btnMultiplicar").addEventListener("click" ,realizarOperacionMultiplicar);


    //Formas avanzadas de realizar lo mismo :
    /**
    btnSumar.addEventListener("click" , function(e){
        realizarOperacionSumar
    })

    btnSumar.addEventListener("click" , (e) => {
        realizarOperacionRestar();
    })

    document.getElementById('btnSumar').addEventListener('click' , (e) => realizarOperacionSumar());
*/
}


//Cuando se carga el dom se llama a init
window.onload = init;