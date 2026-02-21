//app de tareas
require("colors")

const { inquirerMenu,pausa} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear()

let opt=""

const main=async()=>{

    do {
        opt=await inquirerMenu()
        console.log({opt})

        await pausa()
        
    } while (opt!=="0");

}



main()