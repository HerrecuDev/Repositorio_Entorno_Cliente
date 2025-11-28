// Función que genera una combinación de 6 números distintos del 1 al 49
    function generarCombinacion() {
      const numeros = []; // Aquí guardaremos los 6 números
      
      // Mientras tengamos menos de 6 números, seguimos generando
      while (numeros.length < 6) {
        
        let numero = Math.floor(Math.random() * 49) + 1;
        
        // Solo añadimos el número si no está ya en la lista
        if (!numeros.includes(numero)) {
          numeros.push( "["+ numero + "]");
        }
      }

      
      return numeros;
    }



    //Genero la variable que contabilice el numero de comabinaciones creadas :
    let combinaciones = 0;

    for (let i = 0; i < 50; i++) {
       

        document.write( "Combinacion " + (i+1) +" :" + generarCombinacion()+ "<br>")

        
    }