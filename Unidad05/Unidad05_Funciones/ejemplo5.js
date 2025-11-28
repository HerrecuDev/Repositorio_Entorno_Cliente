function showMessage(from,text = "sin texto"){

   alert(from + ":" + text)


}

showMessage("Ann"); //Ann : sin texto




function showMessage2(from,text = anotherFunction()){

    //anotherFunction() solo se ejecuta si text no fue asignado
    //su relsultado se convierte en valor texto


}

showMessage2("Ann")