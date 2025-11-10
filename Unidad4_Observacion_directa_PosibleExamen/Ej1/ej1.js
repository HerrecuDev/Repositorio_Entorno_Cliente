/*La suma de un rango
La introducción de este libro aludía a lo siguiente como una buena
forma de calcular la suma de un rango de números:
console.log(suma(rango(1, 10)));


Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta
(e incluyendo) final.Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.
Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de “paso” utilizado
para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo alcomportamieto anterior. La llamada a la función rango(1, 10,

2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione
con valores de pasos negativos para que rango(5, 2, -1) produzca [5,
4, 3, 2].
// Tu código aquí.
console.log(rango(1, 10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] →
console.log(rango(5, 2, -1));
// [5, 4, 3, 2] →
console.log(sum(rango(1, 10)));
// 55 →*/




/**COMENZAMOS EL EJERCICIO : */



//Genero una funcion para rellenar el array:

function rellenarArray(){

    const numerosArray = [];

    for (let i = 1; i <= 10; i++) {
        
        numerosArray.push(i);
        
    }

    return numerosArray;


}


//Primero recorro el Array completo :
console.log(rellenarArray())



//Ahora genero la funcion rango:

function rangoArray(inicio ,fin ,paso) {

   const numerosArray = [];

   if (paso == 0) throw new Error("El paso no puede ser igual a 0");

   if (paso > 0) {

        for (let i = inicio; i <= fin; i+= paso) {
            
            numerosArray.push(i);
            
        }
    
   }
   else{

        for (let i = inicio; i >= fin; i+=paso) {
       
        numerosArray.push(i);

        
        }

   }

    

    return numerosArray;
    
}


console.log("El array de rango es = " + rangoArray(5,2,-4))



//Genero la funcion ArraySuma:

function sumaArray(inicio,fin) {

   
    let sumaArray = 0;

    for (let i = inicio; i <= fin; i++) {
       
        sumaArray += i;

        
    }

    
    return sumaArray;

}

console.log("La suma de todos los elementos del Array = " + sumaArray(1,10));






