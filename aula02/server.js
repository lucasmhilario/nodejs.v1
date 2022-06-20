import {createServer} from 'http';
import {currentDate} from './currentDate.js';
import myName from './myName.js';

createServer((req, res) => {

    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8',
    'Content-length': '120',
    'Version' : '1.0',  
    'Header-customizado' : 'Lucas'
});
    
    const anoAtual = currentDate().getFullYear()
    const hora = currentDate().getHours()
    const min = currentDate().getMinutes()
    const seg = currentDate().getSeconds()
    const horaFull = `${hora}:${min}:${seg}`
    


    res.end(`<h1>Bem vindo</h1> ${anoAtual} - ${horaFull} - <br> ${myName()}`);
}).listen(3030, () => {

    console.log('Running Server!');
});

