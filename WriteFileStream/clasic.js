import fs from 'node:fs'

const writeStream = fs.createWriteStream('data.txt', { encoding: 'utf-8' })


for (let index = 0; index < 2000; index++) {
    writeStream.write(`Hello ${index}`)


}
writeStream.end('World!!!')

const redeable = fs.createReadStream('file.csv')
const writeStream2 = fs.createWriteStream('data2.txt', { encoding: 'utf-8' })


redeable.pipe(writeStream2)