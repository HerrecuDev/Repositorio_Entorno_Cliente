//Creacion de un objeto con metodos :

const perro ={

        nombre:"Rex",
        ladrar:function(){

            console.log("!Guau Guau!");
        }

};
  perro.ladrar(); //Muestra Guau Guau

  //Ejemplo 2: Metodo que usa this

  const usuario = {

    nombre:"Sara",
    saludar:function(){

        console.log("Hola me llamo" + this.nombre);
    }


  };

  usuario.saludar(); //Muestra:H Hola ,me llamo Sara



  //Ejemplo 3 : AÑadir metodos despues de crear el objeto

  const calculadora = {
    numero:10
  };

  calculadora.sumar = function(x){

    return this.numero+x;
  };

  console.log(calculadora.sumar(5)); //Muestra 15

  //Ejemlo 4 metodos con parametros 
  const robot = {
    encender:function(nombre){
        console.log("Hola " + nombre + "!Robot encendido");
    }
  };

  robot.encender("Juan"); //Muestra Hola Juan robot encendido




  