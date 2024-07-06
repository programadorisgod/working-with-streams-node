import fs from 'node:fs'
import { createServer } from 'node:http'


const server = createServer()

server.on('request', (request, response) => {
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err
    //     data.forEach(chunck => console.log(chunck))
    // })
    const src = fs.createReadStream('./big.file', { highWaterMark: 64 })
    // src.forEach(chunk => console.log(chunk))

    src.on('open', () => {
        src.pipe(response)
    })

})


server.listen(3000, 'localhost', () => {
    console.log('Server running ');
})

server.on('error', (err) => {
    if (err?.code === 'EADDRINUSE') {
        console.log('Address in use, retryng...');
        setTimeout(() => {
            server.close()
            server.listen(4000, 'localhost')
        }, 2000)
    }
})