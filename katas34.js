//34
// 34: symbol
// A symbol is a unique and immutable data type and may be used as an identifier for object properties
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// To do: make all tests pass, leave the assert lines unchanged!

describe('Symbol', function() {

    it('`Symbol` lives in the global scope', function(){
      //NOTE:
      //const expected = someNamespace.Symbol;

      const expected = Symbol;

      assert.equal(Symbol, expected);
    });
  
    it('every `Symbol()` is unique', function(){
      //NOTE: SYM1 AND TWO NEED TO BE UNIQUE, CANNOT BE DECLARED AS THE SAME.

      //const sym1 = Symbol();
      //const sym2 = sym1;

      const sym1 = Symbol();
      const sym2 = Symbol();
      assert.notEqual(sym1, sym2);
    });
  
    it('every `Symbol()` is unique, also with the same parameter', function(){
    // NOTE: ONCE AGAINE ATTENTION TO SYM BEING UNIQUE TO ITSELF.
    //  var sym1 = Symbol('foo');
    //var sym1 = Symbol('foo');
     //
      var sym1 = Symbol('foo');
      var sym2 = Symbol('foo');
      assert.notEqual(sym1, sym2);
    });
  
    it('`typeof Symbol()` returns "symbol"', function(){
      //NOTE: THE TYPE OF SYMBOL WOULD GO IN THE PERENZ.

      //const theType = typeof Symbol;

      const theType = typeof Symbol();

      assert.equal(theType, 'symbol');
    });
  
    it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
      //NOTE: new, to declare a new symbol.
      //function fn() {
       // Symbol();

      function fn() {
        new Symbol();
      }
      assert.throws(fn);
    });
  
  });


  //35
  // 35: Symbol.for - retreives or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.for` for registering Symbols globally', function() {

    it('creates a new symbol (check via `typeof`)', function() {
      //NOTE: simply added the typof, typof for a new symbol name.

      //const symbolType = Symbol.for('symbol name');
      const symbolType = typeof Symbol.for('symbol name');
      assert.equal(symbolType, 'symbol');
    });
  
    it('stores the symbol in a runtime-wide registry and retreives it from it', function() {

     // const sym = Symbol.for('new symbol');
    //const sym1 = Symbol.for('new symbol1');

     // note: needed to take 1 off new symbol.

      const sym = Symbol.for('new symbol');
      const sym1 = Symbol.for('new symbol');
  
      assert.equal(sym, sym1);
    });
  
    it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
//   NOTE: GLOBAL AND LOCAL NEED TO BE UNIQUE FROM EACH OTHER. WE GET A RETURN OF NOT EQUALL.

     // var globalSymbol = Symbol.for('new symbol');
    //var localSymbol = Symbol.for('new symbol');

      var localSymbol = Symbol.for('new symbol');
      var globalSymbol = Symbol('new symbol');
  
      assert.notEqual(globalSymbol, localSymbol);
    });


  
      it('also contains the key given to `Symbol.for()`', function() {
        //NOTE: THE KEY IS TO DEFINE THE SYMBOL AS LOCAL.

         //const description = Symbol('').toString();
        const description = localSymbol.toString();
        assert.equal(description, 'Symbol(new symbol)');
      });
  
      
  


//36

// 36: Symbol.keyFor - retrieves a shared symbol key from the global symbol registry
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.keyFor()` gets the symbol key for a given symbol', function() {

    const sym = Symbol.for('foo');
  
    it('pass the symbol to `keyFor()` and you get it`s key', function() {
      //NOTE: 
      //const key = Symbol.____(Symbol.for('foo'));

      const key = Symbol.keyFor(sym);
  
      assert.equal(key, 'foo');
    });


  
    it('local symbols are not in the runtime-wide registry', function() {
      // hint: `Symbol()` creates a local symbol!

     //NOTE: took away foo to make the symbol not local.

      //const localSymbol = Symbol.for('foo');
    //const key = Symbol.keyFor(localSymbol);
      const localSymbol = Symbol('foo');
      const key = Symbol.keyFor(localSymbol);
  
      assert.equal(key, void 0);
    });
  
    it('well-known symbols are not in the runtime-wide registry either', function() {
      //NOTE:
      //const key = Symbol.keyFor(Symbol.iteraTor);
      const key = Symbol.keyFor(Symbol.iterator);
  
      assert.equal(key, void 0);
    });
  
    it('for non-Symbols throws an error', function() {
      function fn() {
        Symbol.keyFor(s);
      }
  
      assert.throws(fn);
    });
  
  });

  //37

  // 37: iterator/iterable - array.
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols



describe('array is a built-in iterable object', function() {

    const arr = ['a', 'B', 'see'];
  
    describe('the iterator', function() {
      it('an array has an iterator, which is a function', function() {
        const iterator = arr[Symbol.iterator];
        const theType = typeof iterator;
        const expected = 'function';
  
        assert.equal(theType, expected);
      });
  
      it('can be looped with `for-of`, which expects an iterable', function() {
        let count = 0;
        for (let value of arr) {
          count++;
        }
  
        assert.equal(count, arr.length);
      });
    });
  
    describe('the iterator protocol', function() {
  
      it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
        const iterator = arr[Symbol.iterator]();
        const firstItem = iterator.next();
  
        assert.deepEqual(firstItem, {done: false, value: 'a'});
      });
  
      it('the after-last element has done=true', function() {
        const arr = [];
        const iterator = arr[Symbol.iterator]();
        const afterLast = iterator.next();
  
        assert.deepEqual(afterLast, {done: true, value: void 0});
      });
    });

});

      //38

      // 38: iterator/iterable - string.
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('string is a built-in iterable object', function() {

    const s = 'abc';
  
    describe('string is iterable', function() {
      it('the string`s object key `Symbol.iterator` is a function', function() {
        const isA = typeof s[Symbol.iterator];
        assert.equal(isA, 'function');
      });
      it('use `Array.from()` to make an array out of any iterable', function(){
        const arr = Array.from(s);
        assert.deepEqual(arr, ['a', 'b', 'c']);
      });
    });
  
    describe('a string`s iterator', function() {
      let iterator;
      beforeEach(function() {
        iterator = s[Symbol.iterator]();
      });
  
      it('has a special string representation', function(){
        const description = iterator.toString();
        assert.equal(description, '[object String Iterator]');
      });
  
      it('`iterator.next()` returns an object according to the iterator protocol', function(){
        const value = iterator.next();
        assert.deepEqual(value, {done: false, value: 'a'});
      });
  
      it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
        iterator.next();
        iterator.next();
        iterator.next();
        assert.equal(iterator.next().done, true);
      });
    });
  
  });

  //39
  // 39: iterator - custom. Iterable is a protocol, when implemented allows objects
// to customize their iteration behavior, such as what values are looped over in a for..of construct.
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A simple iterable without items inside, implementing the right protocol', () => {

    function iteratorFunction() {
  
      return {
        next: function() {
          return {done: true};
        }
      }
  
    }
  
    describe('the `iteratorFunction` needs to comply to the iterator protocol', function() {
      it('must return an object', function() {
        assert.equal(typeof iteratorFunction(), 'object');
      });
      it('the object must have a function assigned to a key `next`', function() {
        assert.equal(typeof iteratorFunction().next, 'function');
      });
      it('calling `next()` must return an object with `{done: true}`', function() {
        assert.deepEqual(iteratorFunction().next(), {done: true});
      });
    });
  
    let iterable;
    beforeEach(function() {
      iterable = {};
      iterable[Symbol.iterator] = iteratorFunction;
    });
  
    describe('the iterable', function() {
      it('must be an object', function() {
        assert.equal(typeof iterable, 'object');
      });
      it('must have the iterator function assigned to the key `Symbol.iterator`', function() {
        assert.equal(iterable[Symbol.iterator], iteratorFunction);
      });
    });
    describe('using the iterable', function() {
        it('it contains no values', function() {
          let values = 0;
          for (let value of iterable) {
            values += value;
          }
          assert.equal(values, '');
        });
    
        it('has no `.length` property', function() {
          const hasLengthProperty = 'length' in iterable;
          assert.equal(hasLengthProperty, false);
        });
    
        describe('can be converted to an array', function() {
          it('using `Array.from()`', function() {
            const arr = Array.from(iterable);
            assert.equal(Array.isArray(arr), true);
          });
    
          it('where `.length` is still 0', function() {
            const arr = Array.from(iterable);
            const length = arr.length;
            assert.equal(length, 0);
          });
        });
      });
    
    });

    //40

    // 40: iterator - one example usage. Build an iterable and use it with some built-in ES6 constructs.
// To do: make all tests pass, leave the assert lines unchanged!

// Consumable users:
// - `consumableUser` contains a consumable user,
// - `anyLeft` tells if there is any user left that can be consumed.
class ConsumableUsers {
    constructor() {
      this.users = ['Alice', 'Bob'];
    }
    get nextUser() {
      if (this.users.length > 0) {
        return `user: ${this.users.shift()}`;
      }
      return void 0;
    }
    get anyLeft() {
      return this.users.length > 0;
    }
  }
  
  describe('Iterator usages', () => {
  
    let usersIterable;
    beforeEach(function(){
      const consumableUsers = new ConsumableUsers();
      function iteratorFunction() {
        return {
          next: function() {
            const anyLeft = consumableUsers.anyLeft;
            return {value: consumableUsers.nextUser, done: !anyLeft}
          }
        }
      }
  
      usersIterable = {
        [Symbol.iterator]: iteratorFunction
      };
    });
  
    describe('create an iterator/iterable', function() {
      it('the `usersIterable` should be iterable', function() {
        const isIterable = Symbol.iterator in usersIterable;
        assert.equal(isIterable, true);
      });
      it('the iterator of `usersIterable` should return an object', function() {
        const iterator = usersIterable[Symbol.iterator]();
        assert.equal(typeof iterator, 'object');
      });
  
      it('the iterator of `usersIterable` should have a next function', function() {
        const iterator = usersIterable[Symbol.iterator]();
        assert.equal(typeof iterator.next, 'function');
      });
    });
  
    describe('fill the iterable with content using `ConsumableUsers`', function() {
  
      describe('using the iterator', function() {
        let iterator;
        beforeEach(function(){
          iterator = usersIterable[Symbol.iterator]();
        });
        it('should return `Alice` as first user', function() {
          const firstItem = iterator.next();
          assert.deepEqual(firstItem, {value: "user: Alice", done: false});
        });
        it('should return `Bob` as second user', function() {
          iterator.next(); // drop the first item
          const secondItem = iterator.next();
          assert.deepEqual(secondItem, {value: "user: Bob", done: false});
        });
        it('should return `done:true`, which means there are no more items', function() {
          iterator.next();
          iterator.next();
          const beyondLast = iterator.next();
          assert.deepEqual(beyondLast, {value: void 0, done: true});
        })
      });
      describe('using built-in constructs', function() {
        it('use `Array.from()` to convert an iterable to an array', function() {
          const users = Array.from(usersIterable);
          assert.deepEqual(users, ['user: Alice', 'user: Bob']);
        });
        it('use for-of to loop over an iterable', function() {
          const users = [];
          for (let user of usersIterable) users.push(user);
          assert.deepEqual(users, ['user: Alice', 'user: Bob']);
        });
        it('use the spread-operator to convert/add iterable to an array', function() {
          const users = ['noname', ...usersIterable];
          assert.deepEqual(users, ['noname', 'user: Alice', 'user: Bob']);
        });
        it('destructure an iterable like an array', function() {
          const [firstUser, secondUser] = usersIterable;
          assert.equal(firstUser, 'user: Alice');
          assert.equal(secondUser, 'user: Bob');
        })
      });
    });
  
  });
  

