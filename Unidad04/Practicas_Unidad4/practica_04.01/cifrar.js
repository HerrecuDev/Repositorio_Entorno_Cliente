let texto = prompt("Escriba el texto que desea cifrar");

let clave;


do {

    clave = prompt("Escriba la clave (un numero entero)")

    if (isNaN(Number(clave))) {

        alert("No ha escrito ningun numero")
        
    }
    
} while (isNaN(Number(clave)));

clave = parseInt(clave);  //Quita los decimales

for(let letra of texto){

    let cifra = letra.charCodeAt(letra) + clave;

    document.write(String.fromCharCode(cifra))
}