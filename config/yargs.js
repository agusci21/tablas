const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Fin de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Imprime la tabla en consola',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un numero'
    }
    if (isNaN(argv.h)) {
      throw 'El fin debe ser un numero'
    }

    return true
  }).argv

module.exports = argv
