//Funcion global :

function ask(question , yes , no){

    if(confirm(question)) 
        
        yes()

    else 
            
        no();
};



//LLamada de la funcion
ask(
    "do you agree?",

    function(){alert("you agree");},
    function(){alert("you cancel the execution");}
);


//Funciones Arrow:

let askArrow = (question ,yes ,no) => {

     if(confirm(question)) 
        
        yes()

    else 
            
        no();

};

//Lamada de la funcion declarada como arrow y funciones como parametros de tipo arrow

askArrow(

    "do you agree?",

    //Permite ambas cosas
    () => alert("you agree"),
    () => {alert("you cancel the execution");}


);

//Funciones ternarias :

letArrowTernario = (question,yes, no) => confirm(question) ? yes() : no();




//Funcion inicializadora : 

let init = (e) =>{

    //Obtener elementos del DOM
};


//Init anonimo
let initAnonima = function(e){


};

window.onload = function(e){

    //Con funciona anonima
};



//Con funcion Arrow

window.onload = () => {
    //Con funcion Arrow
};