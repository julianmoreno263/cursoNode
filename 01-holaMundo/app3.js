
//la salida de la ejecucion de este programa es esta:
//Inicio de programa
// Fin de programa
// Segundo timeout
// Tercer timeout
// Primer timeout

//esto es porque esto es no bloqueante, Node usa una pila de procesos, una pila Node Apis y una pila de callbacks, (ver v13) las cuales van dando el orden de ejecucion del codigo. Entonces todos los procesos que son callbacks como los setTimeOut() los va registrando en la pila de callbacks y cuando la pila de procesos este limpia los envia alli y los va ejecutando segun el tiempo que tengan configurado,por eso primero sale el segundo y tercer timeout y de ultimas el primero.


console.log("Inicio de programa")

setTimeout(() => {
    console.log("Primer timeout")
}, 3000);

setTimeout(() => {
    console.log("Segundo timeout")
}, 0);

setTimeout(() => {
    console.log("Tercer timeout")
}, 0);




console.log("Fin de programa")
