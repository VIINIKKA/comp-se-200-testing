// Import the function you are testing
const capitalize = require('./capitalize.js').default;

// Group your tests with describe
describe('capitalize (Manual Tests from Plan)', () => {

    // TEST-CAP-01: Test a standard all-lowercase string
    it('TEST-CAP-01: should capitalize a standard all-lowercase string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    // TEST-CAP-02: Test an all-uppercase string
    it('TEST-CAP-02: should capitalize an all-uppercase string', () => {
        expect(capitalize('WORLD')).toBe('World');
    });

    // TEST-CAP-03: Test a mixed-case string
    it('TEST-CAP-03: should handle mixed-case string by converting to lowercase before capitalizing', () => {
        expect(capitalize('mIxEd CaSe')).toBe('Mixed case');
    });

    // TEST-CAP-04: Test empty string
    it('TEST-CAP-04: should return empty string for empty input', () => {
        expect(capitalize('')).toBe('');
    });

    // TEST-CAP-05: Test a string starting with whitespace
    it('TEST-CAP-05: should handle string starting with whitespace', () => {
        expect(capitalize(' Already capitalized')).toBe(' already capitalized');
    });

    // TEST-CAP-06: Test null input
    it('TEST-CAP-06: should handle null input (converted to "Null")', () => {
        expect(capitalize(null)).toBe('Null');
    });

    // TEST-CAP-07: Test a primitive number
    it('TEST-CAP-07: should handle a primitive number (converted to string)', () => {
        expect(capitalize(12345)).toBe('12345');
    });

    // TEST-CAP-08: Test a boolean
    it('TEST-CAP-08: should handle a boolean (converted to string and capitalized)', () => {
        expect(capitalize(true)).toBe('True');
    });

    // TEST-CAP-N01: Test a multi-word string
    it('TEST-CAP-N01: should capitalize only the first character of multi-word string', () => {
        expect(capitalize('a b c')).toBe('A b c');
    });

    // TEST-CAP-N02: Test a string starting with a number
    it('TEST-CAP-N02: should handle string starting with a number', () => {
        expect(capitalize('1st word')).toBe('1st word');
    });

    // TEST-CAP-N03: Test an array
    it('TEST-CAP-N03: should handle an array (converted to string)', () => {
        expect(capitalize(['array item'])).toBe('Array item');
    });

    // TEST-CAP-N04: Test undefined input
    it('TEST-CAP-N04: should handle undefined input (converted to "Undefined")', () => {
        expect(capitalize(undefined)).toBe('Undefined');
    });
});
