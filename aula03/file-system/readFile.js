import {readFile} from 'fs'
// readFile vai ler o arquivo txt em formato utf-8
readFile('test.txt', 'utf-8', (err,data) => {
    console.log(data);
})