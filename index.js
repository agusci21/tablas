const { crearArchivoTabla } = require('./helpers/multiplicar.js')
const argv =  require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un numero'
    }
    return true
  }).argv

//option('l')
//listar
//boolean
//debault false

console.clear()

crearArchivoTabla(argv.b, argv.l)

console.log(argv)
