//import * as Si from "systeminformation";
export const Si = require("systeminformation")

export let result = null;

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



