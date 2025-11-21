//Creo la funcion que nos dira si es par o impar el numero que pasemos

function informarNumeroPar_Impar(numero){

    if (numero % 2 == 0) {

        return(' es PAR');
        
    }else{
        return(' es IMPAR');
    }
    

}


//Ahora genero 500 numeros aleatorios y indico si son pares o impares:
//Primero abro el table :

    let mensaje = "";
    document.write("<table border = '1'><tr>")

    for (let i = 1; i <= 500; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 500 +1);
        let mensaje = "El numero " + numeroAleatorio + " " + informarNumeroPar_Impar(numeroAleatorio);
        
        document.write("<td>" + "[" + mensaje + "]" + "</td>")

        document.write("</tr><tr>");
        
    }

    document.write("<tr></table");
   
    
