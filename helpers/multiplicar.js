const fs = require('fs')

const crearArchivoTabla = async (base = 5, hasta, listar) => {
  try {
    let salida = ''

    console.log(listar)

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`
    }

    if (listar == true) {
      console.log(`<==========> Tabla del ${base} <==========> \n`.rainbow)
      console.log(salida)
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
