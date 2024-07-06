import fs from 'node:fs'

const readStream = fs.createReadStream('./big.file')
const readStream2 = fs.createReadStream('./file.csv')

readStream.on('data', (chunk) => {
    console.log(`Recibido ${chunk.length} bytes de datos`);
})

readStream.on('end', () => {
    console.log('Fin de la lectura');
    readStream2.on('data', (chunk) => {
        console.log(`Recibido ${chunk.length} bytes de datos read2`);
    })

    readStream2.on('error', (err) => {
        console.log('Ocurrió un error' + err);
    })

    readStream2.on('end', () => {

        console.log('Fin de la lectura 2');
    })
})
readStream.on('error', (err) => {
    console.log('Ocurrió un error' + err);
})




