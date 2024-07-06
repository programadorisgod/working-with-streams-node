import fs from 'node:fs'


function readFileStream(file) {
    const readStream = fs.createReadStream(file, { highWaterMark: 64 })
    return new Promise((resolve, reject) => {
        readStream.on('data', (chunk) => {
            console.log(`Data de ${file}: ${chunk}`);
        })

        readStream.on('end', () => {
            console.log(`Finalizada la lectura de ${file}`);
            resolve()
        })

        readStream.on('error', (err) => {
            reject(err)
        })
    })
}

Promise.all(
    readFileStream('./file.csv'),
    readFileStream('./big.file')
).then(() => {
    console.log('Archivos  procesados con exito');
})
    .catch((err) => { console.log('Ocurrió un error a la hora de leer el archivo', err); })

