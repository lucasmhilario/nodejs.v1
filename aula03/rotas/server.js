import { createServer } from 'http'

createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})

    // todas as requisições que chegarem, baterão na req.url (ex. /contato)
    console.log('Entrou no server!')

    if(req.url.indexOf ('/contato') != -1) {
        console.log('Entrou no contato');
        res.write('Contato do site')
    }

    if(req.url.indexOf ('/clientes') != -1 ) {
        console.log('Entrou no clientes');
        res.write('Clientes da empresa')
    }

    res.end()
}).listen(3030, () => {
    console.log('Running Server!')
})