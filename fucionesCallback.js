/* *********************************************** */
/* *************Funciones Callback**************** */

//es la capacidad de pasarno por parametros una fçuncion
//a otra funcion

//# Ejemplo

function saludar(texto){
    console.log(texto)
}
saludar("Hola");

/* *********************************************** */
/* *************Funciones Callback**************** */

function saludo(texto){
    texto();
}

function texto(){
    console.log("Hola")
}
saludo(texto);

/* *********************************************** */
/* ******Ejemplo Real de Funciones Callback******* */

const nummeros = [-1,0,1,2,3,4]

console.log(nummeros)
// los Arrays viene con metosçdos que podemos utlizar
// en este caso vamos a usar filter pero necesita que 
// intoduzcamos una funcion

function filtrarPositivo(element){
    return element>0;
}
console.log(filtrarPositivo(2))

// Opcion 1

console.log(nummeros.filter(filtrarPositivo))

// Opcion 2

console.log(nummeros.filter(function(n){
    return n<0
}))

// Opcion 1 tipo Flecha

const filtrarPositivo3= (elemnt)=>{
    return elemnt>0
}

// Opcion 2 tipo Flecha
const num = [-1,0,1,2,3,4]

const filtrarPositivo2= m => m>0;
console.log(num);
console.log(num.filter(m => m > 0))












