const { crearArchivoTabla } = require('./helpers/multiplicar.js')

console.clear()

const [, , arg3 = 'base=0'] = process.argv
const [, base = 0] = arg3.split('=')

crearArchivoTabla(base)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err))
