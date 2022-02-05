"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.Si = void 0;
exports.Si = require("systeminformation");
exports.result = null;
const valueObject = {
    cpu: '*',
    system: '*',
    mem: '*',
    osInfo: '*',
    currentLoad: '*',
    processes: '*',
    diskLayout: '*',
    networkInterfaces: '*'
};
exports.Si.get(valueObject).then(data => exports.result = data);
//# sourceMappingURL=sysinfo.js.map