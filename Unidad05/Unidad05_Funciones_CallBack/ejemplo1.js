//Funcion CAllsback :

function ask(question , yes , no){

    if(confirm(question)) yes()
    
    else no();

}

function showOk(){

    alert("Estás de acuerdo");

}

function showCancel(){

    alert("Cancelaste la ejecucion");
    
}

ask("¿Estas de acuerdo? " , showOk,showCancel);