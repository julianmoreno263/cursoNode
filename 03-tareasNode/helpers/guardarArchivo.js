//archivo que guardara la informacion en la carpeta db simulando nuestra bd

const fs=require("fs");


const archivo="./db/data.json"


//funciones
const guardarDb=(data)=>{
    
    //se debe pasar la data(que es un array) a string para que no saque error
    fs.writeFileSync(archivo,JSON.stringify(data))
}

const leerDb=()=>{

    if (!fs.existsSync(archivo)) {
        return null
    }

    //si el archivo de la db si existe lo leemos, el encoding es para que no regrese la informacion en forma de bytes
    const info=fs.readFileSync(archivo,{encoding:"utf8"})
    //aqui paso la informacion del archivo db a un objeto porque en este punto sigue siendo un string(porque al grabar la info lo hacemos como string con JSON.stringify())
    const data=JSON.parse(info)
    console.log(data)

    return data
}





module.exports={
    guardarDb,
    leerDb
}