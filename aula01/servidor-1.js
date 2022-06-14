// criar um servidor web

const http = require('http');

// arrow function
http.createServer((req, res) => {
    // retorna código 200 => requisição feita com sucesso
    // informa que o tipo de conteúdo é html e usa utf-8

    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.end('<h1>Isso é um servidor HTTP da aula 01!</h1>');
    // res.end = finaliza com essa linha aqui^!
    // listen suporta dois argumentos, a porta e o callback
}).listen(3030, () => {
    console.log('Running Server!');
})