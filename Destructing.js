/* *********************************************** */
/* ************* Destructuring Arrays************* */
const nombres = ["Gastón","Fernando","Hernan","Guillermo"]

console.log(nombres)

const[a,b,c]= nombres
console.log(a)
console.log(b)
console.log(c)

/* *********************************************** */
/* ************ Destructuring Object ************* */

const Persona={
    nombre: "Gaston",
    apellido: "Ferreyra",
    edad: 43,
}

console.log(Persona.nombre)

const{nombre}= Persona
console.log(nombre)

// podemos darle un alias a la variable

const{apellido: Alias}= Persona
console.log(Alias)

/* *********************************************** */
/* ***** Funcion Destructuring Object ************ */
function imprimirPersona(persona){
    console.log(Persona.nombre)
    console.log(Persona.apellido)
}
imprimirPersona()

/* *********************************************** */
/* *********************************************** */

function imprimirPersona2({nombre,apellido}){
    console.log(nombre)
    console.log(apellido)
}
imprimirPersona2(Persona)