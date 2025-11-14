/*
//Uso bucle for :

let numeros = [1,2,3];



//Tamaño del array : 

console.log(numeros.length);

//Saber si un elmento e sun array :

console.log(Array.isArray(numeros));


//Metodo para añadir elementos :

numeros.push(4);
recorrer(numeros)

numeros.unshift(0);
recorrer(numeros);

//Generamos la suma de dos arrays diferentes : 

let numberArray = [1,2,3,4];
let StringyNumberArray = [1, "Hola" , 3 , "Pablo"];

*/
function sumarArrays(valor1 , valor2){


    function generarSuma(valor){


        let suma = 0;
        //Comprobamos que sea un array:

        if (Array.isArray(valor)) {

            //Recorro el array :
            for (let i of valor) {

                if (!isNaN(i)) {
                    
                    suma += i;
                }

                
            }


            
        }if (!isNaN(valor)) {

            suma += valor;
            
        }


        return suma;


    }

    ///hacemos la suma de los dos valores :
    let resulto = generarSuma(valor1) + generarSuma(valor2);

    return resulto;


}

let valor1 = sumarArrays("Pablo" , [4,6]);
console.log(valor1);

let valor2 = sumarArrays([1,2,3] , 7);
console.log(valor2);





