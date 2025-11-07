 // Función para comprobar que el nombre solo tiene letras minúsculas y números
    function nombreValido(nombre) {
      for (let i = 0; i < nombre.length; i++) {
        let c = nombre[i];
        // Si el carácter no es letra minúscula ni número, es inválido
        if (!((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))) {
          return false;
        }
      }
      return true;
    }

    // Función para validar la contraseña
    function contrasenaValida(contrasena) {
      let tieneMayus = false;
      let tieneMinus = false;
      let tieneNumero = false;
      let tieneOtro = false;

      for (let i = 0; i < contrasena.length; i++) {
        let c = contrasena[i];
        if (c >= 'A' && c <= 'Z') {
          tieneMayus = true;
        } else if (c >= 'a' && c <= 'z') {
          tieneMinus = true;
        } else if (c >= '0' && c <= '9') {
          tieneNumero = true;
        } else {
          tieneOtro = true;
        }
      }

      // La contraseña es válida si cumple al menos una de las condiciones
      return (tieneMayus || tieneMinus || tieneNumero || tieneOtro);
    }

    // Aquí comienza el programa principal
    let nombre = prompt("Introduce tu nombre de usuario (solo letras minúsculas y números):");

    if (nombre === null) {
      document.write("Has cancelado el registro.");
    } else {
      while (!nombreValido(nombre) || nombre === "") {
        nombre = prompt("Nombre inválido. Usa solo letras minúsculas (a-z) y números (0-9):");
        if (nombre === null) {
          document.write("Has cancelado el registro.");
          break;
        }
      }

      if (nombre !== null) {
        let contrasena = prompt("Introduce tu contraseña (visible):");

        if (contrasena === null) {
          document.write("Has cancelado el registro.");
        } else {
          while (!contrasenaValida(contrasena) || contrasena === "") {
            contrasena = prompt("Contraseña inválida.\nDebe tener al menos:\n- Una letra mayúscula\n- Una letra minúscula\n- Un número\n- Un carácter especial\n\nVuelve a intentarlo:");
            if (contrasena === null) {
              document.write("Has cancelado el registro.");
              break;
            }
          }

          if (contrasena !== null) {
            document.write("<h2>Registro completado correctamente</h2>");
            document.write("Usuario: " + nombre + "<br>");
            document.write("La contraseña cumple las condiciones requeridas.");
          }
        }
      }
    }