const fs=require("fs")

const axios = require('axios');


class Busquedas{

    historial=[]
    dbPath="./db/database.json"

    constructor(){
        //leer db si existe
    }

    //funcion getter para traer los params de la api
    get paramsMaptiler(){
        return {
            "language":"es",
            "limit":3,
            "key": process.env.MAPTILER_KEY
        }
    }

    //funcion getter para traer los params de la api openWeather
    get paramsOpenWeather(){
        return {
            "appid": process.env.OPENWEATHER_KEY,
            "units":"metric",
            "lang":"es"
        }
    }

    //metodo para buscar una ciudad
    async ciudad(lugar=[]){

        try {
            //peticion http, debo pasarle como headers la api key que exige esta url(esto lo exige el sitio web,la url)
            // const config = {
            //     headers: {
            //         'x-api-key': 'free_user_3CoRbI76DIWyLF4BgaSdgeGXiTs'
            //     }
            // }
            // const res=await axios.get("https://api.maptiler.com/geocoding/municipality.128047.json?language=es&limit=3&key=PPXWc70m2Hvh1S8hKHJc")

            //asi construimos mejor la peticion utilizando la API de geolocalizacion maptiler
            const instance=axios.create({
                baseURL: `https://api.maptiler.com/geocoding/${lugar}.json`,
                params:this.paramsMaptiler
            })

            const resp=await instance.get()

            //aqui en el map ponemos ({}), esto significa que voy a retornar un objeto de forma implicita
            return resp.data.features.map(lugar=>({
                id:lugar.id,
                nombre:lugar.place_name,
                lng:lugar.center[0],
                lat:lugar.center[1],
            }))

            

        } catch (error) {
            return []//retornar las ciudades
            
        }

        
    }

    //funcion para capturar datos del clima de la ciudad elegida
    async climaCiudad(lat,lon){
        try {
            
            //instancia axios.create()
            const instance=axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                // Combinamos los params fijos del getter con los valores reales de lat y lon
                params: { ...this.paramsOpenWeather, lat, lon }
            })

            const resp=await instance.get()

            // Extraemos la data necesaria
            const { weather, main } = resp.data;

            return {
                id: weather[0].id,
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            };
            
           
        } catch (error) {
            console.log("Error al obtener el clima:", error.response?.data || error.message);
        }
    }

    agregarHistorial(ciudad=""){
        //prevenir duplicados,si ya existe se retorna,osea no se ejecuta nada,pero si no existe se graba
        if (this.historial.includes(ciudad.toLocaleLowerCase())) {
            return
        }

        //agregar la ciudad al historial
        this.historial.unshift(ciudad)

        //grabar en db
        this.guardarDB()

    }

    guardarDB(){

        const payload={
            historial:this.historial
        }

        fs.writeFileSync(this.dbPath,JSON.stringify(payload))

    }

    leerDB(){

    }

}




module.exports=Busquedas