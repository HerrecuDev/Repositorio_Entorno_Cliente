

const contacto = {

    nombre: "Lucia",
    telefono: "666555444",
    email: "lucia@email.com",

    mostrar: function(){

        console.log("Nombre", this.nombre);
        console.log("Telefono", this.telefono);
        console.log("email", this.email);
    }



};

console.mostrar(); //Muestra todos los datos en consola




//Ejemplo2 : 

const mascota = {

    nombre:"Rocky",
    energia:5,

    comer:function(){

        this.energia +=2;
        console.log(this.nombre + "ha comida. Energía" , this.energia);
    },

    jugar:function(){

        if(this.energia > 0){

            this.energia -= 1;
            console.log(this.nombre + "esta jugando .Energia" , this);
        }else{

            console.log(this.nombre + "esta cansado");
        }


    }


};

mascota.comer();
mascota.jugar();