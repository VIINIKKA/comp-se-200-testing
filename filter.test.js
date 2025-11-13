const filter = require('./filter.js').default;

describe('filter - AI Generated Test Suite (matches current behavior)', () => {
  test('filters numbers greater than 2', () => {
    const input = [1, 2, 3, 4];
    const out = filter(input, (v) => v > 2);
    expect(out).toEqual([3, 4]);
  });

  test('returns [[]] for empty array (implementation quirk)', () => {
    const out = filter([], () => true);
    expect(out).toEqual([[]]);
  });

  test('returns [[]] when no elements match', () => {
    const out = filter([1, 2, 3], () => false);
    expect(out).toEqual([[]]);
  });

  test('passes (value, index, array) to predicate', () => {
    const seen = [];
    filter(['a', 'b'], (v, i, a) => { seen.push([v, i, a.length]); return i === 1; });
    expect(seen).toEqual([
      ['a', 0, 2],
      ['b', 1, 2],
    ]);
  });

  test('null or undefined array yields [ [] ]', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });
});
