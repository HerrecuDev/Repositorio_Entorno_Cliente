//Genero las funciones necesarias :


function obtenerNumeros(){

    let num1 = document.getElementById(`txtOp1`).value;
    num1 = Number(num1);

    let num2 = document.getElementById(`txtOp2`).value;
    num2 = Number(num2);

    //Devolvemos los numeros :

    return [num1, num2];
}
function calcularOperacion(){


    let datosDelDOM = obtenerNumeros();

    num1 = datosDelDOM[0];
    num2 = datosDelDOM[1];

    var suma = 0;

    if (!isNaN(num1) && !isNaN(num2)) {

        suma = num1 + num2;
        
    }else{

        console.log("Algunos de los valores introducidos no es un numero!!")
        return;
    }

    console.log("El resltado de la suma es : " + suma);

    var resultadoSuma = document.getElementById('resultOp');
    resultadoSuma.innerHTML = suma;


}


function askSuscripcion(question , yes , no){

    var respuesta;
     if(confirm(question)) 
        
        respuesta = document.getElementById('resultSus');

    else 
            
        respuesta = document.getElementById('resultSus');


    respuesta.innerHTML = question;

}


let init = (e) => {

    console.log('Cargo los elementos del DOM');



    //Obtengo los elementos del DOM :
    let boton = document.getElementById('btnOperar');

    //Ascio manejador de evento
    boton.addEventListener('click' , calcularOperacion);

    let respuesta = document.getElementById('')


}


window.onload = init;