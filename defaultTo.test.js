const defaultTo = require('./defaultTo.js').default;

describe('defaultTo - AI Generated Test Suite (matches current behavior)', () => {
  test('returns value when not null/undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo(0, 10)).toBe(0);
    expect(defaultTo('', 'x')).toBe('');
    expect(defaultTo(false, true)).toBe(false);
  });

  test('returns default for null/undefined', () => {
    expect(defaultTo(null, 10)).toBe(10);
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('does not treat NaN as missing (implementation)', () => {
    const result = defaultTo(NaN, 10);
    expect(Number.isNaN(result)).toBe(true);
  });
});
