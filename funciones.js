/* *********************************************** */
/* **********funciones por declaracion************ */
function saludar(){
    console.log("Hola Mundo")
}

saludar();
/* *********************************************** */
/* **********funciones por declaracion************ */
function sumar(n1,n2){
    console.log(n1+n2)
}

sumar(2,4);

/* *********************************************** */
/* ************funciones por expresión************ */

let multiplicar = function(num1, num2) {
    return num1 * num2;
    }
    let resultado = multiplicar(5, 3);
    console.log("El resultado es: " + resultado);

/* *********************************************** */