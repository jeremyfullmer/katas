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
       // Note: needed to change the third const to a function, because "expected" is in the params of the function on the assert."
        //const iterator = arr[Symbol.iterator];
      //const theType = typeof iterator;
      //const expected = 'iterator?';

        const iterator = arr[Symbol.iterator];
        const theType = typeof iterator;
        const expected = 'function';
  
        assert.equal(theType, expected);
      });
  
      it('can be looped with `for-of`, which expects an iterable', function() {
        //Note: length is always initialized at zero, therfore must be incremented and not decremented.!!
        //let count = 0;
      //for (let value of arr) {
       // count--;
      //}
        let count = 0;
        for (let value of arr) {
          count++;
        }
  
        assert.equal(count, arr.length);
      });
    });
  
    describe('the iterator protocol', function() {
  
      it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
        //Note: 
        //const iterator = arr[Symbol.iterator]();
      //const firstItem = iterator.___();

        const iterator = arr[Symbol.iterator]();
        const firstItem = iterator.next();
        
        assert.deepEqual(firstItem, {done: false, value: 'a'});
      });
  
      it('the after-last element has done=true', function() {

        //Note: the iterater must be given the command of .next, in order to eventually have a true value of done on the assert!!

       // const arr = [];
      //const iterator = arr[Symbol.iterator]();
      //const afterLast = iterator;

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
        //const isA = typeof s.Symbol.iterator; NOTE, made sure to turn symbole.iterator into an object due to directions from 'it'!!

        const isA = typeof s[Symbol.iterator];
        assert.equal(isA, 'function');
      });
      it('use `Array.from()` to make an array out of any iterable', function(){

        //const arr = s;  NOTE; will declare the array.from function with using "s" as the perameter.

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
       // const description = iterator.to____();  NOTE, needed to call tostring as per string representation.
        const description = iterator.toString();
        assert.equal(description, '[object String Iterator]');
      });
  
      it('`iterator.next()` returns an object according to the iterator protocol', function(){
        //const value = iterator.___();  NOTE called iterator.next according to the protocal.
        const value = iterator.next();
        assert.deepEqual(value, {done: false, value: 'a'});
      });
  
      it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
       // iterator.next(); NOTE needed to call iterator.next until test passed..
        iterator.next();
        iterator.next();
        iterator.next();
        assert.equal(iterator.next().done, true);
      });
    });
  
  });

  //39
  // 39: iterator - custom. Iterable is a protocol, when implemented allows objects




describe('A simple iterable without items inside, implementing the right protocol', () => {

//NOTE, as per directions i turned iteratot into an arror function to eventually give me a return of done:true in the form of an object.

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


  //let iterable;
 // beforeEach(function() {
   // iterable;

  });
//NOTE,in order to have an object returned, i have to make iterable = to an object, as per the directions. re-define iterable as symbol.iterator
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
          

    
  
    
      

