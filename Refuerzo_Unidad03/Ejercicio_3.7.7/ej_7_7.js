//Obtener un bucle del 1 @ 10 y que pare cuando sea 7 :


let numero = 1;
let cadena = "";

for (let i = numero; i <= 10; i++) {

    cadena = cadena + " " + i;

    if (i == 7) {
        break;
        
    }
    
}
console.log(cadena);


//PAra utilizar el continue y que funcione cuando le indiquemos :

let impar = 1;
let recorrer = "";

for (let j = impar; j <=10; j++) {
   

    if ((j %2) == 0) continue;

    recorrer = recorrer + " " + j;
        
    
    
}
console.log(recorrer)
