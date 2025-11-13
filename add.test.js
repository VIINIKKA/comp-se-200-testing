const add = require('./add.js').default;

describe('add - AI Generated Test Suite', () => {
  test('adds numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 2)).toBe(1);
    expect(add(1.5, 2.5)).toBe(4);
  });

  test('string involvement concatenates (per implementation)', () => {
    expect(add('1', '2')).toBe('12');
    expect(add('1', 2)).toBe('12');
    expect(add(1, '2')).toBe('12');
  });

  test('single argument returns that value', () => {
    expect(add(5)).toBe(5);
    expect(add(undefined, 7)).toBe(7);
    expect(add(undefined, undefined)).toBe(0);
  });
});
