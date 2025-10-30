//Este es mi codigo JavaScript : Pablo Herrera


//Suma dos numeros y devuelve el valor:
function suma(valor1,valor2){

    return valor1 + valor2;
}


//REaliza la operación suma:
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

//Funcion Inicializadora :

function init(){

    //Obtener la referencia al boton de sumar(btnSumar)
    var btnSumar = document.getElementById("btnSumar");

    btnSumar.addEventListener("click" , realizarOperacionSuma);


}


//Cuando se carga el dom se llama a init
window.onload = init;