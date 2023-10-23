/* Al iniciar la pagina */

function inicio() {
    

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

function temperaturas() {
    debugger
    function convertirTemperatura(valor, tipo) {
        switch (tipo) {
            case 1: // Fahrenheit
                return (valor - 32) * 5/9;
            case 2: // Kelvin
                return valor - 273.15;
            case 3: // Celsius
                return valor;
            default:
                return NaN; // Tipo de temperatura no válido
        }
    }

    let tipoTemp1, tipoTemp2, valorTemp1, valorTemp2;

    // Obtener el primer tipo de temperatura
    do {
        debugger;
        tipoTemp1 = parseInt(prompt("Escriba el número correspondiente al tipo de temperatura deseada (1 Fahrenheit | 2 Kelvin | 3 Celsius):"));

        if (isNaN(tipoTemp1) || tipoTemp1 <= 0 || tipoTemp1 >= 4) {
            alert("Ingrese un numero válido (1, 2 o 3) para continuar.");
        }
    } while (isNaN(tipoTemp1) || tipoTemp1 <= 0 || tipoTemp1 >= 4);

    // Obtener el valor de la primera temperatura
    valorTemp1 = parseFloat(prompt("Ingrese el valor de la primera temperatura:"));

    // Obtener el segundo tipo de temperatura
    do {
        debugger;
        tipoTemp2 = parseInt(prompt("Escriba el segundo número correspondiente al tipo de temperatura deseada (1 Fahrenheit | 2 Kelvin | 3 Celsius):"));

        if (isNaN(tipoTemp2) || tipoTemp2 <= 0 || tipoTemp2 >= 4) {
            alert("Ingrese un numero válido (1, 2 o 3) para continuar.");
        }
    } while (isNaN(tipoTemp2) || tipoTemp2 <= 0 || tipoTemp2 >= 4);

    // Obtener el valor de la segunda temperatura
    valorTemp2 = parseFloat(prompt("Ingrese el valor de la segunda temperatura:"));

    // Realizar las conversiones
    const resultado1 = convertirTemperatura(valorTemp1, tipoTemp1);
    const resultado2 = convertirTemperatura(valorTemp2, tipoTemp2);

    // Mostrar resultados
    alert(`Resultado 1: ${resultado1.toFixed(2)} grados Celsius`);
    alert(`Resultado 2: ${resultado2.toFixed(2)} grados Celsius`);
}





function conversion() {
    let monto = 0;
    let resultado = 0;
    monto = document.getElementById('cantidad').value;

    let bitcoin = 0;
    let resultadoBitcoin = 0;

  
    let posicion1 = document.getElementById('moneda1');
    let moneda1 = posicion1.options[posicion1.selectedIndex].value;

    let posicion2 = document.getElementById('moneda2');
    let moneda2 = posicion2.options[posicion2.selectedIndex].value;
    
    if (moneda1 == "-" || moneda2 == "-") {
        alert("Seleccione el tipo de moneda para realizar la conversión.")
    } else if (monto == "") {
        alert("Ingrese el monto para realizar la conversión")
    } else {


        if (moneda1 == "PA" && moneda2 == "PA") {

            document.getElementById("resultado").innerHTML = monto;
            resultadoBitcoin = monto * 0.000000090;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PA" && moneda2 == "PC") {
            resultado = monto * 2.67
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000000090;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PA" && moneda2 == "PM") {
            resultado = monto * 0.052
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000000090;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PA" && moneda2 == "D") {
            resultado = monto * 1030
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000000090;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;
        }

        /* Peso chileno */
        if (moneda1 == "PC" && moneda2 == "PC") {

            document.getElementById("resultado").innerHTML = monto
            resultadoBitcoin = monto * 0.000000034;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PC" && moneda2 == "PA") {
            resultado = monto * 0.37;
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000000034;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PC" && moneda2 == "PM") {
            resultado = monto * 0.019
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000000034;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PC" && moneda2 == "D") {
            resultado = monto * 0.0011
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000000034;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;
        }

        /* Peso México */

        if (moneda1 == "PM" && moneda2 == "PM") {

            document.getElementById("resultado").innerHTML = monto
            resultadoBitcoin = monto * 0.0000017
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PM" && moneda2 == "PA") {
            resultado = monto * 19.28;
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto *0.0000017
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PM" && moneda2 == "PC") {
            resultado = monto * 51.39
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.0000017
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "PM" && moneda2 == "D") {
            resultado = monto * 0.055;
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.0000017;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;
        }

        /* Dolar */
        if (moneda1 == "D" && moneda2 == "D") {

            document.getElementById("resultado").innerHTML = monto
            resultadoBitcoin = monto * 0.000031;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "D" && moneda2 == "PA") {
            resultado = monto * 1030;
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000031;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "D" && moneda2 == "PC") {
            resultado = monto * 932.98;
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000031;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;

        } else if (moneda1 == "D" && moneda2 == "PM") {
            resultado = monto * 18.16;
            document.getElementById("resultado").innerHTML = resultado
            resultadoBitcoin = monto * 0.000031;
            document.getElementById("bitcoin").innerHTML = resultadoBitcoin;
        }



    }

   

    



}