/* *********************************************** */
/* ****************** Promesas ******************* */

// nos sirve para ayudar manejar las operaciones asincronas
// esto hace que se ejecute en paralelo hasta obtener una respuesta
// no permitiendo bloquear el hilo principal de ejecucion, lo hace en paralelo
// por ejemplo obtener datos de una API.

/* Las promesas poseen tres estados:
    -Pending: es cuando se ejecuta, se hace la petición
    -Fulfilled: esto es cuando la promesa esta cumplida
    -Rejected: es cuando no se cumple la promesa por el motivo que sea.
*/

function getCountriesFromAPI(error) {
    return new Promise((resolve, reject) => {
        console.log("Hola Mundo");
        const paises = ["Argentina", "Perú"];
        if (paises.length > 0) {
            resolve(paises);
        } else {
            reject("Error al obtener los países");
        }
    });
}

const promisePaises = getCountriesFromAPI();

promisePaises
    .then((paises) => {
        console.log(paises);
    })
    .catch((error) => {
        console.log(error);
    });



