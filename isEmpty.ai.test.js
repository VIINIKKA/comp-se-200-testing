const isEmpty = require('./isEmpty.js').default;

describe('isEmpty - AI Generated Test Suite', () => {
  describe('Null and Undefined Values', () => {
    test('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    test('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for void 0', () => {
      expect(isEmpty(void 0)).toBe(true);
    });
  });

  describe('Primitive Values', () => {
    test('should return true for number 0', () => {
      expect(isEmpty(0)).toBe(true);
    });

    test('should return true for positive number', () => {
      expect(isEmpty(42)).toBe(true);
    });

    test('should return true for negative number', () => {
      expect(isEmpty(-15)).toBe(true);
    });

    test('should return true for NaN', () => {
      expect(isEmpty(NaN)).toBe(true);
    });

    test('should return true for Infinity', () => {
      expect(isEmpty(Infinity)).toBe(true);
    });

    test('should return true for boolean true', () => {
      expect(isEmpty(true)).toBe(true);
    });

    test('should return true for boolean false', () => {
      expect(isEmpty(false)).toBe(true);
    });
  });

  describe('String Values', () => {
    test('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
    });

    test('should return false for single character string', () => {
      expect(isEmpty('a')).toBe(false);
    });

    test('should return false for whitespace string', () => {
      expect(isEmpty(' ')).toBe(false);
    });

    test('should return false for newline string', () => {
      expect(isEmpty('\n')).toBe(false);
    });

    test('should return false for string with numbers', () => {
      expect(isEmpty('123')).toBe(false);
    });

    test('should return false for long string', () => {
      expect(isEmpty('a'.repeat(1000))).toBe(false);
    });
  });

  describe('Array Values', () => {
    test('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('should return false for array with one element', () => {
      expect(isEmpty([1])).toBe(false);
    });

    test('should return false for array with multiple elements', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return false for array with null element', () => {
      expect(isEmpty([null])).toBe(false);
    });

    test('should return false for array with undefined element', () => {
      expect(isEmpty([undefined])).toBe(false);
    });

    test('should return false for nested empty arrays', () => {
      expect(isEmpty([[]])).toBe(false);
    });

    test('should return false for sparse array', () => {
      const sparseArray = new Array(5);
      expect(isEmpty(sparseArray)).toBe(false);
    });
  });

  describe('Object Values', () => {
    test('should return true for empty object literal', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for object with properties', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for object with multiple properties', () => {
      expect(isEmpty({ name: 'John', age: 30 })).toBe(false);
    });

    test('should return false for object with null property', () => {
      expect(isEmpty({ value: null })).toBe(false);
    });

    test('should return false for object with undefined property', () => {
      expect(isEmpty({ value: undefined })).toBe(false);
    });

    test('should return true for object with only inherited properties', () => {
      const proto = { inherited: 'value' };
      const obj = Object.create(proto);
      expect(isEmpty(obj)).toBe(true);
    });

    test('should return false for object with Symbol keys', () => {
      const sym = Symbol('test');
      const obj = {};
      obj[sym] = 'value';
      // Symbol keys are not enumerable string keys, so should be empty
      expect(isEmpty(obj)).toBe(true);
    });

    test('should return false for nested objects', () => {
      expect(isEmpty({ nested: {} })).toBe(false);
    });
  });

  describe('Map and Set Values', () => {
    test('should return true for empty Map', () => {
      expect(isEmpty(new Map())).toBe(true);
    });

    test('should return false for Map with entries', () => {
      const map = new Map();
      map.set('key', 'value');
      expect(isEmpty(map)).toBe(false);
    });

    test('should return false for Map with multiple entries', () => {
      const map = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3]
      ]);
      expect(isEmpty(map)).toBe(false);
    });

    test('should return true for empty Set', () => {
      expect(isEmpty(new Set())).toBe(true);
    });

    test('should return false for Set with values', () => {
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).toBe(false);
    });

    test('should return false for Set with multiple values', () => {
      const set = new Set([1, 2, 3, 4, 5]);
      expect(isEmpty(set)).toBe(false);
    });
  });

  describe('TypedArray Values', () => {
    test('should return true for empty Uint8Array', () => {
      expect(isEmpty(new Uint8Array(0))).toBe(true);
    });

    test('should return false for non-empty Uint8Array', () => {
      expect(isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
    });

    test('should return true for empty Int32Array', () => {
      expect(isEmpty(new Int32Array(0))).toBe(true);
    });

    test('should return false for non-empty Float64Array', () => {
      expect(isEmpty(new Float64Array([1.5, 2.5]))).toBe(false);
    });

    test('should return false for Uint16Array with zero values', () => {
      expect(isEmpty(new Uint16Array([0, 0, 0]))).toBe(false);
    });
  });

  describe('Buffer Values', () => {
    test('should return true for empty Buffer', () => {
      expect(isEmpty(Buffer.from([]))).toBe(true);
    });

    test('should return false for non-empty Buffer', () => {
      expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
    });

    test('should return false for Buffer with single byte', () => {
      expect(isEmpty(Buffer.from([0]))).toBe(false);
    });

    test('should return false for Buffer from string', () => {
      expect(isEmpty(Buffer.from('hello'))).toBe(false);
    });
  });

  describe('Arguments Object', () => {
    test('should return true for empty arguments', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(true);
      })();
    });

    test('should return false for non-empty arguments', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(false);
      })(1, 2, 3);
    });

    test('should return false for single argument', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(false);
      })('test');
    });
  });

  describe('Array-Like Objects', () => {
    test('should return false for object with only length property', () => {
      const arrayLike = { length: 0 };
      expect(isEmpty(arrayLike)).toBe(false);
    });

    test('should return false for array-like with numeric indices', () => {
      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
      expect(isEmpty(arrayLike)).toBe(false);
    });

    test('should return false for jQuery-like collection', () => {
      const jQueryLike = { 0: 'element', length: 1, splice: Array.prototype.splice };
      expect(isEmpty(jQueryLike)).toBe(false);
    });

    test('should return true for jQuery-like empty collection', () => {
      const jQueryLike = { length: 0, splice: Array.prototype.splice };
      expect(isEmpty(jQueryLike)).toBe(true);
    });
  });

  describe('Prototype Objects', () => {
    test('should return true for function prototype', () => {
      function MyConstructor() {}
      expect(isEmpty(MyConstructor.prototype)).toBe(true);
    });

    test('should return false for function prototype with properties', () => {
      function MyConstructor() {}
      MyConstructor.prototype.customProp = 'value';
      expect(isEmpty(MyConstructor.prototype)).toBe(false);
    });
  });

  describe('Date and RegExp Objects', () => {
    test('should return true for Date object', () => {
      expect(isEmpty(new Date())).toBe(true);
    });

    test('should return true for RegExp object', () => {
      expect(isEmpty(/test/)).toBe(true);
    });

    test('should return true for RegExp with flags', () => {
      expect(isEmpty(/pattern/gi)).toBe(true);
    });
  });

  describe('Function Values', () => {
    test('should return true for empty function', () => {
      expect(isEmpty(function() {})).toBe(true);
    });

    test('should return true for arrow function', () => {
      expect(isEmpty(() => {})).toBe(true);
    });

    test('should return false for function with properties', () => {
      const fn = function() {};
      fn.customProp = 'value';
      expect(isEmpty(fn)).toBe(false);
    });
  });

  describe('Error Objects', () => {
    test('should return true for Error object', () => {
      expect(isEmpty(new Error('test'))).toBe(true);
    });

    test('should return true for TypeError object', () => {
      expect(isEmpty(new TypeError('type error'))).toBe(true);
    });

    test('should return false for Error with custom properties', () => {
      const err = new Error('test');
      err.code = 500;
      expect(isEmpty(err)).toBe(false);
    });
  });

  describe('WeakMap and WeakSet', () => {
    test('should return true for WeakMap', () => {
      expect(isEmpty(new WeakMap())).toBe(true);
    });

    test('should return true for WeakSet', () => {
      expect(isEmpty(new WeakSet())).toBe(true);
    });
  });

  describe('Symbol Values', () => {
    test('should return true for Symbol', () => {
      expect(isEmpty(Symbol('test'))).toBe(true);
    });

    test('should return true for Symbol.iterator', () => {
      expect(isEmpty(Symbol.iterator)).toBe(true);
    });
  });

  describe('Edge Cases and Complex Scenarios', () => {
    test('should return true for Object.create(null)', () => {
      expect(isEmpty(Object.create(null))).toBe(true);
    });

    test('should return false for Object.create(null) with properties', () => {
      const obj = Object.create(null);
      obj.key = 'value';
      expect(isEmpty(obj)).toBe(false);
    });

    test('should handle frozen empty object', () => {
      const frozen = Object.freeze({});
      expect(isEmpty(frozen)).toBe(true);
    });

    test('should handle sealed non-empty object', () => {
      const sealed = Object.seal({ a: 1 });
      expect(isEmpty(sealed)).toBe(false);
    });

    test('should handle array with non-enumerable properties', () => {
      const arr = [1, 2];
      Object.defineProperty(arr, 'hidden', {
        value: 'secret',
        enumerable: false
      });
      expect(isEmpty(arr)).toBe(false);
    });

    test('should return true for empty string wrapper object', () => {
      expect(isEmpty(new String(''))).toBe(true);
    });

    test('should return false for non-empty string wrapper object', () => {
      expect(isEmpty(new String('test'))).toBe(false);
    });
  });
});
