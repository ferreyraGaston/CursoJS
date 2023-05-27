/* *********************************************** */
/* ************* Metodos y Arrays **************** */

const numeros = [0,1,2,3,4,5]
const nombres = ["Gastón","Fernando","Hernan","Guillermo"]

console.log(numeros)

// push: Agregar un elemento a un Arrays

numeros.push(-5,-4,-3,-2,-1)
console.log(numeros)

// JOIN: Une los elementos y los convierte en string

console.log(numeros.join("/"))
console.log(numeros.join("_"))
console.log(numeros.join("+"))
console.log(numeros.join("="))

// INCLUDE: indica si un elemento esta incluido en el Arrays

console.log(numeros)
console.log(numeros.includes(3))
// o
console.log(numeros.includes(8))


/* *********************************************** */
/* ********* A partir de aqui Callback *********** */

// FIND: busca un elemento y devuelve el valor solicitado

console.log(numeros)
const resultado = numeros.find(element => element ===2)
console.log(resultado)

const resultado2 = numeros.find(element => element ===200)
console.log(resultado2)

// tener en cuenta que devuelve el primer valor
console.log(numeros)
const resultado3 = numeros.find(element => element >2)
console.log(resultado3)

// FILTER: busca un elemento y devuelve el valor solicitado

console.log(numeros)
const resultado4 = numeros.filter(element => element >2)
console.log(resultado4)


// MAP: convierte el Arrays existenete en otro Arrays modificado

console.log(numeros)
const resultado5 = numeros.map(element => element *2)
console.log(resultado5)

const resultado6 = nombres.map(element => element.toLocaleUpperCase())
console.log(resultado6)

const resultado7 = nombres.map(element => element.toLocaleLowerCase())
console.log(resultado7)

// FOREACH: recorre el Array y en cada interaccion podemos realizar cambios.

console.log(numeros)

for (let i=0; i < numeros.length; i++){
    console.log("Index "+i+"= "+numeros[i])
    console.log(`Index ${i}= ${numeros[i]}`)
}

numeros.forEach((element, index)=>{
    console.log("Index "+index+"= "+element)
    console.log(`Index ${index}= ${element}`)
})