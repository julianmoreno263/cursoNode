
//el paquete fs ya viene con node
const fs=require("fs")
const colors=require("colors")


//para manejar esto pero con promesas puedo simplemente pasar esto a async y este ya me retorna una promesa,todo dentro de try catch para  manejar el error
const crearArchivo=async(base=5,listar=false,hasta=10)=>{
    let salida=""
    let consola=""

    try {
        
        for (let i = 0; i <=hasta; i++) {
                const resultado=base*i

                salida+=`${base} X ${i} = ${resultado}\n`
                consola+=`${base} ${'X'.green} ${i} ${'='.green} ${resultado}\n`

                
        }
        
        if (listar) {
            console.log(`${'------'.green} TABLA DEL ${colors.blue(base)} ${'------'.green}`)
            console.log(salida)
        }

        // console.log(salida)

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)

        return `tabla-${base}.txt`
        
    } catch (err) {
        throw err
    }

    
      
}



//asi exportamosla funcion de este archivo al app.js para poder llamarla desde alli y utilizarla
module.exports={
    crearArchivo
}


