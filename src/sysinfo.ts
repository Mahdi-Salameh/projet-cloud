//import * as Si from "systeminformation";
export const Si = require("systeminformation")
var http = require('http');

let result = null;

const valueObject = {
    cpu: '*',
    system: '*',
    mem: '*',
    osInfo: '*',
    currentLoad: '*',
    processes: '*',
    diskLayout: '*',
    networkInterfaces: '*'
  }
  
Si.get(valueObject).then(data => result = data);

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

