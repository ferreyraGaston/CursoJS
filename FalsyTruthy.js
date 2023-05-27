/* *********************************************** */
/* ***************** Falsy y Truthy*************** */

//Falsy = false. 0, NaN, null, undefined,'',"", ``
//TRUTHY = Cualquier otra cosa

let dato= true
if(dato){
    console.log("Verdadero")
}
else{
    console.log("Falso")
}

//el proble si es un dato no existente o vacio lo toma como valido

let dato2= []
if(dato2){
    console.log("Verdadero")
}
else{
    console.log("Falso")
}

// en la funcion tenemos el mismo problema

function imprimir(array){
    console.log(array[0])
}
imprimir(0)

// Ejemplo 1: en la funcion tenemos el mismo problema

function imprimir2(array){
    if(array){
        console.log(array[0])
        console.log("Verdadero")
    }
    else{
        console.log("Falso")
    }

}
imprimir2([1])

// Ejemplo 2: en la funcion tenemos el mismo problema cuando encuentra u elemento vacio

function imprimir3(array){
    if(array){
        console.log(array[0])
        console.log("Verdadero")
    }
    else{
        console.log("Falso")
    }

}
imprimir3([])

// Solucion: indicamos quenos muestre solo losnumeros > a 0

function imprimir4(array){
    if(array && array>0){
        console.log(array[0])
        console.log("Verdadero")
    }
    else{
        console.log("Falso")
    }

}
imprimir4([])

// Solucion: para cuando tenemos un elemento con el valor de cero

function imprimir5(array){
    if(array !==null && array!==undefined){
        console.log(array[0])
        console.log("Verdadero")
    }
    else{
        console.log("Falso")
    }

}
imprimir5([])