

//Genero un do while para pedir palabras hasta que no se escriba nada

let palabra = "";
const setPalabras = new Set();
let listaPalabras = [];

do {

     palabra = prompt("Escriba una palabra o nada si desea finalizar programa");

    if (palabra != "") {
        setPalabras.add(palabra);
    }
    

    listaPalabras = [...setPalabras];
    listaPalabras.sort((a ,b) => b.toLowerCase().localeCompare(a.toLowerCase));

} while (palabra != "");


//Una vez finaliza el programa imprimo el array:
console.log("El programa ha sido finalizado")
// Mostramos el array
console.log("Palabras ordenadas inversamente:", listaPalabras);