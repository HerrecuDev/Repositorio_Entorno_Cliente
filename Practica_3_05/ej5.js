/*DATOS SOLICITADOS POR PANTALLA AL USUSUARIO*/

let nombre = prompt("Escriba su nombre");
let apellidos = prompt("Escriba sus apellidos");
let edad = Number (prompt("escriba su edad"));
let salario = Number (prompt("Escriba su salario"));

let mensaje = "";
let salarioConLaSubida = 0;

//Comenzamos a realizar las filtraciones :

if (salario >1000 && salario < 2000) {

    if (edad > 45) {
         salarioConLaSubida = Number(salario + salario*0.03);
    }else{
        salarioConLaSubida = Number(salario + salario*0.10);
    }

   

}

else if (salario < 1000) {

    if (edad < 30) {

        salario = 1100;

    }
    else if(edad > 30 && edad < 45){
       salarioConLaSubida = Number(salario + salario*0.03);
    }
    else{
       salarioConLaSubida = Number(salario + salario*0.15);


    }

   
        
    
}else{
    alert("El salario no tiene ninguna modificacion debido a que es  mayor de 2000€")
}

document.write(

    `<p> Persona :${nombre}  ${apellidos} Edad : ${edad} años. Su salario total con la subida =  ${salarioConLaSubida}</p>`



)





