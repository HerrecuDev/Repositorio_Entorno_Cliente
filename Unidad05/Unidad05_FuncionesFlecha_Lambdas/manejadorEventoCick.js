//function inicializadora :

function manejadorClickGlobal(e){

}

let init = (e) => {

    //obtener elementos del Dom


    //obtener la referencia del elemento DOM con id btnSumar
    let bntSumarElement = document.getElementById("btnSumar");


    //Asocio el manejador de evnetos

    bntSumarElement.addEventListener('click' , function(e){

        //manejador de evento anonimo

    });

    //manejador de evento con funcion global :
    bntSumarElement.addEventListener('click' , manejadorClickGlobal);

    //manejador de evento con arrow function

    bntSumarElement.addEventListener('click' , (e) =>{

    });


    //Funcion que maneja el evento window.onload(carga el DOM)
    window.onload = init;



}