//app de tareas
require("colors")

const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const { inquirerMenu,pausa,leerInput,listadoTareasBorrar,confirmar,mostrarListadoCheckList} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

// console.clear()




const main=async()=>{

    let opt=""
    const tareas=new Tareas()


    //aqui usamos la funcion para leer las tareas
    const tareasDb=leerDb()

    if (tareasDb) {
        //TODO:cargarTareas
        tareas.cargarTareasFromArray(tareasDb)
        
    }


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
                tareas.listadoCompleto()
            break;

            case "3"://listar completadas
                tareas.listarPendientesCompletadas(true)
            break;

            case "4"://listar pendientes
                tareas.listarPendientesCompletadas(false)
            break;

            case "5"://completado | pendiente
                const ids=await mostrarListadoCheckList(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
            break;

            case "6"://borrar tarea
                const id=await listadoTareasBorrar(tareas.listadoArr)
                if (id!=="0") {
                    //preguntar si esta seguro de borrar
                    const ok=await confirmar("¿Está seguro?")
                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log("Tarea borrada")
                    }
                }
                
            break;
        
            
        }

        //guardamos la informacion en nuestro archivo de db
        guardarDb(tareas.listadoArr)

        await pausa()
        
    } while (opt!=="0");

}



main()