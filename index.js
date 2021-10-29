const { crearArchivoTabla } = require('./helpers/multiplicar.js')
const argv = require('./config/yargs')
const colors = require('colors')
console.clear()

crearArchivoTabla(argv.b, argv.h, argv.l )

