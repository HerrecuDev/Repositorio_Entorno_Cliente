/**Para este
ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar.
El primero, revertirArray, toma un array como argumento y produce
un nuevo array que tiene los mismos elementos pero en el orden
inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el
métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el
método reverse estándar. */

//Salida : /**console.log(revertirArray(["A", "B", "C"]));
// ["C", "B", "A"]; →



//let valorArray = [1, 2, 3, 4, 5];
//revertirArrayEnSuLugar(valorArray);
//console.log(valorArray);
// [5, 4, 3, 2, 1] → */



//Comenzamos el ejercicio :

function revertirArray() {

    const miArray = ["A" , "B" , "C","D","E" , "F" , "G","H"];
    const arrayInvertido = [];

    //Primero abro el table :
    document.write("<table border = '1'><tr>")

    for (let i = miArray.length-1; i >= 0; i--) {

        arrayInvertido.push(miArray[i]);
        
        document.write("<td>" + "[" + miArray[i] + "]" + "</td>")
        
    }

    document.write("<tr></table");
    return arrayInvertido

    
}

console.log(revertirArray());






//Ahora lo realizo e una funcion sin poner el array dentro :

function revertirArrayenSuLugar(arrayUsuario) {

    for (let i = 0; i < arrayUsuario.length / 2; i++) {

        let variableTemporal = arrayUsuario[i];

        //En esta primera el objeto en [0] pasa a la poscion [4]
        arrayUsuario[i] = arrayUsuario[arrayUsuario.length -1 -i];


        //Y en esta segunda linea el objeto [4] pasa a la posicion [0] que definimos al principio.
        arrayUsuario[arrayUsuario.length -1 -i] = variableTemporal;
        
    }

    return arrayUsuario;
    
}


//Genero el array variable constante y lo invertimos:

const arrayparaInvertir = [1,2,3,4,5];

revertirArrayenSuLugar(arrayparaInvertir);

console.log(arrayparaInvertir)