require("colors")

require('dotenv').config()

const { inquirerMenu,pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


console.clear()

const main=async()=>{

    const busquedas=new Busquedas()
    let opt=""

    do {

        //imprimir menu con esta funcion
        opt=await inquirerMenu()

        switch (opt) {
            case 1:
                //mostrar mensaje
                const termino=await leerInput("Ciudad: ")
                //buscar las ciudades
                const lugares=await busquedas.ciudad(termino)
                //seleccionar la ciudad
                const id=await listarLugares(lugares)
                const lugarSelec=lugares.find(l=>l.id===id)
                console.log(lugarSelec)

                //capturar clima de la ciudad

                //mostrar resultados
                console.log("\nInformación de la ciudad\n".green)
                console.log("Ciudad: ",lugarSelec.nombre)
                console.log("Lat: ",lugarSelec.lat)
                console.log("Lng: ",lugarSelec.lng)
                console.log("Temperatura: ",)
                console.log("Mínima: ",)
                console.log("Máxima: ",)


                break;
        
            default:
                break;
        }

        if (opt!==0) await pausa()
        
        
    } while (opt!==0);


}


main()