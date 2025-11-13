const keys = require('./keys.js').default;

describe('keys - AI Generated Test Suite', () => {
  test('returns own enumerable keys of plain object', () => {
    const obj = { a: 1, b: 2 };
    const out = keys(obj);
    expect(out.sort()).toEqual(['a', 'b']);
  });

  test('does not include prototype properties', () => {
    function Foo() { this.a = 1; this.b = 2; }
    Foo.prototype.c = 3;
    const out = keys(new Foo());
    expect(out.sort()).toEqual(['a', 'b']);
  });

  test('treats strings as array-like', () => {
    expect(keys('hi')).toEqual(['0', '1']);
  });

  test('plain object with length property includes it and no auto indices', () => {
    const v = { 0: 'x', 2: 'y', length: 3, extra: true };
    const out = keys(v).sort();
    expect(out).toEqual(['0', '2', 'extra', 'length'].sort());
  });
});
