/**Ejercicio 2
Crear un formulario. Solicitar al usuario el número de columnas y filas.
También el número máximo, que será un valor máximo, donde se 
generará un número aleatorio para cada celda entre 0 y el número máximo introducido por el usuario.
Las dimensiones máximas del array son 10 filas x 10 columnas.
Crear un botón que muestre el texto "mostrar matriz", y al hacer click se muestre dicha matriz calculada como una tabla html , 
donde cada celda contendrá el número entre 0 y el máximo solicitado al usuario. */


//Variables :
let salir = false;
let columna = Number(0);
let filas = Number(0);
let numeroMAx = Number(0);


do {

    columna = Number(prompt("Escriba el numero de columnas que desea que tenga su matriz (MAXIMO SON 10)"));
    filas = Number(prompt("Escriba el numero de filas que desea que tenga su matriz (MAXIMO SON 10)"))
    numeroMAx = Number(prompt("Escriba el numero MAXIMO que aparecera como valor en su matriz"))


    for (let i = 0; i < columna; i++) {
        
        for (let j = 0; j < filas; j++) {
            
            
        }
        
    }



    
} while (salir != false);