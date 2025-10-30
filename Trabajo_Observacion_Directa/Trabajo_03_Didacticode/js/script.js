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


/*DE LAS FORMA QUE LO REALIZO JAVIER EN CLASE*/ 
//REaliza la operación suma:

/*
function realizarOperacionSuma(){

    console.log("Realiar operacion de suma");

    //Obtener numero 1 :
    var num1 = document.getElementById('txtNumero1').value;
    //console.log('numero 1 : ' + num1);

    num1 = Number(num1);

    //Obtener numero 2 :
    var num2 = document.getElementById('txtNumero2').value;
    num2 = Number(num2);

    var resultadoSuma = 0;

    //REalizar la suma :

    if (!isNaN (num1) && !isNaN (num2)) {

        resultadoSuma = suma(num1 , num2);
        
    }else{
        console.log("No puedo hacer la suma");
        return;
    }

    console.log("Resultado sumar : " + resultadoSuma);

    //Mostrar resultado en etiqueta
    var lblResultado = document.getElementById('resultOp');
    lblResultado.innerHTML = resultadoSuma.toFixed(2);

}
    */


//Funcion Inicializadora :

function init(){

    //Obtengo la referencia de todos los botones :
   

    document.getElementById("btnSumar").addEventListener("click" ,() => realizarOperacion("sumar"));
    document.getElementById("btnRestar").addEventListener("click" ,() => realizarOperacion("restar"));
    document.getElementById("btnMultiplicar").addEventListener("click" ,() => realizarOperacion("multiplicar"));

}


//Cuando se carga el dom se llama a init
window.onload = init;