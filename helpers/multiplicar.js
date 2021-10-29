const fs = require('fs')

const crearArchivoTabla = async (base = 5, hasta, listar) => {
  try {
    let salida = ''
    let consola = ''

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`
    }

    if (listar == true) {
      console.log(`<==========> Tabla del ${base} <==========> \n`.rainbow)
      console.log(consola)
    }

    const nombreArchivo = `Tabla del ${base}.txt`

    fs.writeFile(nombreArchivo, salida, (err) => {
      if (err) {
        console.log(err)
        throw err
      } else if (!err) {
        console.log(`Tabla del ${base} Creada`.green)
      }
    })
    return nombreArchivo
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivoTabla,
}
