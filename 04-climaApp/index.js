require("colors")

const { inquirerMenu,pausa, leerInput } = require("./helpers/inquirer");
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
                const lugar=await leerInput("Ciudad: ")
                console.log(lugar)

                //buscar las ciudades

                //seleccionar la ciudad

                //capturar clima de la ciudad

                //mostrar resultados
                console.log("\nInformación de la ciudad\n".green)
                console.log("Ciudad: ",)
                console.log("Lat: ",)
                console.log("Lng: ",)
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