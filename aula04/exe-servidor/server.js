import { createServer } from 'http'
import { readFile } from 'fs'

createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
    let page = ''

    // switch só compara valores iguais
    switch(req.url) {
        case '/':
            page = 'index.html'
            break;
        case '/contato':
            page = 'contato.html'
            break; 
        case '/clientes':
            page = 'clientes.html'
            break;
        default:
            page = '404.html'
            break;
        }

    readFile(page, 'utf-8', (err,data) => {
        res.write(data)
        res.end() 
    })



    
}).listen(3030, () => {
    console.log('Running Server!')
})