const fs = require('fs')

console.clear()

const base = 5

console.log(`<==========> Tabla del ${base} <==========> \n`)

let salida = ''

for (let i = 0; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i} \n`
}

console.log(salida)

fs.writeFile(`Tabla del ${base}.txt`, salida, (err) => {
  if (err) {
    console.log(err)
    throw err
  }else if(!err){
      console.log(`Tabla del ${base} Creada`)
  }
})
