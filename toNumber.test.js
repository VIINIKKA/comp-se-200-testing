const toNumber = require('./toNumber.js').default;

describe('toNumber (Manual Tests from Phase 1 Plan)', () => {
  // TEST-TONUM-01: number stays number
  it('TEST-TONUM-01: returns same number for numeric input', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(-1)).toBe(-1);
    expect(toNumber(0)).toBe(0);
  });

  // TEST-TONUM-02: numeric strings
  it('TEST-TONUM-02: converts numeric strings', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('42')).toBe(42);
    expect(toNumber('  5  ')).toBe(5);
    expect(toNumber('')).toBe(0); // +'' === 0
  });

  // TEST-TONUM-03: binary and octal
  it('TEST-TONUM-03: parses binary and octal prefixes', () => {
    expect(toNumber('0b101')).toBe(5);
    expect(toNumber('0o10')).toBe(8);
  });

  // TEST-TONUM-04: bad hex
  it('TEST-TONUM-04: returns NaN for signed hex like -0x1', () => {
    expect(Number.isNaN(toNumber('-0x1'))).toBe(true);
  });

  // TEST-TONUM-05: Infinity and MIN_VALUE
  it('TEST-TONUM-05: handles special numeric values', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  // TEST-TONUM-06: booleans
  it('TEST-TONUM-06: converts booleans', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  // TEST-TONUM-07: null and undefined
  it('TEST-TONUM-07: converts null to 0 and undefined to NaN', () => {
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });

  // TEST-TONUM-08: objects with valueOf
  it('TEST-TONUM-08: respects valueOf on objects', () => {
    const obj1 = { valueOf: () => 7 };
    expect(toNumber(obj1)).toBe(7);
    const obj2 = { valueOf: () => '3.5' };
    expect(toNumber(obj2)).toBe(3.5);
  });

  // TEST-TONUM-09: objects without primitive valueOf
  it('TEST-TONUM-09: falls back to toString coercion if valueOf returns object', () => {
    const obj = { valueOf: () => ({ toString: () => '4.25' }) };
    expect(toNumber(obj)).toBe(4.25);
  });

  // TEST-TONUM-10: symbols -> NaN
  it('TEST-TONUM-10: returns NaN for symbols', () => {
    expect(Number.isNaN(toNumber(Symbol('x')))).toBe(true);
  });
});
