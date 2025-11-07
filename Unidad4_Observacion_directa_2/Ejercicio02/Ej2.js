const usuarios = new Map();
    let contador = 0; 

    // Uso la misma funcion que en el ejericio 1 para registar usuarios
    function registrarUsuario() {
      const email = document.getElementById("txtEmail").value.trim();
      const resultado = document.getElementById("resultadoRegistro");

      // Validamos que el campo no esté vacío
      if (email === "") {
        resultado.innerHTML = "Por favor, introduce un email.";
        return;
      }

      // Comprobamos si el email ya está en el Map
      if (usuarios.has(email)) {
        resultado.innerHTML = "Error en Registro. Usuario ya registrado con email " + email;
      } else {
        contador++; 

        usuarios.set(email, contador); // Guardamos el email como clave y su orden como valor
        resultado.innerHTML = "Usuario registrado con éxito con email " + email;
      }

      // Limpiamos el campo de texto
      document.getElementById("txtEmail").value = "";
    }

    // Función para mostrar el listado
    function mostrarListado() {
      const divListado = document.getElementById("listado");

      if (usuarios.size === 0) {
        divListado.innerHTML = "No hay usuarios registrados.";
        return;
      }

      let tabla = "<h3>Usuarios Registrados:</h3>";
      tabla += "<table border='1' cellspacing='0' cellpadding='5'>";
      tabla += "<tr><th>N°</th><th>Email</th></tr>";

      // Recorremos el Map
      for (const [email, numero] of usuarios) {
        tabla += "<tr><td>" + numero + "</td><td>" + email + "</td></tr>";
      }

      tabla += "</table>";
      divListado.innerHTML = tabla;
    }

    // Asignamos los botones
    document.getElementById("btnRegistro").onclick = registrarUsuario;
    document.getElementById("btnListadoRegistrados").onclick = mostrarListado;