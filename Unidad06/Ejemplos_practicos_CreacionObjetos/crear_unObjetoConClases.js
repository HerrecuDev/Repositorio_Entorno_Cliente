///Creacion de objetos con clases

class Persona{

    contructor(nombre,edad){

        this.nombre = nombre;
        this.edad = edad;
    }

}
const persona1 = new Persona("Maria" , 28);

console.log(persona1.nombre);  //Imprime el nombre Maria



//Ejemplo 2 AÑadir metodos a la clase

class Animal{

    contructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola , soy un animal y me llamo" + this.nombre);
    }

}

const perro = new Animal("Luna");

perro.saludar(); //Muestra: Hola soy un animal y me llamo Luna

//Ejemplo 3 :Crear varias instancias

const gato = new Animal("Silvestre");
const loro = new Animal("Pepe");

gato.saludar();
loro.saludar(); //Muestra HOla soy un animal y me llamo PEPE




