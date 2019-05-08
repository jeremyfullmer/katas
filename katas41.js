// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!

describe('`[].entries()` returns an iterator object with all entries', function() {

    it('returns key+value for each element', function() {
      const arr = ['a', 'b', 'c'];
      const entriesAsArray = Array.from(arr.entries());
  
      assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
    });
  
    it('empty elements contain the value `undefined`', function() {
      const arr = ['one'];
      arr[2] = 'three';
      let entries = arr.entries();
      const firstValue = entries.next().value;
      const secondValue = entries.next().value;
  
      assert.deepEqual(secondValue, [1, void 0]);
    });
  
    describe('returns an iterable', function() {
  
      it('has `next()` to iterate', function() {
        const arr = ['one'];
        const value = arr.entries().next().value;
  
        assert.deepEqual(value, [0, 'one']);
      });
  
    });
    
  });

  // 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {

    it('`keys()` returns an iterator', function() {
      const arr = ['a'];
      const iterator = arr.keys();
  
      assert.deepEqual(iterator.next(), {value: 0, done: false});
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
  
    it('gets all keys', function() {
      const arr = [0, 1, 2];
      const keys = Array.from(arr.keys());
  
      assert.deepEqual(keys, [0, 1, 2]);
    });
  
    it('empty array contains no keys', function() {
      const arr = [];
      const keys = [...arr.keys()];
  
      assert.equal(keys.length, 0);
    });
  
    it('a sparse array without real values has keys though', function() {
      const arr = [,,];
      const keys = [...arr.keys()];
  
      assert.deepEqual(keys, [0, 1]);
    });
  
    it('also includes holes in sparse arrays', function() {
      const arr = ['a', , 'c'];
      const keys = [...arr.keys()];
  
      assert.deepEqual(keys, [0, 1, 2]);
    });
  });

  //43
  // 43: array - `Array.prototype.values`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

    it('`values()` returns an iterator', function() {
      const arr = [];
      const iterator = arr.values();
  
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
  
    it('use iterator to drop first key', function() {
      const arr = ['keys', 'values', 'entries'];
      const iterator = arr.values();
      iterator.next();
  
      assert.deepEqual([...iterator], ['values', 'entries']);
    });
  
    it('empty array contains no values', function() {
      const arr = [...[...[...[...'']]]];
      const values = [...arr.values()];
  
      assert.equal(values.length, 0);
    });
  
    it('a sparse array without real values has values though', function() {
      const arr = [,,];
      const keys = [...arr.values()];
  
      assert.deepEqual(keys, [void 0, void 0]);
    });
  
    it('also includes holes in sparse arrays', function() {
      const arr = ['a',,'c'];
  
      assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
    });
  
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
      const value = map.get('key');
  
      assert.equal(value, 'value');
    });
  
    it('`has()` tells if map has the given key', function() {
      let map = new Map();
      map.set('key', 'value');
      const hasIt = map.has('key');
  
      assert.equal(hasIt, true);
    });
  
    it('a map is iterable', function() {
      let map = new Map();
      map.set('1', 'one');
      map.set('2', 'two');
      const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
  
      assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
    });
  
  
    it('complex types can be keys', function() {
      const obj = {x: 1};
      const otherObj = {x: 1};
      let map = new Map();
      map.set(obj, '');
  
      assert.equal(map.has(otherObj), false);
    });
  
  });

  //45
  / 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.get` returns the element from the map for a key', function(){

  it('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');

    const value = map.get('key');
    assert.equal(value, 'value');
  });

  it('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');

    var value = map.get(map.get(map.get('value')));
    assert.equal(value, 'value');
  });

  it('requires exactly the value as passed to `set()`', function() {
    let map = new Map();
    const obj = {};
    map.set(obj, 'object is key');

    assert.equal(map.get(obj), 'object is key');
  });

  it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    let map = new Map();
    map.set(void 0, 'yo');

    const value = map.get(void 0);
    assert.equal(value, 'yo');
  });

  it('returns undefined for an unknown key', function() {
    let map = new Map();
    map.set('boom', void 0);

    const value = map.get('boom');
    assert.equal(value, void 0);
  });

});

//46

// 46: Map.prototype.set()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.set` adds a new element with key and value to a Map', function(){

    it('simplest use case is `set(key, value)` and `get(key)`', function() {
      let map = new Map();
      map.set('key', 'value');
  
      assert.equal(map.get('key'), 'value');
    });
  
    it('the key can be a complex type too', function() {
      const noop = function() {};
      let map = new Map();
      map.set(noop, 'the real noop');
  
      assert.equal(map.get(noop), 'the real noop');
    });
  
    it('calling `set()` again with the same key replaces the value', function() {
      let map = new Map();
      map.set('key', 'value');
      map.set('key', 'value1');
  
      assert.equal(map.get('key'), 'value1');
    });
  
    it('`set()` returns the map object, it`s chainable', function() {
      let map = new Map();
      map.set(1, 'one')
         .set(2, 'two')
         .set(3, 'three');
  
      assert.deepEqual([...map.keys()], [1,2,3]);
      assert.deepEqual([...map.values()], ['one', 'two', 'three']);
    });
  
  });

  //47
  // 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` lets you store unique values of any type', function(){

    it('`Set` is a new global constructor function', function() {
      assert.equal(typeof Set, 'function');
    });
  
    it('every value in a set is unique', function() {
      let set = new Set();
  
      set.add(1);
      set.add(1);
      const expectedSize = 1;
  
      assert.equal(set.size, expectedSize);
    });
  
    it('the string "1" is different to the number 1', function() {
      let set = new Set();
      set.add(1);
      set.add('1');
      assert.equal(set.size, 2);
    });
  
    it('even NaN is equal to NaN', function() {
      let set = new Set();
      set.add(NaN);
      set.add(NaN);
  
      assert.equal(set.size, 1);
    });
  
    it('+0 and -0 are seen as equal', function() {
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
      const fn = () => {};
  
      set.add(1);
      set.add(1);
      set.add(fn);
      set.add(fn);
  
      assert.equal(set.size, 2);
    });
  
    it('is chainable', function() {
      set.add(1).add(2);
  
      assert.equal(set.has(2), true);
    });
  
    it('call without params adds undefined', function() {
      set.add()
  
      assert.equal(set.has(void 0), true);
    });
  
    it('0, -0 and +0 are equal', function() {
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
      function* g() {}
      assertIsGenerator(g());
    });
  
    it('as a function expression, by adding a `*` after `function`', function() {
      let g = function*() {};
      assertIsGenerator(g());
    });
  
    it('inside an object by prefixing the function name with `*`', function() {
      let obj = {
        *g() {}
      };
      assertIsGenerator(obj.g());
    });
  
    it('computed generator names, are just prefixed with a `*`', function() {
      const generatorName = 'g';
      let obj = {
        *[generatorName]() {}
      };
      assertIsGenerator(obj.g());
    });
  
    it('inside a class the same way', function() {
      const generatorName = 'g';
      class Klazz {
        *[generatorName]() {}
      }
      assertIsGenerator(new Klazz().g());
    });
  
    function assertIsGenerator(gen) {
      const toStringed = '' + gen;
      assert.equal(toStringed, '[object Generator]');
    }
  
  });

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
      const typeOfTheGenerator = 'object';
      assert.equal(typeof generator, typeOfTheGenerator);
    });
  
    it('a generator object has a key `Symbol.iterator`', function() {
      const key = Symbol.iterator;
      assert.equal(key in generator, true);
    });
  
    it('the `Symbol.iterator` is a function', function() {
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
        const {value} = generator.next();
        assert.equal(value, 'hello');
      });
  
      it('and `done` is false', function() {
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
        const {done} = secondItem;
        assert.equal(done, false);
      });
    });
  
    describe('after stepping past the last element, calling `next()` that often', function() {
  
      it('`done` property equals true, since there is nothing more to iterator over', function() {
        generator.next();
        generator.next();
        let {done} = generator.next();
        assert.equal(done, true);
      });
  
    });
  
  });

  //52

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
        yield 1;
        yield 2;
      }
      let iterator = generatorFunction();
      const values = [
        iterator.next('irrelevant').value,
        iterator.next(2).value
      ];
      assert.deepEqual(values, [1, 2]);
    });
  
  });

  //53

  // 53: Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!

describe('initialize a `Map`', function(){

    it('a `new Map()` is empty, has size=0', function() {
      const mapSize = new Map().size;
      assert.equal(mapSize, 0);
    });
  
    it('init Map with `[[]]` has a size=1', function() {
      const mapSize = new Map([[]]).size;
  
      assert.equal(mapSize, 1);
    });
  
    it('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {
      let map1 = new Map([[1]]);
      let map2 = new Map().set(1, void 0);
  
      assertMapsEqual(map1, map2);
    });
  
    it('init Map with multiple key+value pairs', function() {
      const pair1 = [1, 'one'];
      const pair2 = [2, 'two'];
  
      const map = new Map([pair1, pair2]);
  
      assertMapsEqual(map, new Map().set(...pair1).set(...pair2));
    });
  
    it('keys are unique, the last one is used', function() {
      const pair1 = [1, 'one'];
      const pair2 = [1, 'uno'];
      const pair3 = [1, 'eins'];
      const pair4 = [2, 'two'];
  
      const map = new Map([pair3, pair4]);
  
      assertMapsEqual(map, new Map().set(...pair3).set(...pair4));
    });
    it('init Map from an Object, is a bit of work', function() {
        let map = new Map();
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
    

  