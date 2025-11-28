

//Genero una funcon para saber si un numero es primo o no
function esPrimo(numero){

    if (numero < 2) return false;

    for (let i = 2; i <= Math.sqrt(numero) ; i++) {
       
            if(numero % i == 0){
                return false ;
            }
        
    }
   
    return true;

}

//Escribo los numeros primo del 1 al 1000

    let mensaje = "";
    document.write("<table border = '1'><tr>")

    for (let i = 2; i <= 1000; i++) {
        if (esPrimo(i) == true) {

            mensaje =  i + " es un numero Primo"
            document.write("<td>" + "[" + mensaje + "]" + "</td>")
            
        }
        
        
        document.write("</tr><tr>");
        
    }

    document.write("<tr></table");
   