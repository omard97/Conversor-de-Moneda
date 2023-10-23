/* Al iniciar la pagina */

function inicio() {
    // Solicitar el nombre al usuario

    let nombre = "";

    do {

        nombre = prompt("Bienvenido, escriba su nombre: ");

        if (nombre == "" || nombre == null) {
            alert("Ingrese su nombre para continuar.")
        }

    } while (nombre == "" || nombre == null)


    document.getElementById("nombre").innerHTML = nombre
}





function conversion() {
    let monto =0;
    let resultado=0;
    monto = document.getElementById('cantidad').value;

    debugger
    let posicion1 = document.getElementById('moneda1');
    let moneda1 = posicion1.options[posicion1.selectedIndex].value;

    let posicion2 = document.getElementById('moneda2');
    let moneda2 = posicion2.options[posicion2.selectedIndex].value;

    if(moneda1=="PA" && moneda2 == "PA"){

         document.getElementById("resultado").innerHTML = monto

    }else if(moneda1=="PA" && moneda2 == "PC"){
        resultado = monto * 2.67
        document.getElementById("resultado").innerHTML = resultado

    }else if(moneda1=="PA" && moneda2 == "PM"){
        resultado = monto * 0.052
        document.getElementById("resultado").innerHTML = resultado

    }else if(moneda1=="PA" && moneda2 == "D"){
        resultado = monto * 1030
        document.getElementById("resultado").innerHTML = resultado
    }

    /* Peso chileno */
    if(moneda1=="PC" && moneda2 == "PC"){

        document.getElementById("resultado").innerHTML = monto

   }else if(moneda1=="PC" && moneda2 == "PA"){
       resultado = monto * 0.37;
       document.getElementById("resultado").innerHTML = resultado

   }else if(moneda1=="PC" && moneda2 == "PM"){
       resultado = monto * 0.019
       document.getElementById("resultado").innerHTML = resultado

   }else if(moneda1=="PC" && moneda2 == "D"){
       resultado = monto * 0.0011
       document.getElementById("resultado").innerHTML = resultado
   }

   /* Peso México */




}