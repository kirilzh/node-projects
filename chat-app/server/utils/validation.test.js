const expect = require('expect');

var { isRealString } = require('./validation');

describe('is real string', () => {
  it('should reject non string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('  Marko   ');
    expect(res).toBe(true);
  });
});
