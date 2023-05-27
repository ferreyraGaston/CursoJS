/* *********************************************** */
/* *******************Objetos********************* */
const persona={
    nombre: "Gaston",
    apellido: "Ferreyra",
    edad: 43,
    esMayorDeEdad: true,
    saludar: function(){
        console.log("Hola");
    }
}
console.log(persona)
/* ************** imprimo la funcion ************* */

console.log(persona.saludar());

/* ******* Acceder a una propiedad Forma 1 ******* */

const nombre= persona.nombre;
console.log(nombre)

/* ******* Acceder a una propiedad Forma 2 ******* */

const apellido= persona['apellido']
console.log(apellido)

/* ************ Modificar el contenido *********** */

persona.edad=50;
console.log(persona.edad)

/* ********** Agregar propiedades nuevas ********* */

persona.pais= "Argentina";
console.log(persona.pais)

console.log(persona)

/* *********** Eliminar una propiedades *********** */

delete persona.pais;
console.log(persona.pais)

console.log(persona)

/* *********** anidar forma agregar*********** */
persona.direccion= {
calle: "Santa fe",
numeracion: 700,
cp:5051,
}
console.log(persona.direccion)

console.log(persona)

/* *********** anidar dentro del objeto*********** */
const auto={
    modelo: 2020,
    marca: "fiat",
    dato:{
        numeroMotor: 2525252525,
        chasis: "2c455fsdsd",
    },
    color: "rojo"
}
console.log(auto)