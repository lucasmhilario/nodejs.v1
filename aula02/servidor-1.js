import {createServer} from 'http';
import currentDate from './currentDate.js';

createServer((req, res) => {

    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    
    const anoAtual = currentDate().getFullYear()
    const hora = currentDate().getHours()
    const min = currentDate().getMinutes()
    const seg = currentDate().getSeconds()
    const horaFull = `${hora}:${min}:${seg}`


    res.end(`<h1>Isso é um servidor HTTP da aula 02!</h1> ${anoAtual} - ${horaFull}`);
}).listen(3030, () => {

    console.log('Running Server!');
});

