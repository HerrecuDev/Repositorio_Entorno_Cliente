function contadorPalabras(arrayIngresado){

    const mapaPalabras = new Map();

    arrayIngresado.array.forEach(palabra => {

        if (mapaPalabras.has(palabra)) {

            mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1)
            
        }else{
            mapaPalabras.set(palabra ,1);
        }
        
    });

    return mapaPalabras;

}


//Comenzamos a solicitar palabras al usuario:

let palabra = "";
const palabrasArray = [];
do {

    palabra = prompt("Escriba una palabra o nada si desea finalizar el programa");
    if (palabra != "") {

        palabrasArray.push(palabra.trim());
        
        
    }
    
} while (palabras != "");

//Realizamos el recuento de palabras:

const resultado = contadorPalabras(palabrasArray);

console.log(resultado)