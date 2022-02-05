import { result } from './sysinfo';
var http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/api/v1/sysinfo') {
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.write(JSON.stringify(result));
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write("Page not found (404)\n");
    }

    
    res.end();
});

server.listen(process.env.PORT || 8080);