 // Array de emails
    const usuarios = [];

    // Función para registrar usuario
    function registrarUsuario() {
      const email = document.getElementById("txtEmail").value.trim();
      const resultado = document.getElementById("resultadoRegistro");

      // Si el campo está vacío
      if (email === "") {
        resultado.innerHTML = "Por favor, introduce un email.";
        return;
      }

      // Comprobamos si el email ya está registrado
      if (usuarios.includes(email)) {
        resultado.innerHTML = "Error en Registro. Usuario ya registrado con email " + email;
      } else {
        usuarios.push(email); // Registramos el email
        resultado.innerHTML = "Usuario registrado con éxito con email " + email;
      }

      // Limpiamos el campo
      document.getElementById("txtEmail").value = "";
    }

    // Función para mostrar la lista de usuarios
    function mostrarListado() {
      const divListado = document.getElementById("listado");

      // Si no hay usuarios registrados
      if (usuarios.length === 0) {
        divListado.innerHTML = "No hay usuarios registrados.";
        return;
      }

      // Creamos la tabla
      let tabla = "<h3>Usuarios Registrados:</h3>";
      tabla += "<table border='1' cellspacing='0' cellpadding='5'>";
      tabla += "<tr><th>N°</th><th>Email</th></tr>";

      for (let i = 0; i < usuarios.length; i++) {
        tabla += "<tr><td>" + (i + 1) + "</td><td>" + usuarios[i] + "</td></tr>";
      }

      tabla += "</table>";

      // Mostramos la tabla en el div
      divListado.innerHTML = tabla;
    }

    // Asignamos los eventos a los botones
    document.getElementById("btnRegistro").onclick = registrarUsuario;
    document.getElementById("btnListadoRegistrados").onclick = mostrarListado;