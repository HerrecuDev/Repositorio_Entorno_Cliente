
let numero;
let n_Aleatorio = Number(Math.floor(Math.random() * 1000) +1)

console.log(n_Aleatorio)
let salir = false



do {

    numero = Number(prompt("¿Que numero del 1 @ 1.000 crees que he pensado  (Introduzca 0 para Salir)"));

    if (numero == 0) {

        alert("ha solicitado salir del juego")
        salir = true;
        
    }
    else if(isNaN(numero) || numero < 0 || numero > 1000 ){

        alert("El numero debe estar entre 1 y 1000")
    }
    else if (numero != n_Aleatorio && numero > n_Aleatorio) {
        alert("El numero que ha introducido es mayor que el numero que debe adivinar")
        
    }
    else if( numero != n_Aleatorio && numero < n_Aleatorio){

        alert("El numero que ha introducido es menor que el numero que debe adivinar")
    }
    else{
        alert("Enhorabuena ha acertado el numero")
        salir = true;

    }



    
} while (!salir);