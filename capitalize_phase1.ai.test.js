// AI-Generated Test Suite for capitalize function
const capitalize = require('./capitalize.js').default;

describe('capitalize - AI Generated Test Suite', () => {
    
    describe('Basic String Operations', () => {
        test('should capitalize first letter of lowercase word', () => {
            expect(capitalize('world')).toBe('World');
        });

        test('should convert uppercase word to capitalized form', () => {
            expect(capitalize('HELLO')).toBe('Hello');
        });

        test('should handle mixed case string', () => {
            expect(capitalize('jAvAsCrIpT')).toBe('Javascript');
        });

        test('should capitalize single character', () => {
            expect(capitalize('x')).toBe('X');
        });

        test('should handle already capitalized string', () => {
            expect(capitalize('Test')).toBe('Test');
        });
    });

    describe('Edge Cases with Whitespace', () => {
        test('should handle string with leading space', () => {
            expect(capitalize('  hello')).toBe('  hello');
        });

        test('should handle string with trailing space', () => {
            expect(capitalize('world  ')).toBe('World  ');
        });

        test('should handle multiple words (only first char capitalized)', () => {
            expect(capitalize('hello world')).toBe('Hello world');
        });

        test('should handle tab character at start', () => {
            expect(capitalize('\thello')).toBe('\thello');
        });

        test('should handle newline at start', () => {
            expect(capitalize('\ntest')).toBe('\ntest');
        });
    });

    describe('Special Characters and Numbers', () => {
        test('should handle string starting with number', () => {
            expect(capitalize('123abc')).toBe('123abc');
        });

        test('should handle string starting with special character', () => {
            expect(capitalize('@username')).toBe('@username');
        });

        test('should handle string with only numbers', () => {
            expect(capitalize('54321')).toBe('54321');
        });

        test('should handle string with special characters', () => {
            expect(capitalize('!@#$%')).toBe('!@#$%');
        });

        test('should handle hyphenated word', () => {
            expect(capitalize('test-case')).toBe('Test-case');
        });

        test('should handle underscore separated', () => {
            expect(capitalize('snake_case')).toBe('Snake_case');
        });
    });

    describe('Empty and Null Values', () => {
        test('should handle empty string', () => {
            expect(capitalize('')).toBe('');
        });

        test('should handle null value', () => {
            expect(capitalize(null)).toBe('Null');
        });

        test('should handle undefined value', () => {
            expect(capitalize(undefined)).toBe('Undefined');
        });

        test('should handle string with only spaces', () => {
            expect(capitalize('   ')).toBe('   ');
        });
    });

    describe('Non-String Inputs', () => {
        test('should handle boolean true', () => {
            expect(capitalize(true)).toBe('True');
        });

        test('should handle boolean false', () => {
            expect(capitalize(false)).toBe('False');
        });

        test('should handle number zero', () => {
            expect(capitalize(0)).toBe('0');
        });

        test('should handle positive integer', () => {
            expect(capitalize(42)).toBe('42');
        });

        test('should handle negative integer', () => {
            expect(capitalize(-99)).toBe('-99');
        });

        test('should handle floating point number', () => {
            expect(capitalize(3.14)).toBe('3.14');
        });

        test('should handle array with single element', () => {
            expect(capitalize(['hello'])).toBe('Hello');
        });

        test('should handle array with multiple elements', () => {
            expect(capitalize(['foo', 'bar'])).toBe('Foo,bar');
        });

        test('should handle empty array', () => {
            expect(capitalize([])).toBe('');
        });

        test('should handle object', () => {
            expect(capitalize({ key: 'value' })).toBe('[object object]');
        });
    });

    describe('Unicode and International Characters', () => {
        test('should handle accented characters', () => {
            expect(capitalize('école')).toBe('École');
        });

        test('should handle cyrillic text', () => {
            expect(capitalize('привет')).toBe('Привет');
        });

        test('should handle emoji at start', () => {
            expect(capitalize('😀hello')).toBe('😀hello');
        });

        test('should handle chinese characters', () => {
            const result = capitalize('你好世界');
            expect(typeof result).toBe('string');
            expect(result).toBe('你好世界');
        });
    });

    describe('Long Strings', () => {
        test('should handle very long string', () => {
            const longString = 'a'.repeat(1000);
            const result = capitalize(longString);
            expect(result.charAt(0)).toBe('A');
            expect(result.length).toBe(1000);
        });

        test('should handle sentence with punctuation', () => {
            expect(capitalize('hello, how are you?')).toBe('Hello, how are you?');
        });
    });

    describe('Case Sensitivity Verification', () => {
        test('should lowercase all characters except first', () => {
            expect(capitalize('hELLO wORLD')).toBe('Hello world');
        });

        test('should handle all caps acronym', () => {
            expect(capitalize('NASA')).toBe('Nasa');
        });

        test('should handle camelCase input', () => {
            expect(capitalize('camelCase')).toBe('Camelcase');
        });

        test('should handle PascalCase input', () => {
            expect(capitalize('PascalCase')).toBe('Pascalcase');
        });
    });

    describe('Return Type Validation', () => {
        test('should always return a string', () => {
            expect(typeof capitalize('test')).toBe('string');
            expect(typeof capitalize(123)).toBe('string');
            expect(typeof capitalize(true)).toBe('string');
            expect(typeof capitalize(null)).toBe('string');
        });

        test('should not mutate original input', () => {
            const original = 'IMMUTABLE';
            capitalize(original);
            expect(original).toBe('IMMUTABLE');
        });
    });
});
