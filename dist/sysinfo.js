"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Si = __importStar(require("systeminformation"));
var http = require('http');
const result = [];
Si.cpu().then((data) => {
    result.push({ 'cpu': data });
    console.log(result);
});
Si.system().then((data) => {
    result.push({ 'system': data });
    console.log(result);
});
Si.mem().then((data) => {
    result.push({ 'mem': data });
    console.log(result);
});
Si.osInfo().then((data) => {
    result.push({ 'os': data });
    console.log(result);
});
Si.currentLoad().then((data) => {
    result.push({ 'currentLoad': data });
    console.log(result);
});
Si.processes().then((data) => {
    result.push({ 'processes': data });
    console.log(result);
});
Si.diskLayout().then((data) => {
    result.push({ 'diskLayout': data });
    console.log(result);
});
Si.networkInterfaces().then((data) => {
    result.push({ 'networkInterfaces': data });
    console.log(result);
});
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end();
}).listen(8080);
//# sourceMappingURL=sysinfo.js.map