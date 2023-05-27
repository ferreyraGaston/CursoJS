/* *********************************************** */
/* ************ Valor y Referencia *************** */

// Ejemplo 1:
function duplicar(n){
    return n*2
}
// Dato primitivo: number, string, null, undefined, boolean
let n=2
const multiplicar = duplicar(n)

console.log(n)
console.log(multiplicar)

// Dato No primitivo: objects, arrays, function
const numeros = [1,2,3]

function agregar(array,nuevo){
    let array2=array
    array2.push(nuevo)
    return array2
}
const numero2=agregar(numeros,100)
console.log(numero2)

//El problema es al imprimir el array original porque tambien quedo afectado
console.log(numeros)

