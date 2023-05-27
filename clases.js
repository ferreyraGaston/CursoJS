/* *********************************************** */
/* *******************Clases********************* */
//es una especie de molde que nos ayuda a crear objetos
//respetando la misma estructura a la hora de crearlo

class Moto{
    //atributos
    color;
    marca;
    modelo;
    km;
}

// para generar el objeto necesitamos
// new Moto();

// lo guardamos en una variable

const moto = new Moto();
console.log(moto)

/* *********************************************** */
/* *******************Clases********************** */

class Auto{
    //atributos
    color= "Azul";
    marca= "Fiat";
    modelo= 2022;
    km=0;
}

const auto = new Auto();
const auto2 = new Auto();

console.log(auto)
console.log(auto2)

/* *********************************************** */
/* *******************Clases********************** */

class Auto2{
    //atributos
    color= "Azul";
    marca= "Fiat";
    modelo= 2022;
    km=0;

    constructor(color,marca){
        this.color=color;
        this.marca=marca;
    }
}

const auto3 = new Auto2("Blanco","Fiat");
const auto4 = new Auto2("Rojo","Renault");

console.log(auto3)
console.log(auto4)

/* *********************************************** */
/* *******************Clases********************** */

class Auto3{
    //atributos
    color= "Azul";
    marca= "Fiat";
    modelo= 2022;
    km=0;
    velocidad=0;
    //Constructor
    constructor(color,marca){
        this.color=color;
        this.marca=marca;
    }

    //Metodo
    acelerar(){
        console.log("Acelerando.....")
        this.velocidad=this.velocidad+10;
    }
    frenar(){
        console.log("Frenando.....")
        this.velocidad=this.velocidad-10;
    }
}

const auto5 = new Auto3("Blanco","Fiat");

auto5.acelerar();
auto5.frenar();

/* *********************************************** */
/* *******************Herencia******************** */

class Persona{
    nombre;
    apellido;

    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}

class Trabajador extends Persona{
    empresas;

    constructor(empresas,nombre,apellido){
        super(nombre,apellido);
        this.empresas=empresas
    }
}

const trabajador=new Trabajador("HF Desarrollo","Gastón","Ferreyra")

console.log(trabajador)

