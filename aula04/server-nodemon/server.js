import {createServer} from 'http'

createServer((req,res) => {
    res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})

    res.write('Bem vindo Lucas')
    res.write('<hr>')

    res.end()
}).listen(3030, () =>{
    console.log('Running Server');
})