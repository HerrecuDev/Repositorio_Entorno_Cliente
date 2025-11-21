//Defino las variables :

let canvas = document.getElementById("campo");
let ancho_canvas = canvas.width;
let alto_canvas = canvas.height;
let context = canvas.getContext("2d");


function principal(){

    canvas;
    ancho_canvas;
    alto_canvas;
    context;

    inicializa_parametros();
    keys = new KeyListener();
    bucle();

}

 function dibuja_campo(){

    context.fillStyle  = "red";
    context.clearRect(0, 0, ancho_canvas , alto_canvas)
    context.fillRect(ancho_canvas/2 , 0 , 2, alto_canvas);

}


function inicializa_parametros(){
    // Canvas campo
    canvas = document.getElementById("campo");
    ancho_canvas = canvas.width;
    alto_canvas = canvas.height;
    context = canvas.getContext("2d");
    // Parametros pelota
    x = ancho_canvas / 2;
    y = alto_canvas / 2;
    ancho_pelota = 14;
    alto_pelota = 14;
    inc_pelota = 1; // Avance de la pelota en cada iteracion
    incX = inc_pelota;
    incY = inc_pelota;


    //Parametros de la pala :

    separacion = 12;
    alto_pala = alto_canvas/5;
    ancho_pala = 10;
    inc_pala = 2; //posiciones que avanza cuando se mueve

    //Posiciones de las paletas de jugadores (IZQ | DER)

    jix = separacion;
    jiY = alto_canvas / 2 - alto_pala/2;

    jdx = ancho_canvas - separacion - ancho_pala;
    jdy = jiY;


    

}

//Ahora muestro ambas palas :

//Pala izquierda :

function dibuja_jugador(jix , jiY){

    context.fillStyle = "white";
    context.fillRect(jix, jiY , ancho_pala , alto_pala);
}
function dibuja_jugador(jdx , jdY){

    context.fillStyle = "white";
    context.fillRect(jdx, jdY , ancho_pala , alto_pala);
}


//Calculamos las coordenadas y cambio de incremento

function calcula_coordenadas_pelota(){
    x += incX;
    y += incY;

    if (x + ancho_pelota > ancho_canvas || x < 0) {

        incX = -incX;
        
    }
    if(y + alto_pelota > alto_canvas || y < 0){

        incY = -incY;
    }

}

//Dibujo la pelota:

function dibuja_pelota(x,y){
    context.fillStyle = "blue";
    context.fillRect(x,y,ancho_pelota ,alto_pelota);
}

//Movimientos de las palas KEY LISTENER: 

//Esta funcion es capaz de leer el documento y saber si pulsamos una tecla u otra.


function KeyListener() {
    this.pressedKeys = [];


    this.keydown = function (e) {
            this.pressedKeys[e.keyCode] = true;
    };

    this.keyup = function (e) {
        this.pressedKeys[e.keyCode] = false;
    };
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
}


KeyListener.prototype.isPressed = function (key) {
    return this.pressedKeys[key] ? true : false;
};




    // Caracteres que representan movimientos y controles
    CAR_I_ARRIBA_U = "A"; // Mover paleta izquierda arriba mayusculas

    CAR_I_ARRIBA_L = CAR_I_ARRIBA_U.toLowerCase(); // PI arriba minusculas
    CAR_I_ABAJO_U = "Z"; // Mover paleta izquierda abajo mayusculas
    CAR_I_ABAJO_L = CAR_I_ABAJO_U.toLowerCase(); // PI abajo minusculas
    CAR_D_ARRIBA_U = "K"; // Mover paleta derecha arriba mayusculas
    CAR_D_ARRIBA_L = CAR_D_ARRIBA_U.toLowerCase(); // PD arriba minusculas
    CAR_D_ABAJO_U = "M"; // Mover paleta derecha abajo mayusculas
    CAR_D_ABAJO_L = CAR_D_ABAJO_U.toLowerCase(); // PD abajo minusculas
    // KeyCode (Movimiento paletas)
    KEY_I_ARRIBA_U = CAR_I_ARRIBA_U.charCodeAt(0); // mayusculas
    KEY_I_ARRIBA_L = CAR_I_ARRIBA_L.charCodeAt(0); // minusculas
    KEY_I_ABAJO_U = CAR_I_ABAJO_U.charCodeAt(0); // Mayusculas
    KEY_I_ABAJO_L = CAR_I_ABAJO_L.charCodeAt(0); // minusculas
    KEY_D_ARRIBA_U = CAR_D_ARRIBA_U.charCodeAt(0); // Mayusculas
    KEY_D_ARRIBA_L = CAR_D_ARRIBA_L.charCodeAt(0); // Minusculas
    KEY_D_ABAJO_U = CAR_D_ABAJO_U.charCodeAt(0); // Mayusculas
    KEY_D_ABAJO_L = CAR_D_ABAJO_L.charCodeAt(0); // Minusculas
    // Inicializacion deteccion de pulsaciones para KeyCode
    PI_ARRIBA = false;
    PI_ABAJO = false;
    PD_ARRIBA = false;
    PD_ABAJO = false;

//COn esta funcion asignams cada tecla al MOVIMIENTO QUE QUEREMOS QUE REALICE LAS PALAS:
function controlar_pulsacion() {
    if (keys.isPressed( KEY_I_ABAJO_U || KEY_I_ABAJO_L)) { // Abajo Izq

        PI_ABAJO = true;

    } else if (keys.isPressed(KEY_I_ARRIBA_U || KEY_I_ARRIBA_L)) { //
       //ARRIBA IZQUIERDA

        PI_ARRIBA = true;
    }

    if (keys.isPressed(KEY_D_ABAJO_U || KEY_D_ABAJO_L)) { // Abajo Der
        PD_ABAJO = true;


    } else if (keys.isPressed(KEY_D_ARRIBA_U || KEY_D_ARRIBA_L)) { 
        //ARRIBA DERECHA

        PD_ARRIBA = true;

    }
    calcula_coordenadas_pala();
}

//Funcion para calcular las coordenadas donde se debe mover la pala
function calcula_coordenadas_pala() {
        if (PI_ARRIBA == true) {
            jiY -= inc_pala;

            if (jiY < 0) 
                jiY = 1;
            
            PI_ARRIBA = false;
        }

        if (PI_ABAJO == true) {
            jiY += inc_pala;

            if (jiY + alto_pala > alto_canvas) 
                jiY = alto_canvas - alto_pala;
            PI_ABAJO = false;
        }

        if (PD_ARRIBA == true) {
            jdY -= inc_pala;
            
            if (jdY < 0) 
                jdY = 1;
            PD_ARRIBA = false;

        }
        if (PD_ABAJO == true) {
            jdY += inc_pala;
            if (jdY + alto_pala > alto_canvas) 
                jdY = alto_canvas - alto_pala;
            PD_ABAJO = false;
        }
}



//Funcion para pintar cada elemeno una y otra vez:
function bucle(){

    dibuja_campo();
    calcula_coordenadas_pelota();
    controlar_pulsacion();
    dibuja_pelota(x,y);
    dibuja_jugador(jix ,jiY);
    dibuja_jugador(jdx,jdy);
    setTimeout(bucle ,4);
}

principal();


