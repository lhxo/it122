import http from 'http';
import url from 'url';

const PORT = 3000;
import {getAll, getItem} from './data.js'

const server = http.createServer((req,res)=>{
    const path = req.url.toLowerCase();
    const queryObject = url.parse(req.url, true).query;
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(getAll())
            res.end();
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write("Hello my name is Christopher")
            res.end();
            break;
        case `/detail`:
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(getItem("Ruben"))
            res.end();
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
})

server.listen(PORT, (error)=>{
    if(error){
        console.log('Something went wrong.')
    } else {
        console.log(`Server is listening on port ${PORT}`)
    }
})