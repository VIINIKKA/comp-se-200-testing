
// Import the function you are testing
const isEmpty = require('./isEmpty.js').default;

// Group your tests with describe
describe('isEmpty (Manual Tests from Plan)', () => {

    // TEST-EMP-01: Test with a null value
    it('TEST-EMP-01: should return true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    // TEST-EMP-02: Test with an empty array
    it('TEST-EMP-02: should return true for an empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    // TEST-EMP-03: Test with a non-empty array
    it('TEST-EMP-03: should return false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    // TEST-EMP-04: Test with an empty string
    it('TEST-EMP-04: should return true for an empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    // TEST-EMP-05: Test with an empty object
    it('TEST-EMP-05: should return true for an empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    // TEST-EMP-06: Test with a non-empty object
    it('TEST-EMP-06: should return false for a non-empty object', () => {
        expect(isEmpty({ 'a': 1 })).toBe(false);
    });

    // TEST-EMP-07: Test with a primitive number
    it('TEST-EMP-07: should return true for a primitive number (no own enumerable properties)', () => {
        expect(isEmpty(123)).toBe(true);
    });
    
    // TEST-EMP-08: Test with an empty Map
    it('TEST-EMP-08: should return true for an empty Map object', () => {
        expect(isEmpty(new Map())).toBe(true);
    });

    // TEST-EMP-N01: Test with a boolean primitive
    it('TEST-EMP-N01: should return true for a boolean primitive (no own enumerable properties)', () => {
        expect(isEmpty(true)).toBe(true);
    });

    // TEST-EMP-N02: Test with the number zero
    it('TEST-EMP-N02: should return true for the number zero (no own enumerable properties)', () => {
        expect(isEmpty(0)).toBe(true);
    });
});