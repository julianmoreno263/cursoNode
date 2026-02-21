const Tarea=require("./tarea")

class Tareas{

    _listado={}

    constructor(){
        this._listado={}
    }

    crearTarea(desc){
        //creamos instancia de una tarea
        const tarea=new Tarea(desc)
        //la agregamos a la lista de tareas
        this._listado[tarea.id]=tarea
    }

}



module.exports=Tareas