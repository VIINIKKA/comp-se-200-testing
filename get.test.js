const get = require('./get.js').default;

describe('get - AI Generated Test Suite', () => {
  test('gets nested value using string path with brackets', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('gets nested value using array path', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default when path not found', () => {
    const obj = { a: 1 };
    expect(get(obj, 'b.c', 'default')).toBe('default');
  });

  test('returns default when resolved value is undefined', () => {
    const obj = { a: { b: undefined } };
    expect(get(obj, 'a.b', 'fallback')).toBe('fallback');
  });

  test('handles path starting with dot (empty key) and consecutive separators', () => {
    const obj = { '': { x: 1 } };
    expect(get(obj, '.x')).toBe(1);
    expect(get(obj, '.["x"]')).toBe(1);
    expect(get(obj, '.', 'd')).toBe('d');
  });

  test('works with numeric string keys and quoted bracket keys', () => {
    const obj = { a: { '0': { 'b.c': 10 } } };
    expect(get(obj, 'a["0"]["b.c"]')).toBe(10);
  });

  test('null/undefined object returns default', () => {
    expect(get(null, 'a.b', 5)).toBe(5);
    expect(get(undefined, 'a.b', 7)).toBe(7);
  });
});
