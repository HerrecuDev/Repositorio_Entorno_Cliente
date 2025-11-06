"use strict"

/**Ejercicio 2
Crear un formulario. Solicitar al usuario el número de columnas y filas.
También el número máximo, que será un valor máximo, donde se 
generará un número aleatorio para cada celda entre 0 y el número máximo introducido por el usuario.
Las dimensiones máximas del array son 10 filas x 10 columnas.
Crear un botón que muestre el texto "mostrar matriz", y al hacer click se muestre dicha matriz calculada como una tabla html , 
donde cada celda contendrá el número entre 0 y el máximo solicitado al usuario. */

//Variables :
        let matrizUsuario = [];
        let columna = Number(0);
        let filas = Number(0);
        let numeroMax = Number(0);


function realizarMatriz(){
console.log("HOla");
        


        columna = Number(prompt("Escriba el numero de columnas que desea que tenga su matriz (MAXIMO SON 10)"));
        filas = Number(prompt("Escriba el numero de filas que desea que tenga su matriz (MAXIMO SON 10)"));
        numeroMax = Number(prompt("Escriba el numero MAXIMO que aparecera como valor en su matriz"));

        if (columna <=10 && filas <=10) {

             for (let i = 0; i < columna; i++) {

                matrizUsuario [i] = [];
                tablaHTML += `<tr>`;

                for (let j = 0; j < filas; j++) {

                    matrizUsuario[i][j] = Math.floor((Math.random() * numeroMax)+1);
                    
                     tablaHTML += `
                     <td>
                        <strong> ${matrizUsuario[i][j]} </strong>


                    <td>`;
                }

                 

            }

           
            tablaHTML += `</tr>`;
            console.log(matrizUsuario)



            let tablaHTML2 = `<tabla border="1">
            
            <tr>
                <td> 1 </td>
                <td> 2 </td>

            <tr>

             <tr>
                <td> 3 </td>
                <td> 4 </td>

            <tr>
            
            </table>`;

            
            
        }else{

            alert("Ha introducido mal el numero de filas o columnas MAXIMO SON 10")
        }

        


}

function init() {

var btnMatriz = document.getElementById("resultMatriz").innerHTML = tablaHTML;
   
    
}


window.onload = init;
    
