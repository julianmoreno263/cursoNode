const argv = require('yargs/yargs')(process.argv.slice(2))
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar',
                    type: 'number'
                })
                .option('l', {
                    alias: 'listar',
                    demandOption: false,
                    default: false,
                    describe: 'Muestra la tabla de multiplicar en consola',
                    type: 'boolean'
                })
                .option('h', {
                    alias: 'hasta',
                    default: 10,
                    describe: 'Rango hasta donde debe llegar la multiplicación',
                    type: 'number'
                })
                .check((argv, options) => {
                    const filePaths = argv._
                    if (isNaN(argv.b)) {
                    throw "La base tiene que ser un número"
                    } else {
                        return true 
                    }
                })
                .argv;


module.exports=argv