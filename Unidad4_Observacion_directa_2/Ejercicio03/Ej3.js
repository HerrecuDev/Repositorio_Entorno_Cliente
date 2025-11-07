//Igual que el ejercico anterior pero generamos un SET vacio :

const usuario = new set();

//Uso la misma funcion que antes de registrar usuarios :
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



    //Y lo mismo con la funcion para imprimir en una tabla los usuarios que se han registrado:

     function mostrarListado() {
      const divListado = document.getElementById("listado");

      if (usuarios.size === 0) {
        divListado.innerHTML = "No hay usuarios registrados.";
        return;
      }

      let tabla = "<h3>Usuarios Registrados:</h3>";
      tabla += "<table border='1' cellspacing='0' cellpadding='5'>";
      tabla += "<tr><th>N°</th><th>Email</th></tr>";

      let contador = 1;
      for (const email of usuarios) {
        tabla += "<tr><td>" + contador + "</td><td>" + email + "</td></tr>";
        contador++;
      }

      tabla += "</table>";
      divListado.innerHTML = tabla;
    }

    // Asignamos los eventos a los botones
    document.getElementById("btnRegistro").onclick = registrarUsuario;
    document.getElementById("btnListadoRegistrados").onclick = mostrarListado;