function recorrer(array){
    let cadena ="";

    for (let i = 0; i < array.length; i++) {
        
        cadena = cadena + " " +  array[i];
        
    }

    console.log(cadena);

}

//Mezclar Arrays :

let numeros = [1,2,3,4];
let masNumeros = [5,6];

let combinado = numeros.concat(masNumeros);


