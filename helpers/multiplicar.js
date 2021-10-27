const fs = require('fs')

const crearArchivoTabla = async (base = 5) => {
  try {
    console.log(`<==========> Tabla del ${base} <==========> \n`)

    let salida = ''

    for (let i = 0; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i} \n`
    }

    console.log(salida)
    const nombreArchivo = `Tabla del ${base}.txt`

    fs.writeFile(nombreArchivo, salida, (err) => {
      if (err) {
        console.log(err)
        throw err
      } else if (!err) {
        console.log(`Tabla del ${base} Creada`)
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
