
//el paquete fs ya viene con node
const fs=require("fs")


//para manejar esto pero con promesas puedo simplemente pasar esto a async y este ya me retorna una promesa,todo dentro de try catch para  manejar el error
const crearArchivo=async(base=5,listar=false)=>{
    let salida=""

    try {
        
        for (let i = 0; i <=10; i++) {
                const resultado=base*i

                salida+=`${base} x ${i} = ${resultado}\n`
                
        }
        
        if (listar) {
            console.log(`------ TABLA DEL ${base} --------`)
            console.log(salida)
        }

        // console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`,salida)

        return `tabla-${base}.txt`
        
    } catch (err) {
        throw err
    }

    
      
}



//asi exportamosla funcion de este archivo al app.js para poder llamarla desde alli y utilizarla
module.exports={
    crearArchivo
}


