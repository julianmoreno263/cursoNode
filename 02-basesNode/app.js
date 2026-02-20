//tabla del 5

// En pocas palabras, yargs sirve para transformar la línea de comandos en una herramienta profesional y fácil de usar.

// Mientras que Node.js te entrega los argumentos como una lista desordenada de textos (strings), yargs los organiza, los valida y crea una interfaz de usuario para tu script.

// ¿Por qué usarlo en lugar del process.argv nativo?
// Si usas el sistema nativo de Node y quieres capturar un valor como --base=5, tendrías que programar manualmente un código que busque en el array, separe el texto por el símbolo = y convierta el "5" de texto a número. Yargs hace todo eso por ti.

// Aquí están sus funciones principales:

// Mapeo de Argumentos: Convierte banderas (flags) en un objeto de JavaScript fácil de leer.

// Input: node app --base 5 --limite=10

// Yargs: { base: 5, limite: 10 }

// Validación de Datos: Puedes obligar al usuario a que pase ciertos datos. Por ejemplo, que la base sea obligatoriamente un número.

// Generación de Ayuda Automática: Si el usuario escribe node app --help, yargs genera automáticamente un manual de instrucciones basado en tu configuración.

// Valores por Defecto: Puedes definir que, si el usuario no pone un límite, este sea 10 por defecto.


const{crearArchivo}=require("./helpers/multiplicar")
const argv=require("./config/yargs")

require("colors")


console.clear()


//este codigo me sirve para pasar el argumento base por consola,puedo indicarle por consola que numero quiero que saque la tabla de multiplicar, aqui usamos el process.argv,que son los argumentos. Pero esta forma es mas complicada,puedo utilizar el paquete yargs para hacer esto mas facil
// const[, ,  arg3="base=5"]=process.argv
// const[,base=5]=arg3.split("=")
// console.log(base)



crearArchivo(argv.b,argv.l, argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow, "creado"))
.catch(err=>console.log(err))


//grabar archivos en node, vamos a grabar nuestra salida, el primer argumento sera la ruta del archivo que vamos a grabar, si no se especifica node toma la ruta del archivo donde estamos parados por defecto y no se escribe. El segundo argumento es el nombre del archivo que queremos darle a donde vamos a grabar,el tercer argumento son los datos a grabar,osea nuestra salida, y por ultimo una funcion callback que en este caso maneja el error si lo hay, esto con writeFile, con writeFileSync no hay callback

// 1. fs.writeFile (Asíncrono)
// Es el método no bloqueante. Cuando lo ejecutas, Node.js inicia la escritura del archivo en segundo plano y continúa ejecutando las siguientes líneas de código inmediatamente.

// Funcionamiento: Utiliza un callback (o promesas) para avisar cuando termina.

// Ventaja: No detiene el servidor. Ideal para aplicaciones con muchos usuarios (como una API).

// Desventaja: El código puede volverse complejo si tienes muchas operaciones anidadas (aunque se soluciona con async/await).

// fs.writeFileSync (Síncrono)
// Es el método bloqueante. Node.js detiene por completo la ejecución de tu script hasta que el archivo se haya guardado totalmente en el disco.

// Funcionamiento: No usa callbacks. El código se lee de arriba hacia abajo de forma lineal.

// Ventaja: Es más fácil de leer y entender para tareas sencillas.

// Desventaja: Si el archivo es muy pesado o el disco es lento, tu aplicación se queda "congelada" y no puede responder a nadie más hasta que termine.


