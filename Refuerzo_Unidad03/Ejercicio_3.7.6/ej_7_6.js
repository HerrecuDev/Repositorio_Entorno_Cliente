//MOSTRAMOS LOS NUMEROS PARES DEL 2 AL 20:

let numero = 2;
let cadena = "";

for (let i = numero; i <= 20; i++) {
    
    if ((i % 2) == 0) {

        cadena = cadena + " " + i;
        
    }

    
}

console.log(cadena);



//CAlcular la suma de los primeros 50 numeros naturales :

let natural = 0;
let ultimoNumeroNatural = 50
let suma = 0;

for (let i = 0; i < ultimoNumeroNatural; i++) {
    

    suma += i;
}

console.log(suma);