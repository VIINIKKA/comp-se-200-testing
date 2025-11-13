const capitalize = require('./capitalize.js').default;

describe('capitalize (Manual Tests from Plan)', () => {

    it('TEST-CAP-01: should capitalize a standard all-lowercase string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('TEST-CAP-02: should capitalize an all-uppercase string', () => {
        expect(capitalize('WORLD')).toBe('World');
    });

    it('TEST-CAP-03: should handle mixed-case string by converting to lowercase before capitalizing', () => {
        expect(capitalize('mIxEd CaSe')).toBe('Mixed case');
    });

    it('TEST-CAP-04: should return empty string for empty input', () => {
        expect(capitalize('')).toBe('');
    });

    it('TEST-CAP-05: should handle string starting with whitespace', () => {
        expect(capitalize(' Already capitalized')).toBe(' already capitalized');
    });

    it('TEST-CAP-06: should handle null input (converted to "Null")', () => {
        expect(capitalize(null)).toBe('Null');
    });

    it('TEST-CAP-07: should handle a primitive number (converted to string)', () => {
        expect(capitalize(12345)).toBe('12345');
    });

    it('TEST-CAP-08: should handle a boolean (converted to string and capitalized)', () => {
        expect(capitalize(true)).toBe('True');
    });

    it('TEST-CAP-N01: should capitalize only the first character of multi-word string', () => {
        expect(capitalize('a b c')).toBe('A b c');
    });

    it('TEST-CAP-N02: should handle string starting with a number', () => {
        expect(capitalize('1st word')).toBe('1st word');
    });

    it('TEST-CAP-N03: should handle an array (converted to string)', () => {
        expect(capitalize(['array item'])).toBe('Array item');
    });

    it('TEST-CAP-N04: should handle undefined input (converted to "Undefined")', () => {
        expect(capitalize(undefined)).toBe('Undefined');
    });
});
