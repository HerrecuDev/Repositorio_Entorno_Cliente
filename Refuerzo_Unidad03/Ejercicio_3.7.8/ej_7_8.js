//Tabla de multiplicar del 1 al 5 :
let tabla = 5;

let tope = 10;
let resultado = "";

for (let i = tabla; i <= tabla; i++) {

    for (let j = 1; j <= tope ; j++) {
        
        resultado = `${i} x ${j} = ${i*j}`;

        console.log(resultado);
        
    }
   

    
}



//Dibujar cuadro de asteriscos de 4*4 :
let filaMostrar = ""; 

for (let fila = 0; fila < 4 ; fila++) {

    filaMostrar = ``;
   
    for (let columnas = 0; columnas < 4; columnas++) {


        filaMostrar += `*`;

    }

    console.log(`${filaMostrar} \n`)
   
}

