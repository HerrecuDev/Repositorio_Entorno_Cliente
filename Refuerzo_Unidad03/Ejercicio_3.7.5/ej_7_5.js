//Pedir al usuario que introduzca un numero :


let numeroUsuario ="";
do {

    numeroUsuario = Number(prompt("Escribe un número mayor que 0"));
    
} while (numeroUsuario < 0);

alert("CORRECTO HA INTRODUCIDO UN NUMERO MAYOR QUE 0");



//MOSTRAR LOS NUMEROS DEL 10 @ 1

let numero = 10;
let cadena = "";

do {

    cadena = cadena + " " + numero;
    numero--;

    
} while (numero >= 1);

console.log(cadena);