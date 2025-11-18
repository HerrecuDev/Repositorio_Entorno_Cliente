"user strict"
let age = prompt(`¿Que edad tienes?` , 18);

    if (checkAge(age)) {

        alert(`Acceso otorgado`);
        
    }else{
        alert(`Acceso denegado`);
    }

    function checkAge(age){

    if (age > 18){
            return true;
        }else{
            return confirm("¿Tienes permiso de tus padres?");

        }
}
