//Llamada a ask con funciones anonimas :

function ask(quiestion , yes , no){
    
    if(confirm(quiestion)) yes()
        else no();


}

ask(

    "Estas de acuerdo",
    function() {alert ("Estas de acuerdo");},
    function() {alert ("Cancelste la ejecución");}

);