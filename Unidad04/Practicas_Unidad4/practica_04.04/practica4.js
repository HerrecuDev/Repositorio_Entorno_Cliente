 function calcularFrecuencias() {

    
      // Creamos un mapa vacío
      const frecuencias = new Map();

      // Inicializamos las claves (1 al 10) con valor 0
      for (let i = 1; i <= 10; i++) {
        frecuencias.set(i, 0);
      }

      // Generamos 10.000 números aleatorios
      for (let i = 0; i < 10000; i++) {
        const numero = Math.floor(Math.random() * 10) + 1;

        // Obtenemos la frecuencia actual de ese número
        const valorActual = frecuencias.get(numero);

        // Aumentamos en 1 y actualizamos el mapa
        frecuencias.set(numero, valorActual + 1);
      }

      // Mostramos los resultados en una tabla
      let html = "<table><tr><th>Número</th><th>Frecuencia</th></tr>";

      // Recorremos el mapa con for...of
      for (const [numero, frecuencia] of frecuencias) {
        html += `<tr><td>${numero}</td><td>${frecuencia}</td></tr>`;
      }

      html += "</table>";

      document.getElementById("resultado").innerHTML = html;
    }