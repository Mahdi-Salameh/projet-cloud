"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('typeScript test suite', () => {
    it('should return "Hello world!"', () => {
        expect.assertions(1);
        expect((0, index_1.helloWorld)()).toBe('Hello world!');
    });
});
//# sourceMappingURL=index.spec.js.map