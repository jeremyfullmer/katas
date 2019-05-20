// 74: String - `endsWith()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

    const s = 'el fin';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        const doesEndWith = s.endsWith('n');
        assert.equal(doesEndWith, true);
      });
      it('works with a string', function() {
        const expected = true;
        assert.equal(s.endsWith('fin'), expected);
      });
      it('works with unicode characters', function() {
        const nuclear = 'NO ☢';
        assert.equal(nuclear.endsWith('☢'), true);
      });
      it('a regular expression throws a TypeError', function() {
        const aRegExp = /the/;
        assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
      });
    });
  
    describe('2nd parameter, searches within this string as if this string were only this long', function() {
      it('find "el" at a substring of the length 2', function() {
        const endPos = 2;
        assert.equal(s.endsWith('el', endPos), true);
      });
      it('`undefined` uses the entire string', function() {
        const _undefined_ = undefined;
        assert.equal(s.endsWith('fin', _undefined_), true);
      });
      it('the parameter gets coerced to an int', function() {
        const position = '5';
        assert.equal(s.endsWith('fi', position), true);
      });
      describe('value less than 0', function() {
        it('returns `true`, when searching for an empty string', function() {
          const emptyString = '';
          assert.equal('1'.endsWith(emptyString, -1), true);
        });
        it('return `false`, when searching for a non-empty string', function() {
          const notEmpty = 'not empty';
          assert.equal('1'.endsWith(notEmpty, -1), false);
        });
      });
    });
  
    describe('transfer the functionality to other objects', function() {
  
      const endsWith = (...args) => String.prototype.endsWith.call(...args);
  
      it('e.g. a boolean', function() {
        let aBool = true;
        assert.equal(endsWith(!aBool, 'lse'), true);
      });
      it('e.g. a number', function() {
        let aNumber = 84;
        assert.equal(endsWith(aNumber + 1900, 84), true);
      });
      it('also using the position works', function() {
        const position = 3;
        assert.equal(endsWith(1994, '99', position), true);
      });
    });
  
  });
  //75
  // 75: Promise - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

    it('`Promise` is a global function', function() {
      const expectedType = 'function';
      assert.equal(typeof Promise, expectedType);
    });
  
    describe('the constructor', function() {
  
      it('instantiating it without params throws', function() {
        const fn = () => { Promise(function(resolve, reject) {}) }
        assert.throws(fn);
      });
  
      it('expects a function as parameter', function() {
        const param = function(resolve, reject) {};
        assert.doesNotThrow(() => { new Promise(param); });
      });
  
    });
  
    describe('simplest promises', function() {
  
      it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
        let promise = new Promise((resolve) => {
          resolve();
        });
  
        promise
          .then((value) => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
  
      it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
        let promise = new Promise((resolve) => {
          resolve(42);
        });
  
        promise
          .then(value => {assert.equal(value, 42); done();})
          .catch(() => done(new Error('The promise is expected to resolve with 42!')));
      });
  
      it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
        let promise = new Promise((resolve, reject) => {
          reject();
        });
  
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
  
    });
  
    describe('an asynchronous promise', function() {
  
      it('can resolve later, also by calling the first callback', function(done) {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 100);
        });
  
        promise
          .then(() => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
  
      it('reject it at some later point in time, calling the 2nd callback', function(done) {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => reject(), 100);
        });
  
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
  
    });
  
    describe('test library (mocha here) support for promises', function() {
  
      it('just returning the promise makes the test library check that the promise resolves', function() {
        let promise = new Promise((resolve, reject) => {
          resolve();
        });
  
        // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
        return promise;
      });
  
    });
  });
  