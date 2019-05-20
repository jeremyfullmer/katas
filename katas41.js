// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!

describe('`[].entries()` returns an iterator object with all entries', function() {

    it('returns key+value for each element', function() {
      //NOTE, USED ARR.ENTRIES to return all of the entries as per the directions.

     // const arr = ['a', 'b', 'c'];
    //const entriesAsArray = Array.from(arr.___());

      const arr = ['a', 'b', 'c'];
      const entriesAsArray = Array.from(arr.entries());
  
      assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
    });
  
    it('empty elements contain the value `undefined`', function() {

     // NOTE needed to define a "firstvalue." 2nd value should now be 3, and firstvalue should be one.

    //   const arr = ['one'];
    // arr[2] = 'three';
    // const secondValue = arr.entries(); 

      const arr = ['one'];
      arr[2] = 'three';
      let entries = arr.entries();
      const firstValue = entries.next().value;
      const secondValue = entries.next().value;
  
      assert.deepEqual(secondValue, [1, void 0]);
    });
  
    

  // 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {

    it('`keys()` returns an iterator', function() {
      //NOTE ARR MUST BE = TO 'A' AS THER IS NO SEEN VALUE FOR 'B'

      //const arr = ['a', 'b'];
     // const iterator = arr.keys();
      const arr = ['a'];
      const iterator = arr.keys();
  
      assert.deepEqual(iterator.next(), {value: 0, done: false});
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
  
    it('gets all keys', function() {
      //NOTE GAVE ARR THE VALUES OF 123 AS PER THE DEEPEQUAL.

     // const arr = ['a', 'b'];
      //const keys = Array.from(arr.keys());
      const arr = [0, 1, 2];
      const keys = Array.from(arr.keys());
  
      assert.deepEqual(keys, [0, 1, 2]);
    });
  
    it('empty array contains no keys', function() {
   //NOTE HAD TO EMPTY THE ARRAY SO THE KEYS.LENGTH WOULD BE ZERO.

//const arr = ['empty me'];
   // const keys = [...arr.keys()];
      const arr = [];
      const keys = [...arr.keys()];
  
      assert.equal(keys.length, 0);
    });
  
    it('a sparse array without real values has keys though', function() {
      //NOTE  GAVE KEYS TO THE SPARSED ARRAY.

      //const arr = [,,];
    //const keys = [...arr.___()];
      const arr = [,,];
      const keys = [...arr.keys()];
  
      assert.deepEqual(keys, [0, 1]);
    });
  
  //43 43 43 43 !!!!!!



describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

    it('`values()` returns an iterator', function() {
      //NOTE VAlu returned is zero and void due to the array being empty,

      //const arr = ['k', 'e', 'y'];
      //const iterator = arr.values();

      const arr = [];
      const iterator = arr.values();
  
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
  
    it('use iterator to drop first key', function() {
      //NOTE  dropped keys from the array by using iterator, returned value of array of 'values, and entries'

      //const arr = ['keys', 'values', 'entries'];
    //const iterator = arr.values();

      const arr = ['keys', 'values', 'entries'];
      const iterator = arr.values();
      iterator.next();
  
      assert.deepEqual([...iterator], ['values', 'entries']);
    });
  
    it('empty array contains no values', function() {
      //NOTE tookm all value out of the array to return a .length of zero

      //const arr = [...[...[...[...'1']]]];
     // const values = [...arr.values()];

      const arr = [...[...[...[...'']]]];
      const values = [...arr.values()];
  
      assert.equal(values.length, 0);
    });
  
    it('a sparse array without real values has values though', function() {
     //NOTE took value of zero out, leaving a return of 'void'

     // const arr = [, 0];
   // const keys = [...arr.values()];
      const arr = [,,];
      const keys = [...arr.values()];
  
      assert.deepEqual(keys, [void 0, void 0]);
    });
  
   



//44
  // 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!


describe('`Map` is a key/value map', function(){

    it('`Map` is a new global constructor function', function() {
      assert.equal(typeof Map, 'function');
    });
  
    it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
      let map = new Map();
      map.set('key', 'value');
      //NOTE, needed to get the key as per directions.
      //const value = map.get();
      const value = map.get('key');
  
      assert.equal(value, 'value');
    });
  
    it('`has()` tells if map has the given key', function() {
      let map = new Map();
      map.set('key', 'value');
     // const hasIt = map.hazz;
     //NOTE, change hazz to has to get key with a boolean to true, or value.

      const hasIt = map.has('key');
  
      assert.equal(hasIt, true);
    });
  
    it('a map is iterable', function() {
      let map = new Map();
      map.set('1', 'one');
      map.set('2', 'two');
      //NOTE, made a map function to display the object of one and two all as strings.
      //const mapAsArray = map;
      const mapAsArray = Array.from(map);
  
      assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
    });
  
  
    

  //45
  


describe('`Map.prototype.get` returns the element from the map for a key', function(){

  it('`get(key)` returns the value stored for this key', function() {
    //NOTE, IN ORDER TO GET THE THE VALUE STORED FOR THE KEY, I MUST INCLUDE 'KEY' WITH MAP.GET 
    //let map = new Map();
   // map.set('key', 'value');
   // const value = map.get;

    let map = new Map();
    
    map.set('key', 'value');

const value = map.get('key');
    assert.equal(value, 'value');
  });

  it('multiple calls still return the same value', function() {
    //NOTE,  HERE WE I WANTED TO GET A VALUE. NO NEW VALUES HAVE BEEN ASSIGNED, THEREFORE, SAME VALUE.
    //let map = new Map();
   // map.set('value', 'value');
    //var value = map.get(map.get(map.get()));

    let map = new Map();
    map.set('value', 'value');

    var value = map.get(map.get(map.get('value')));
    assert.equal(value, 'value');
  });

  it('requires exactly the value as passed to `set()`', function() {
    //NOTE, OBJ IS ALREADY CONST, THEREFORE IS ALREADY PASSED IN MAP.SET
    //let map = new Map();
   // const obj = {};
   // map.set({}, 'object is key');
    let map = new Map();
    const obj = {};
    map.set(obj, 'object is key');

    assert.equal(map.get(obj), 'object is key');
  });

  it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    //NOTE, GOT IT TO WORK BUT DONT KNOW WHY.
    //let map = new Map();
   // map.set(void 0, 'yo');
   // const value = map.get(___);
    let map = new Map();
    map.set(void 0, 'yo');

    const value = map.get(void 0);
    assert.equal(value, 'yo');
  });

  it('returns undefined for an unknown key', function() {
    //NOTE, IS UNDEFINED BECAUSE BOOM HAS NOT BEEN PRVIOUSLY DEFINED.
   // let map = new Map();
   // map.set(void 0, 1);
   // const value = map.get();
    let map = new Map();
    map.set('boom', void 0);

    const value = map.get('boom');
    assert.equal(value, void 0);
  });

});

//46

Keys??


  
    

  //47   Set?
  // 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` lets you store unique values of any type', function(){

    it('`Set` is a new global constructor function', function() {
      assert.equal(typeof Set, 'function');
    });
  
    it('every value in a set is unique', function() {
      let set = new Set();
      let set = new Set();
      //NOTE,
    //set.add(1);
    //set.add(1);
   // const expectedSize = 2;
  
      set.add(1);
      set.add(1);
      const expectedSize = 1;
  
      assert.equal(set.size, expectedSize);
    });
  
    it('the string "1" is different to the number 1', function() {
      //NOTE,
     // let set = new Set();
     // set.add(1);
      let set = new Set();
      set.add(1);
      set.add('1');
      assert.equal(set.size, 2);
    });
  
    it('even NaN is equal to NaN', function() {
      //NOTE,
      //let set = new Set();
      //set.add(NaN);
     // set.add(Na);
      let set = new Set();
      set.add(NaN);
      set.add(NaN);
  
      assert.equal(set.size, 1);
    });
  
    it('+0 and -0 are seen as equal', function() {
      //NOTE,
      //let set = new Set();
     // set.add(+0);
     // set.add(0);
     // set.add('-0');
      let set = new Set();
      set.add(+0);
      set.add(-0);
  
      assert.deepEqual([...set.values()], [+0]);
    });
  
  });

  //48

  // 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!

describe('`add()` appends a new element to the end of a Set object.', function(){

    let set;
    beforeEach(() => set = new Set());
  
    it('adds every value, of any type, only ones', function() {
      //const fn = () => {}; as result only the same type was added.
      const fn = () => {};
  
      set.add(1);
      set.add(1);
      set.add(fn);//not same type.
      set.add(fn);// not same type.
  
      assert.equal(set.size, 2);
    });
  
    it('is chainable', function() {
      //NOTE, is true due to being in the set alopng with add(1).
      //set.add.add;
      set.add(1).add(2);
      assert.equal(set.has(2), true);
    });
  
    it('call without params adds undefined', function() {
      //NOTE, the perenz enables the function to not be in a state of undefined. is void because ther is no values to add
      //set.add
      set.add()
  
      assert.equal(set.has(void 0), true);
    });
  
    it('0, -0 and +0 are equal', function() {
     // NOTE, zero is known as a point of origin, so negetive or positive zero is irrelevant. zero === zero
      //set.add();
     // set.add();
      set.add(0);
      set.add(-0);
  
      assert.equal(set.has(+0), true);
    });
  });

  //49
  // 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator can be created in multiple ways', function() {

    it('the most common way is by adding `*` after `function`', function() {
      //NOTE, added the generator symbol after the function.
      //function g() {}
      function* g() {}
      assertIsGenerator(g());
    });
  
    it('as a function expression, by adding a `*` after `function`', function() {
      //NOTE, generator * implimented as per directions. added the asterisk.
      //let g = function() {};
      let g = function*() {};
      assertIsGenerator(g());
    });
  
    it('inside an object by prefixing the function name with `*`', function() {
      //NOTE, prefixed the function name...
      //let obj = {
     //   g() {}

      let obj = {
        *g() {}
      };
      assertIsGenerator(obj.g());
    });
  
    it('computed generator names, are just prefixed with a `*`', function() {

      //NOTE, [generatorname] has been prefixed with the generator symbol as directed.

      //const generatorName = 'g';
    //let obj = {
      //[generatorName]() {}

      const generatorName = 'g';
      let obj = {
        *[generatorName]() {}
      };
      assertIsGenerator(obj.g());
    });
  
    it('inside a class the same way', function() {
      //NOTE, same idea as one previous.

//const generatorName = 'g';
   // class Klazz {
      //[generatorName]() {}
   // }

      NodeIterator,
      const generatorName = 'g';
      class Klazz {
        *[generatorName]() {}
      }
      assertIsGenerator(new Klazz().g());
    });
  
//     function assertIsGenerator(gen) {
//       //NOTE,
// //const toStringed = '' + gen;
//       const toStringed = '' + gen;
//       assert.equal(toStringed, '[object Generator]');
//     }
  
//   });

  //50

  // 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!

describe('a generator returns an iterable object', function() {

    function* generatorFunction(){
      yield 1;
      yield 2;
    }
  
    let generator;
  
    beforeEach(() => {
      generator = generatorFunction();
    });
  
  
    it('a generator returns an object', function() {
      //note, made = object to return an object.
     // const typeOfTheGenerator = '';
      const typeOfTheGenerator = 'object';
      assert.equal(typeof generator, typeOfTheGenerator);
    });
  
    it('a generator object has a key `Symbol.iterator`', function() {
      //note, symbol.iterator has been turned into a key. generator = true.
      //const key = '???';
      const key = Symbol.iterator;
      assert.equal(key in generator, true);
    });
  
    it('the `Symbol.iterator` is a function', function() {
      //note, defined in a function in  the assert.
      //const theType = typeof generator.Symbol.iterator;
      const theType = typeof generator[Symbol.iterator];
      assert.equal(theType, 'function');
    });
  
    it('can be looped with `for-of`, which expects an iterable', function() {
      function iterateForOf(){
        for (let value of generatorFunction()) {
          // no statements needed
        }
      }
      assert.doesNotThrow(iterateForOf);
    });
  
  });

  //51
  // 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator - `yield` is used to pause and resume a generator function', () => {

    function* generatorFunction() {
      yield 'hello';
      yield 'world';
    }
  
    let generator;
  
    beforeEach(function() {
      generator = generatorFunction();
    });
  
    it('converting a generator to an array resumes the generator until all values are received', () => {
      let values = Array.from(generator);
      assert.deepEqual(values, ['hello', 'world']);
    });
  
    describe('after the first `generator.next()` call', function() {
  
      it('the value is "hello"', function() {
        //note, needed to call a function after gen.nxt
        //const {value} = generator.next;
        const {value} = generator.next();
         
        assert.equal(value, 'hello');
      });
  
      it('and `done` is false', function() {
        //note, instead of second, make in to next! with a function.
       // const done = secondItem; 
        const {done} = generator.next();
        assert.equal(done, false);
      });
  
    });
  
    describe('after the second `next()` call', function() {
  
      let secondItem;
      beforeEach(function() {
        generator.next();
        secondItem = generator.next();
      });
      it('`value` is "world"', function() {
        
        let {value} = secondItem;
        assert.equal(value, 'world');
      });
  
      it('and `done` is still false', function() {
        //note, went off of the leadership of prious example 2nd item being false.
       // const done = secondItem;
        const {done} = secondItem;
        assert.equal(done, false);
      });
    });
  
    describe('after stepping past the last element, calling `next()` that often', function() {
  
      it('`done` property equals true, since there is nothing more to iterator over', function() {
        generator.next();
        generator.next();
        //note, 
        //let done = generator.done;
        let {done} = generator.next();
        assert.equal(done, true);
      });
  
    });
  
  });

  //52  dont know generator function, wasnt tought.

  // 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a value to a generator', () => {

    it('basics: get the values from a generator in two ways', function() {
      function* generatorFunction() {
        yield 1;
        yield 2;
      }
      // way #1
      var convertedToAnArray = Array.from(generatorFunction());
      // way #2
      //note,generator function, wtf?
     // var iterator = generatorFunction();
      //var iteratedOver = [iterator.next().___, iterator.___];
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(2).value];
      assert.deepEqual(convertedToAnArray, iteratedOver);
    });
  
    it('pass a value to the iterator', function() {
      function* generatorFunction() {
        yield 1;
        yield 2;
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(2).value];
      assert.deepEqual([1, 2], iteratedOver);
    });
  
    it('a value passed to the 1st `next()` call is ignored', function() {
      function* generatorFunction() {
        //note,
        //yield 1;
      //yield param;
        yield 1;
        yield 2;
      }
      

  //53

  // 53: Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!

describe('initialize a `Map`', function(){

    it('a `new Map()` is empty, has size=0', function() {
      //note,
     // const mapSize = new Map();
      const mapSize = new Map().size;
      assert.equal(mapSize, 0);
    });
  
    it('init Map with `[[]]` has a size=1', function() {
      //note,
     // const mapSize = new Map().size;
      const mapSize = new Map([[]]).size;
  
      assert.equal(mapSize, 1);
    });
  
    it('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {

      let map1 = new Map([[1]]);
      let map2 = new Map().set(1, void 0);
  
      assertMapsEqual(map1, map2);
    });
  
    it('init Map with multiple key+value pairs', function() {
      //note,
      //let map1 = new Map();
      //let map2 = new Map().set(1, void 0);
      const pair1 = [1, 'one'];
      const pair2 = [2, 'two'];
  
      const map = new Map([pair1, pair2]);
  
      assertMapsEqual(map, new Map().set(...pair1).set(...pair2));
    });
  
    it('keys are unique, the last one is used', function() {
      
      
    
   
    //NOTE, AS PER NEW CONST, THE LAST PAIR IS USED.
    //const map = new Map([pair3, pair1, pair2, pair4]);
      const pair1 = [1, 'one'];
      const pair2 = [1, 'uno'];
      const pair3 = [1, 'eins'];
      const pair4 = [2, 'two'];
  
      const map = new Map([pair4]);
  
      assertMapsEqual(map, new Map().set(...pair3).set(...pair4));
    });

    it('init Map from an Object, is a bit of work', function() {

        let map = new Map();
        //NOTE, 
        //const obj = {x: 1, y: 2};
       // const keys = Object.keys(obj);
        const obj = {x: 1, y: 2};
        const keys = Object.keys(obj);
        keys.forEach(key => map.set(key, obj[key]));
        
        
        const expectedEntries = [['x', 1], ['y', 2]];

        assertMapsEqual(map, expectedEntries);
      });
    });
    
    function mapToArray(map) {
      return Array.from(map);
    }
    function assertMapsEqual(map1, map2) {
      assert.deepEqual(mapToArray(map1), mapToArray(map2));
    }
    
    

  