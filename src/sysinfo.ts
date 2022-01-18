import * as Si from "systeminformation";

var http = require('http');

const result = [];

Si.cpu().then((data) => {
    result.push({ 'cpu' : data});
    console.log(result);
});

Si.system().then((data) => {
    result.push({ 'system' : data});
    console.log(result);
});

Si.mem().then((data) => {
    result.push({ 'mem' : data});
    console.log(result);
});

Si.osInfo().then((data) => {
    result.push({ 'os' : data});
    console.log(result);
});

Si.currentLoad().then((data) => {
    result.push({ 'currentLoad' : data});
    console.log(result);
});

Si.processes().then((data) => {
    result.push({ 'processes' : data});
    console.log(result);
});

Si.diskLayout().then((data) => {
    result.push({ 'diskLayout' : data});
    console.log(result);
});

Si.networkInterfaces().then((data) => {
    result.push({ 'networkInterfaces' : data});
    console.log(result);
});



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

server.listen(8080);

