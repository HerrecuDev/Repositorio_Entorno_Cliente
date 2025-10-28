/*DATOS SOLICITADOS POR PANTALLA AL USUSUARIO*/

let nombre = prompt("Escriba su nombre");
let apellidos = prompt("Escriba sus apellidos");
let edad = prompt("escriba su edad");
let salario = prompt("Escriba su salario");

let mensaje = "";
let salarioConLaSubida = "";

//Comenzamos a realizar las filtraciones :

if (salario >1000 && salario < 2000) {

    if (edad > 45) {
         salarioConLaSubida = salario + salario*0.03;
    }else{
        salarioConLaSubida = salario + salario*0.10;
    }

   

}

else if (salario < 1000) {

    if (edad < 30) {

        salario = 1100;

    }
    else if(edad > 30 && edad < 45){
       salarioConLaSubida = salario + salario*0.03;
    }
    else{
       salarioConLaSubida = salario + salario*0.15;


    }

   
        
    
}else{
    alert("El salario no tiene ninguna modificacion debido a que es  mayor de 2000€")
}

document.write(

    `<p> Persona :${nombre} ${apellidos} ${edad} ${salarioConLaSubida}</p>`



)





