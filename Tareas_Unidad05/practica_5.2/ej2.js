

//Variables
let filas = 10;
let columnas = 4;
let color = "black";

//Genero la funcion para pintar una tabla:

function pintarTabla(fila , columnas){

     document.write(`<table style="border-collapse: collapse; border: 3px solid ${color}; width: 100%;">`);

    for (let i = 0; i < fila; i++) {

        document.write("<tr>")

        for (let j = 0; j < columnas; j++) {
            
             document.write(`<td style="border: 1px solid ${color}; padding: 5px;">&nbsp;</td>`); // celda vacía
            
        }

         document.write("</tr>"); // cerramos fila
        
        
    }

     document.write("</table>"); // cerramos tabla

}

pintarTabla(filas,columnas);