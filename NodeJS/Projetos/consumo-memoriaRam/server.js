// módulo 'os' traz várias infos do sistema do pc
const http = require('http');
const host = `http://localhost`;
const port = 3000;
// importando modulo de outro arquivo
const stats = require('./pcRamConsumo');

http.createServer((req,res) => {
    // passando caminho da url
    let url = req.url;
    // se a url tiver esse caminho, mostre o stats
    if(url === '/stats') {
        res.end(JSON.stringify(stats, null, 2));
    }
    // senão, mostre 
    else{
        res.end('<h1>Servidor funcionando!!!</h1>')
    } 
}).listen(port, () => console.log(`Server rodando em ${host}:${port}`));