const isObjectLike = require('./isObjectLike.js').default;

describe('isObjectLike - AI Generated Test Suite', () => {
  test('objects and arrays are object-like', () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([])).toBe(true);
    expect(isObjectLike(new Date())).toBe(true);
  });

  test('null is not object-like', () => {
    expect(isObjectLike(null)).toBe(false);
  });

  test('functions are not object-like', () => {
    expect(isObjectLike(function() {})).toBe(false);
    expect(isObjectLike(() => {})).toBe(false);
  });

  test('primitives are not object-like', () => {
    expect(isObjectLike(1)).toBe(false);
    expect(isObjectLike('a')).toBe(false);
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(Symbol('x'))).toBe(false);
  });
});
