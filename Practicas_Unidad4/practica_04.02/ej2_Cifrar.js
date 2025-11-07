//Variables :

let texto;
let clave;
let i;//Para recorrer las cifras de la clave



    texto =  prompt("Escriba el texto que desea cifrar");
    clave = prompt("Escriba la clave (una serie de números)")
    i = 0;


    if (isNaN(Number(clave))) {

        alert("No ha escrito ningun numero en la clave");
        
    }
    else{

            for(let letra of texto){

                console.log("Hola");
                    let cifra = letra.charCodeAt(letra)+Number(clave.charAt(i));

                    document.write(String.fromCharCode(cifra));

                    i++;
                    if(i==clave.length) i=0;


            }

    }
    


