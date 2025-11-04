function sumInput(){

    let numero = Number(prompt("Escriba el numero que quiere introducir"));
    let numerosArray = [];

    let suma = 0;


    while (!isNaN(numero)) {


            numero = Number(prompt("Escriba el numero que quiere introducir"));

            if (isNaN(numero)) {
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