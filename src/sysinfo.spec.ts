import { Si } from './sysinfo';

describe('typeScript test suite', () => {
  it('should return Cpu if exists or not"', () => {
    expect.assertions(1);
    expect(Si).toHaveProperty('cpu');
  });
});