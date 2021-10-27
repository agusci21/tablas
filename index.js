const { crearArchivoTabla } = require('./helpers/multiplicar.js')

console.clear()

const base = 1 / 0

crearArchivoTabla(base)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err))
