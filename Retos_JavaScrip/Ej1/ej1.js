/**Enunciado:
Crea un programa que convierta una cantidad ingresada por el usuario en euros a otra moneda (por
ejemplo, dólares y libras). */

//Variables constantes:
const cambio_Dolares = 1.10;
const cambio_Libras = 0.89;

//Variables genericas
let dolares;
let libras;

let euros = prompt("Introduce el importe que desea calcular :");
parseFloat(euros)


 if (isNaN(euros)) {

    alert("Cantidad introducida erronea")
    
 } else {

    dolares = euros * cambio_Dolares;
    libras = euros * cambio_Libras;

    //Le indico que imprima solo 2 decimales :
    dolares = dolares.toFixed(2);
    libras = libras.toFixed(2);
 }

 alert(
   "Los " + euros + "€ equivalen a " + dolares + "$ y " + libras + " libras" 

 );
 