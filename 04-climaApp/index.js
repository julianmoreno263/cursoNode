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
                if(id==="0") continue //esto evita que haya un error si se pone 0 en la busqueda de ciudad
                const lugarSelec=lugares.find(l=>l.id===id)
                //grabar en db
                busquedas.agregarHistorial(lugarSelec.nombre)

                //capturar clima de la ciudad,debo pasar los datos de lat y lng de la ciudad elegida
                const clima=await busquedas.climaCiudad(lugarSelec.lat,lugarSelec.lng)

                //mostrar resultados
                console.clear()
                console.log("\nInformación de la ciudad\n".green)
                console.log("Ciudad: ",lugarSelec.nombre.green)
                console.log("Lat: ",lugarSelec.lat)
                console.log("Lng: ",lugarSelec.lng)
                console.log("Temperatura: ",clima.temp)
                console.log("Mínima: ",clima.min)
                console.log("Máxima: ",clima.max)
                console.log("Como está el clima? ",clima.desc.green)
                break;

            case 2:
                busquedas.historial.forEach((ciudad,i)=>{
                    const idx=`${i+1}.`.green
                    console.log(`${idx} ${ciudad}`)
                })

                break;
        
            default:
                break;
        }

        if (opt!==0) await pausa()
        
        
    } while (opt!==0);


}


main()