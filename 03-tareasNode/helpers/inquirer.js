const inquirer=require("inquirer");
const { validate } = require("uuid");

require("colors")


const preguntas=[
    {
        type:"list",
        name:"opcion",
        message:"¿Qué desea hacer?",
        choices:[
            {
                value:"1",
                name:`${'1'.green}. Crear tarea`
            },
            {
                value:"2",
                name:`${'2'.green}. Listar tareas`
            },
            {
                value:"3",
                name:`${'3'.green}. Listar tareas completadas`
            },
            {
                value:"4",
                name:`${'4'.green}. Listar tareas pendientes`
            },
            {
                value:"5",
                name:`${'5'.green}. Completar tarea(s)`
            },
            {
                value:"6",
                name:`${'6'.green}. Borrar tarea`
            },
            {
                value:"0",
                name:`${'0'.green}. Salir`
            },
        ]

    }
]


const inquirerMenu=async()=>{

    console.clear()
    console.log("=====================".green)
    console.log("SELECCIONE UNA OPCIÓN".white)
    console.log("=====================\n".green)


    const {opcion}=await inquirer.prompt(preguntas)

    return opcion


}

const pausa=async()=>{
    const preguntas=[
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.green} para continuar\n`
        }
    ]

    await inquirer.prompt(preguntas)

}

const leerInput=async(message)=>{
    const pregunta=[
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length===0) {
                    return "Por favor ingrese un valor"
                } 
                return true
            }
        }
    ]

    const{desc}=await inquirer.prompt(pregunta)

    return desc

}





module.exports={
    inquirerMenu,
    pausa,
    leerInput
}