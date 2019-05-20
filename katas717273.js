// 71: String - `repeat()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

    describe('pass the count to `str.repeat(count)`', function() {
      it('for `1` the string stays the same', function() {
        const what = 'one'.repeat(1);
        assert.equal(what, 'one');
      });
      it('for `3` the string `x` becomes `xxx`', function() {
        const actual = 'x'.repeat(3);
        assert.equal(actual, 'xxx');
      });
      it('for `0` an empty string is returned', function() {
        const dontRepeat = 0;
        assert.equal('shrink'.repeat(dontRepeat), '');
      });
  
      it('the count is not an int, such as "3", it gets coerced to an int', function() {
        const repeated = 'three'.repeat('3');
        assert.equal(repeated, 'threethreethree');
      });
    });
  
    describe('throws an error for', function() {
      it('a count of <0', function() {
        const belowZero = -1;
        assert.throws(() => { ''.repeat(belowZero); }, RangeError);
      });
      it('a count of +Infinty', function() {
        let infinity = '+Infinity';
        assert.throws(() => { ''.repeat(infinity); }, RangeError);
      });
    });
  
    describe('accepts everything that can be coerced to a string', function() {
      it('e.g. a boolean', function() {
        let aBool = false;
        assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
      });
      it('e.g. a number', function() {
        let aNumber = 1;
        assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
      });
    });
  
    describe('for my own (string) class', function() {
      it('calls `toString()` to make it a string', function() {
        class MyString { toString() { return 'my string'; } }
  
        const expectedString = 'my string';
  
        assert.equal(String(new MyString()).repeat(1), expectedString);
      });
      it('`toString()` is only called once', function() {
        let counter = 1;
        class X {
          toString() {
            return counter++;
          }
        }
  
        let repeated = String(new X()).repeat(2);
  
        assert.equal(repeated, '11');
      });
    });
  
  });

  //72
  // 72: String - `startsWith()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

    const s = 'the string s';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        const actual = s.startsWith('t');
        assert.equal(actual, true);
      });
      it('works with a string', function() {
        const expected = true;
        assert.equal(s.startsWith('the'), expected);
      });
      it('works with unicode characters', function() {
        const nuclear = '☢ NO ☢ NO';
        assert.equal(nuclear.startsWith('☢'), true);
      });
      it('a regular expression throws a TypeError', function() {
        const aRegExp = /.?/g;
        assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
      });
    });
  
    describe('2nd parameter, the position where to start searching from', function() {
      it('find "str" at position 4', function() {
        const position = 4;
        assert.equal(s.startsWith('str', position), true);
      });
      it('`undefined` is the same as 0', function() {
        const _undefined_ = '0';
        assert.equal(s.startsWith('the', _undefined_), true);
      });
      it('the parameter gets coerced to an int', function() {
        const position = '4';
        assert.equal(s.startsWith('str', position), true);
      });
      it('a value larger than the string`s length, returns false', function() {
        const expected = false;
        assert.equal(s.startsWith(' ', s.length + 1), expected);
      });
    });
  
    describe('transfer the functionality to other objects', function() {
  
      const startsWith = (...args) => String.prototype.startsWith.call(...args);
  
      it('e.g. a boolean', function() {
        let aBool = 'false stuff';
        assert.equal(startsWith(!aBool, 'false'), true);
      });
      it('e.g. a number', function() {
        let aNumber = 1900;
        assert.equal(startsWith(aNumber + 84, '1984'), true);
      });
      it('also using the position works', function() {
        const position = 1;
        assert.equal(startsWith(1994, '99', position), true);
      });
    });
  
  });
  // 72: String - `startsWith()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

    const s = 'the string s';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        const actual = s.startsWith('t');
        assert.equal(actual, true);
      });
      it('works with a string', function() {
        const expected = true;
        assert.equal(s.startsWith('the'), expected);
      });
      it('works with unicode characters', function() {
        const nuclear = '☢ NO ☢ NO';
        assert.equal(nuclear.startsWith('☢'), true);
      });
      it('a regular expression throws a TypeError', function() {
        const aRegExp = /.?/g;
        assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
      });
    });
  
    describe('2nd parameter, the position where to start searching from', function() {
      it('find "str" at position 4', function() {
        const position = 4;
        assert.equal(s.startsWith('str', position), true);
      });
      it('`undefined` is the same as 0', function() {
        const _undefined_ = '0';
        assert.equal(s.startsWith('the', _undefined_), true);
      });
      it('the parameter gets coerced to an int', function() {
        const position = '4';
        assert.equal(s.startsWith('str', position), true);
      });
      it('a value larger than the string`s length, returns false', function() {
        const expected = false;
        assert.equal(s.startsWith(' ', s.length + 1), expected);
      });
    });
  
    describe('transfer the functionality to other objects', function() {
  
      const startsWith = (...args) => String.prototype.startsWith.call(...args);
  
      it('e.g. a boolean', function() {
        let aBool = 'false stuff';
        assert.equal(startsWith(!aBool, 'false'), true);
      });
      it('e.g. a number', function() {
        let aNumber = 1900;
        assert.equal(startsWith(aNumber + 84, '1984'), true);
      });
      it('also using the position works', function() {
        const position = 1;
        assert.equal(startsWith(1994, '99', position), true);
      });
    });
  
  });
  //73
  // 73: Generator - `return` inside a generator is special
// To do: make all tests pass, leave the assert lines unchanged!

describe('`return` in a generator function is special', function() {

    describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
  
      it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
        function* generatorFunction() { return 1; }
        const returned = generatorFunction().next();
        const propertyNames = Object.keys(returned);
        assert.deepEqual(Object.keys(returned), propertyNames);
      });
  
      it('the property `value` is the value given after the `return` statement', function() {
        function* generatorFunction() { return 23; }
        const {value} = generatorFunction().next();
        assert.equal(value, 23);
      });
  
      it('the property `done` is true', function() {
        function* generatorFunction() { return 42; }
        const {done} = generatorFunction().next();
        assert.equal(done, true);
      });
  
      it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
        function* generatorFunction() { yield 1; }
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: 1, done: false});
      });
  
      it('a missing `return` returns {value: undefined, done: true}', function() {
        function* generatorFunction() { return; }
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: void 0, done: true});
      });
  
    });
  
    describe('mixing `return` and `yield`', function() {
  
      function* generatorFunctionWithYieldAndReturn() {
        yield 1;
        return 2;
      }
  
      function* generatorFunctionWithTwoYields() {
        yield 1;
        yield 2;
      }
  
      it('is possible', function() {
        const iterator = generatorFunctionWithYieldAndReturn();
        const values = [
          iterator.next(),
          iterator.next()
        ];
        assert.deepEqual(values, [{value: 1, done: false}, {value: 2, done: true}]);
      });
  
      it('the mix behaves different to two `yield`s', function() {
        const iterator = generatorFunctionWithTwoYields();
        const values = [1, 2];
        assert.deepEqual(Array.from(iterator), values);
      });
  
      it('two `yield`s returning values', function() {
        assert.deepEqual(Array.from(generatorFunctionWithTwoYields()), [1, 2]);
      });
  
      it('returning a yielded value', function() {
        function* generatorFunction() {
          yield 1
          return 2;
        }
        const iterator = generatorFunction();
        const values = [
          iterator.next().value,
          iterator.next(2).value
        ];
        assert.deepEqual(values, [1, 2]);
      });
  
    });
  
  });
  