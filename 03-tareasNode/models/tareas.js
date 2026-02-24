const Tarea=require("./tarea")

class Tareas{

    _listado={}

    //como al mostrar el listado de tareas estamos mostrando el objeto _listado, no se ve muy bien en consola, entonces lo vamos a pasar a un array para poderlo visualizar mejor,que se vea mejor,para esto creamos una funcion getter de js, aqui lo que hago es barrer cada key del objeto _listado,para extraer esas llaves de ese objeto utilizamos Objec.keys(). Esto regresa un array,y puedo utilizar los metodos de los arrays para recorrerlo,por ejemplo el forEach(), esto es puro js.
    get listadoArr(){
        // const listado=[]
        // Object.keys(this._listado).forEach(key=>{
        //     //insertamos las tareas al listado[], con _listado[key] estoy extrayendo cada tarea del listado y lo almaceno en la const tarea y despues lo guardo en el nuevo array listado.
        //     const tarea=this._listado[key]
        //     listado.push(tarea)
        // })

        //esta es otra forma de hacerlo mas limpío en una sola linea,la de arriba es para mejorar la logica utilizando js. Esa línea de código es una forma muy elegante y moderna de convertir un objeto en un array, asegurándote de que el resultado sea una copia independiente utilizando spread operator y capturando los valores del objeto,no las llaves, del objeto _listado, y se retorna ese array con esos valores.
        const listado= [...Object.values(this._listado)]


        return listado
    }

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