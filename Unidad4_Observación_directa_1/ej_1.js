/*Ejercicio 1
Matriz de dimensiones 3x3 que tenga su diagonal principal con valores 1.
Escribir la matriz por consola.
*/



//Variables :
let matriz = [];

//Con dos bucles for anidados genero mi matriz :

for (let i = 0;i < 3;i++) {

    matriz[i] = []; //Vamos creando las filas
   
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            matriz[i][j] = 1; //Para que en la diagonal principal los valores sean 1.

            
        }
        else{

            matriz[i][j] = 0;
        }
       

        
    }
    
}

console.log(matriz);


