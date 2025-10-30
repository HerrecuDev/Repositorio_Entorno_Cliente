

do {
    let n = Number(prompt("Introduce el número de asteriscos que desea , debe ser un numero entero positivo"))

    for (let i = 1; i <= n; i++) { //Imprime las columnas
       
        for (let j = 1; j <= i; j++) { //Imprime las filas
          
            document.write("*")
            
        }
        document.write("<br>");
        
    }

    




    
} while (isNaN(numero) || numero <= 0);