import {createServer} from 'http'
import {readFile} from 'fs'

createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})

    readFile('home.html', 'utf-8', (err, data) => {
        // console.log('Lendo o Arquivo!');
        res.write(data)
        res.end()
    })

    // res.end()
}).listen(3030, () => {
    console.log('Running Server!')
})