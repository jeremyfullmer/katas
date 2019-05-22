// 76: Promise - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('a promise can be created in multiple ways', function() {

    describe('creating a promise fails when', function() {
  
      it('using `Promise` as a function', function() {
        function callPromiseAsFunction() {
          new Promise();
        }
        assert.throws(callPromiseAsFunction);
      });
  
      it('no parameter is passed', function() {
        function promiseWithoutParams() {
          new Promise();
        }
        assert.throws(promiseWithoutParams);
      });
  
      it('passing a non-callable throws too', function() {
        const notAFunction = '';
        assert.throws(() => { new Promise(notAFunction); });
      });
  
    });
  
    describe('most commonly Promises get created using the constructor', function() {
  
      it('by passing a resolve function to it', function() {
        const promise = new Promise((res) => res());
        return promise;
      });
  
      it('by passing a resolve and a reject function to it', function(done) {
        const promise = new Promise((resolve, reject) => reject());
  
        promise
          .then(() => done(new Error('Expected promise to be rejected.')))
          .catch(done);
      });
  
    });
  
    describe('extending a `Promise`', function() {
  
      it('using `class X extends Promise{}` is possible', function() {
        class MyPromise extends Promise {}
        const promise = new MyPromise(resolve => resolve());
  
        promise
          .then(() => done())
          .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
      });
  
      it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
        class ResolvingPromise extends Promise {
  
          constructor(res, rej) {
            super(res, rej);
          }
        }
  
        return new ResolvingPromise((res, rej) => res());
      });
  
    });
  
    describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
  
      it('returns all results', function(done) {
        const promise = Promise.all([
          new Promise(resolve => resolve(1)),
          new Promise(resolve => resolve(2))
        ]);
  
        promise
          .then(value => { assert.deepEqual(value, [1, 2]); done(); })
          .catch(e => done(new Error(e)));
      });
  
      it('is rejected if one rejects', function(done) {
        const promise = Promise.all([
          new Promise((resolve, reject) => reject(1))
        ]);
  
        promise
          .then(() => done(new NotRejectedError()))
          .catch(() => done());
      });
  
    });
  
    describe('`Promise.race()` returns the first settled promise', function() {
  
      it('if it resolves first, the promises resolves', function(done) {
        const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
        const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
        const promise = Promise.race([lateRejectedPromise, earlyResolvingPromise]);
  
        promise
          .then(value => { assert.deepEqual(value, '1st :)'); done(); })
          .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
      });
  
      it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
        const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a rejector'));
        const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
        const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
  
        promise
          .then(() => done(new NotRejectedError()))
          .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
          .catch(done);
      });
  
    });
  
    describe('`Promise.resolve()` returns a resolving promise', function() {
  
      it('if no value given, it resolves with `undefined`', function(done) {
        const promise = Promise.resolve();
  
        promise
          .then(value => { assert.deepEqual(value, void 0); done(); })
          .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
      });
  
      it('resolves with the given value', function(done) {
        const promise = Promise.resolve('quick resolve');
  
        promise
          .then(value => { assert.equal(value, 'quick resolve'); done(); })
          .catch(e => done(e));
      });
  
    });
  
    describe('`Promise.reject()` returns a rejecting promise', function() {
  
      it('if no value given, it rejects with `undefined`', function(done) {
        const promise = Promise.reject();
  
        promise
          .then(() => done(new NotRejectedError()))
          .catch(value => { assert.deepEqual(value, void 0); done(); })
          .catch(done);
      });
  
      it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
        const promise = Promise.reject('quick reject');
  
        promise
          .then(() => done(new NotRejectedError()))
          .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
          .catch(done);
      });
  
    });
  
  });
  
  class NotRejectedError extends Error {
    constructor() {
      super();
      this.message = 'Expected promise to be rejected.';
    }
  }
  
  //77
  // 77: Promise - chaining
// To do: make all tests pass, leave the assert lines unchanged!

describe('chaining multiple promises can enhance readability', () => {

    describe('prerequisites for understanding', function() {
  
      it('reminder: the test passes when a fulfilled promise is returned', function() {
        return Promise.resolve('I should fulfill.');
      });
  
      it('a function given to `then()` fulfills (if it doesnt throw)', function() {
        const beNice = (value) => { return value; };
        return Promise.resolve('I am nice')
          .then(beNice)
          .then(niceMessage => assert.equal(niceMessage, 'I am nice'));
      });
  
    });
  
    describe('chain promises', function() {
  
      const removeMultipleSpaces = (string) => string.replace(/\s+/g, ' ');
  
      it('`then()` receives the result of the promise it was called on', function() {
        const wordsPromise = Promise.resolve('one   space     between each     word');
        return wordsPromise
          .then((value) => removeMultipleSpaces(value))
          .then(actual => {assert.equal(actual, 'one space between each word')})
        ;
      });
  
      const appendPeriod = string => `${string}.`;
  
      it('multiple `then()`s can be chained', function() {
        const wordsPromise = Promise.resolve('Sentence without       an end');
        return wordsPromise
          .then((value) => removeMultipleSpaces(value))
          .then((value) => appendPeriod(value))
          .then(actual => {assert.equal(actual, 'Sentence without an end.')})
        ;
      });
  
      const trim = string => string.replace(/^\s+/, '').replace(/\s+$/, '');
  
      it('order of the `then()`s matters', function() {
        const wordsPromise = Promise.resolve('Sentence without       an end ');
        return wordsPromise
          .then(value => trim(value))
          .then(value => removeMultipleSpaces(value))
          .then(value => appendPeriod(value))
          .then(actual => {assert.equal(actual, 'Sentence without an end.')})
        ;
      });
  
      const asyncUpperCaseStart = (string, onDone) => {
        const format = onDone(string[0].toUpperCase() + string.substr(1));
        setTimeout(format, 10);
      };
  
      it('any of the things given to `then()` can resolve asynchronously (the real power of Promises)', function() {
        const wordsPromise = Promise.resolve('sentence without an end');
        return wordsPromise
          .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
          .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
          .then(actual => {assert.equal(actual, 'Sentence without an end.')})
        ;
      });
  
      it('also asynchronously, the order still matters, promises wait, but don`t block', function() {
        const wordsPromise = Promise.resolve('trailing space   ');
        return wordsPromise
          .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
          .then(string => new Promise(resolve => setTimeout(() => resolve(trim(string)), 100)))
          .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
          .then(actual => {assert.equal(actual, 'Trailing space.')})
        ;
      });
  
    });
  
  });
  
  