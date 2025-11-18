let miOpMat = function(operador,operando1 ,operando2 ,callBackOperador, callbackResult, callbackError){

try {
    let resultado = callBackOperador(operador,operando1,operando2);
    callbackResult(resultado);
    
    
} catch (error) {
    callbackError(error);
}


};
function cbOperador(op , op1 ,op2){

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

    

}

function cbResultado(result){

    console.log(`el resultado es ${result}`);
}
function cbError(err){

    console.log(`Error${err}`);
}

//Llamadas :

miOpMat(`+` , 3,2,cbOperador ,cbResultado,cbError);
miOpMat(`-` , 3,2,cbOperador ,cbResultado,cbError);
miOpMat(`*` , 3,2,cbOperador ,cbResultado,cbError);



miOpMat(`-` ,
     3,
     2,
     cbOperador ,
     cbResultado,
     cbError
    );

    miOpMat(`-` ,
     3,
     2,
     cbOperador ,
     function (result){
        //Esta es una funcion callbsckResult anónima
        console.log("***********************************");
        console.log(result);
        console.log("***********************************");

     },
     cbError
    );