
//Funcon para recorrer el array :
function recorrer(array){
    let cadena ="";

    for (let i = 0; i < array.length; i++) {
        
        cadena = cadena + " " +  array[i];
        
    }

    console.log(cadena);

}

function primerElemento(array){
    elemento = "";

    elemento = array[0];

    console.log(elemento);


}
//Funcion para sacar ultimo elemento :
function ultimoElemento(array){
    elemento = "";

    elemento = array[array.length-1];

     console.log(elemento);

}


//ARRays con 5 frutas : 
let frutas = ["Pera","Manzana","Platano","Melon","Piña"];

recorrer(frutas);

let mezcla = ["numeros" , 5 , 20 , "Hola"];
recorrer(mezcla);

//Mostramos el primer y ultimo elemento :
primerElemento(frutas);
ultimoElemento(frutas);

primerElemento(mezcla);
ultimoElemento(mezcla);


