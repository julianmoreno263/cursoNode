//app de tareas
require("colors")

const { inquirerMenu,pausa,leerInput} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear()

let opt=""
const tareas=new Tareas()

const main=async()=>{

    do {
        opt=await inquirerMenu()

        switch (opt) {
            case "1":
                //aqui lee la entrada del usuario
                const desc=await leerInput("Descripción: ")
                //Crea la tarea pasandole la desc y la pasa al listado de tareas
                tareas.crearTarea(desc)
            break;

            case "2":
                console.log(tareas._listado)
            break;
        
            
        }

        await pausa()
        
    } while (opt!=="0");

}



main()