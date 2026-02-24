//app de tareas
require("colors")

const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const { inquirerMenu,pausa,leerInput} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

// console.clear()




const main=async()=>{

    let opt=""
    const tareas=new Tareas()


    //aqui usamos la funcion para leer las tareas
    const tareasDb=leerDb()

    if (tareasDb) {
        //establecer las tareas
        
    }

    await pausa()

    do {

        //imprimir menu con esta funcion
        opt=await inquirerMenu()

        switch (opt) {
            case "1":
                //aqui lee la entrada del usuario
                const desc=await leerInput("Descripción: ")
                //Crea la tarea pasandole la desc y la pasa al listado de tareas
                tareas.crearTarea(desc)
            break;

            case "2":
                console.log(tareas.listadoArr)
            break;
        
            
        }

        //guardamos la informacion en nuestro archivo de db
        // guardarDb(tareas.listadoArr)

        await pausa()
        
    } while (opt!=="0");

}



main()