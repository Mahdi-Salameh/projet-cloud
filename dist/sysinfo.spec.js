"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sysinfo_1 = require("./sysinfo");
describe('typeScript test suite', () => {
    it('should return Cpu if exists or not"', () => {
        expect.assertions(1);
        expect(sysinfo_1.Si).toHaveProperty('cpu');
    });
});
//# sourceMappingURL=sysinfo.spec.js.map