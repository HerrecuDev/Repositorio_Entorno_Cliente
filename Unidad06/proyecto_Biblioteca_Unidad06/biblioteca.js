//Comenzamos a generar la biblioteca de objetos :

const biblioteca = {

    libros:[
        {titulo: "1984" , prestado: false , categoria:"Novela"},
        {titulo:"El principito" , prestado :false, categoria:"Infantil"}


    ],

    agregarLibro: function (titulo ,categoria){

        this.libros.push({titulo, prestado:false, categoria});
    },
    
    prestarLibro:function(titulo){

        const libro = this.libros.find(I=> I.titulo === titulo);

        if (libro && !libro.prestado) {

            libro.prestado = true;
        }
    },

    devolverLibro:function(titulo){

        const libro = this.libro.find(I= I.titulo === titulo);

        if (libro && libro.prestado) {

            libro.prestado = false;
            
        }
    },

    mostrarLibros: function(){

        this.libro.forEach(I=> {

            console.log(`${l.titulo} (${l.categoria}) - Prestado: ${l.prestado}`);

        });
    },

    mostrarLibrosDisponibles: function(){

        
        this.libros.filter(I => !I.prestado)
        .forEach(I= console.log(I.titulo));

    }, 

    buscarPorCategorias: function(cat){

        return this.libros.filter( I=> I.categoria === cat);

    }




   
};


