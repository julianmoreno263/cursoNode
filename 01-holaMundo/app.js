//Node.js (o simplemente Node) es un entorno de ejecución para JavaScript que permite correr este lenguaje fuera del navegador.

// Antes de que apareciera Node en 2009, JavaScript solo vivía dentro de Chrome, Firefox o Safari para hacer que las páginas web fueran interactivas. Node tomó el motor V8 (el mismo que usa Google Chrome) y lo llevó a las computadoras y servidores.

// ¿Para qué sirve?
// Su uso principal es el desarrollo de Backend (el lado del servidor). Aquí es donde ocurre la "magia" que el usuario no ve:

// Crear APIs y Servidores Web: Es su uso más común. Permite que una aplicación móvil o web guarde datos, autentique usuarios o procese pagos.

// Herramientas de Línea de Comandos (CLI): Muchos programas que usas en la terminal (como el que intentaste ejecutar antes) están hechos con Node.

// Streaming de Datos: Es excelente para aplicaciones que transmiten video o audio en tiempo real.

// Aplicaciones en tiempo real: Gracias a su arquitectura, es ideal para chats, juegos en línea o pizarras colaborativas.

//¿Por qué es tan popular? (Sus superpoderes)
// Node.js destaca por dos conceptos técnicos que lo hacen extremadamente rápido:

// Single Threaded (Hilo único): A diferencia de otros lenguajes que abren muchos procesos para atender a muchos usuarios, Node usa uno solo muy eficiente.

// No bloqueante (Non-blocking I/O): Node no se queda "esperando" a que el disco duro lea un archivo o que una base de datos responda. Mientras espera, sigue atendiendo otras peticiones.
// +1

// Analogía del Camarero:
// Imagina un restaurante donde el camarero (Node) toma tu pedido, lo pasa a la cocina y, en lugar de quedarse parado esperando el plato, se va a tomar el pedido de la siguiente mesa. Cuando la comida está lista, el camarero vuelve y te la entrega. Así, una sola persona puede atender a muchas mesas a la vez.

// El ecosistema NPM
// Node viene con NPM (Node Package Manager), que es la librería de software más grande del mundo. Es como una "tienda de apps" gratuita para programadores donde puedes descargar piezas de código ya hechas (para conectar bases de datos, enviar correos, etc.) para no tener que inventar la rueda desde cero.

let nombre="Julian"
console.log(nombre)

nombre="Pepe"
console.log(nombre)

console.log("Hola Mundo en Node con nodemon")