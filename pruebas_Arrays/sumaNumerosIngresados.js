function sumInput(){

    let numerosArray = [];
    let numero = 0;
    

    let suma = 0;


    while (!Number(isNaN(numero))) {


            numero = Number(prompt("Escriba el numero que quiere introducir"));

            if (Number(isNaN(numero))) {
                alert("El elemento introducido no es un numero!!")
                
            }
            else{

                numerosArray.push(numero);
                
                suma += numero;
            }

        
    }

    console.log("El array es = " , numerosArray);
    console.log("La suma de los elementos del array = " , suma)

   


}

sumInput();