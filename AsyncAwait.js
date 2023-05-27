/* *********************************************** */
/* *************** Async / Await ***************** */

//Async/Await nos presenta una alternativa al consumir una promesa
//el unico incoveniente es que el codigo va a estar frenado hasta que cumpla la promesa

// simulamos una API para ahcer la  prueba

function paisesAPI(error){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const paises = ["Argentina", "Perú"];
        if (error) {
            reject("Error al obtener los países");       
        } else {
            resolve(paises);
        }
        },0)
        
    });
}

async function main(){
    const verPaises= await paisesAPI(false)
    console.log(verPaises)
}
main()

// Para atrapar el error utilizaremos el Try & Catch
async function main2(){
    try{
        const verPaises= await paisesAPI(true)
        console.log(verPaises)
    }
    catch(error){
        console.log(error)
    }
}
main2()