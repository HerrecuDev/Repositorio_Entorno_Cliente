//Funcion Global

    function mostrarDatos(result){

            console.log("***********************************");
            console.log(result);
            console.log("***********************************");

    }

    //Funcion de Expresión

    let mostrarDatosFuncDeclaracion = function(result){

        console.log("***********************************");
        console.log(result);
        console.log("***********************************");

        return;


    }

    //Funciones Arrow:

    let mostrarFuncArrow = (result) => {

        console.log("***********************************");
        console.log(result);
        console.log("***********************************");

        return;


    };



    //Pasamos los parametros del ejemplo propuesto como Arrrow function

miOpMat(`-` ,
        3,
        2,
        (op , op1 ,op2) => {

            switch (op) {
                case "+":
                    return op1 + op2;

                    break;

                case "-":
                        return op1 - op2;

                    break;

                case "*":
                    return op1 * op2;

                    break;

                case "/":
                    return op1 / op2;

                    break;

            
                default:
                    return 0;

                    break;
            }

        

        },
            (result) =>{
           
            console.log("***********************************");
            console.log(result);
            console.log("***********************************");

        },
        (error) => console.log(err)
    );