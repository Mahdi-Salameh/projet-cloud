"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.Si = void 0;
exports.Si = require("systeminformation");
var http = require('http');
exports.result = [];
exports.Si.cpu().then((data) => {
    exports.result.push({ 'cpu': data });
    console.log(exports.result);
});
exports.Si.system().then((data) => {
    exports.result.push({ 'system': data });
    console.log(exports.result);
});
exports.Si.mem().then((data) => {
    exports.result.push({ 'mem': data });
    console.log(exports.result);
});
exports.Si.osInfo().then((data) => {
    exports.result.push({ 'os': data });
    console.log(exports.result);
});
exports.Si.currentLoad().then((data) => {
    exports.result.push({ 'currentLoad': data });
    console.log(exports.result);
});
exports.Si.processes().then((data) => {
    exports.result.push({ 'processes': data });
    console.log(exports.result);
});
exports.Si.diskLayout().then((data) => {
    exports.result.push({ 'diskLayout': data });
    console.log(exports.result);
});
exports.Si.networkInterfaces().then((data) => {
    exports.result.push({ 'networkInterfaces': data });
    console.log(exports.result);
});
const server = http.createServer((req, res) => {
    if (req.url === '/api/v1/sysinfo') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify(exports.result));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("Page not found (404)\n");
    }
    res.end();
});
server.listen(8080);
//# sourceMappingURL=sysinfo.js.map