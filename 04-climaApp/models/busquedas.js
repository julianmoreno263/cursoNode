const axios = require('axios');


class Busquedas{

    historial=["Tegucigalpa","Madrid","San José"]

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

}




module.exports=Busquedas