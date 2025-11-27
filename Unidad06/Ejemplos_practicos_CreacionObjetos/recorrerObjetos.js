//Para recorrer un objeto: 

//Mostrar todas las propiedades y valores de un objeto 
const persona = {

    nombre: "Lucas",
    edad: 30,
    cudad:"Sevilla"
};

//De esta forma recorremos todos los datos del objeto:
    for (let clave in persona) {

        console.log(clave + " : " + persona[clave]);
        
    }