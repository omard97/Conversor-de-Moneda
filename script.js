/* Al iniciar la pagina */

function inicio() {
    // Solicitar el nombre al usuario

    let nombre = "";
    document.getElementById("resultado").innerHTML = 0;
    do {

        nombre = prompt("Bienvenido, escriba su nombre: ");

        if (nombre == "" || nombre == null) {
            alert("Ingrese su nombre para continuar.")
        }

    } while (nombre == "" || nombre == null)


    document.getElementById("nombre").innerHTML = nombre
}





function conversion() {
    let monto = 0;
    let resultado = 0;
    monto = document.getElementById('cantidad').value;

    debugger
    let posicion1 = document.getElementById('moneda1');
    let moneda1 = posicion1.options[posicion1.selectedIndex].value;

    let posicion2 = document.getElementById('moneda2');
    let moneda2 = posicion2.options[posicion2.selectedIndex].value;
    debugger
    if (moneda1 == "-" || moneda2 == "-") {
        alert("Seleccione el tipo de moneda para realizar la conversión.")
    } else if (monto == "") {
        alert("Ingrese el monto para realizar la conversión")
    } else {


        if (moneda1 == "PA" && moneda2 == "PA") {

            document.getElementById("resultado").innerHTML = monto

        } else if (moneda1 == "PA" && moneda2 == "PC") {
            resultado = monto * 2.67
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "PA" && moneda2 == "PM") {
            resultado = monto * 0.052
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "PA" && moneda2 == "D") {
            resultado = monto * 1030
            document.getElementById("resultado").innerHTML = resultado
        }

        /* Peso chileno */
        if (moneda1 == "PC" && moneda2 == "PC") {

            document.getElementById("resultado").innerHTML = monto

        } else if (moneda1 == "PC" && moneda2 == "PA") {
            resultado = monto * 0.37;
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "PC" && moneda2 == "PM") {
            resultado = monto * 0.019
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "PC" && moneda2 == "D") {
            resultado = monto * 0.0011
            document.getElementById("resultado").innerHTML = resultado
        }

        /* Peso México */

        if (moneda1 == "PM" && moneda2 == "PM") {

            document.getElementById("resultado").innerHTML = monto

        } else if (moneda1 == "PM" && moneda2 == "PA") {
            resultado = monto * 19.28;
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "PM" && moneda2 == "PC") {
            resultado = monto * 51.39
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "PM" && moneda2 == "D") {
            resultado = monto * 0.055;
            document.getElementById("resultado").innerHTML = resultado
        }

        /* Dolar */
        if (moneda1 == "D" && moneda2 == "D") {

            document.getElementById("resultado").innerHTML = monto

        } else if (moneda1 == "D" && moneda2 == "PA") {
            resultado = monto * 1030;
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "D" && moneda2 == "PC") {
            resultado = monto * 932.98;
            document.getElementById("resultado").innerHTML = resultado

        } else if (moneda1 == "D" && moneda2 == "PM") {
            resultado = monto * 18.16;
            document.getElementById("resultado").innerHTML = resultado
        }



    }



}