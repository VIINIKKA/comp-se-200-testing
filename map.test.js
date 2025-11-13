const map = require('./map.js').default;

describe('map - AI Generated Test Suite', () => {
  test('maps values using iteratee', () => {
    const out = map([1, 2, 3], (v) => v * 2);
    expect(out).toEqual([2, 4, 6]);
  });

  test('iteratee receives (value, index, array)', () => {
    const seen = [];
    const arr = ['x', 'y'];
    const out = map(arr, (v, i, a) => { seen.push([v, i, a === arr]); return v + i; });
    expect(out).toEqual(['x0', 'y1']);
    expect(seen).toEqual([
      ['x', 0, true],
      ['y', 1, true],
    ]);
  });

  test('null/undefined array returns empty array', () => {
    expect(map(null, (v) => v)).toEqual([]);
    expect(map(undefined, (v) => v)).toEqual([]);
  });

  test('empty array returns empty array', () => {
    expect(map([], (v) => v)).toEqual([]);
  });
});
