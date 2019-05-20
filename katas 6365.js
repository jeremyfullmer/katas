// 63: String - `includes()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`string.includes()` finds string within another string', function() {

    describe('find a single character', function() {
      it('in a three char string', function() {
        //const searchString = 'a';
         //NOTE NOTE!!!!
        const searchString = 'x';
        assert.equal('xyz'.includes(searchString), true);
      });
      it('reports false if character was not found', function() {
       // const expected = '???';
        //NOTE NOTE!!!!
        const expected = false;
        assert.equal('xyz'.includes('abc'), expected);
      });
    });
  
    describe('find a string', function() {
      it('that matches exactly', function() {
       // const findSome = findMe => 'xyz'.includes;
        //NOTE NOTE!!!!
        const findSome = findMe => 'xyz'.includes(findMe);
        assert.equal(findSome('xyz'), true);
      });
    });
  
    describe('search for an empty string, is always true', function() {
      it('in an empty string', function() {
        //const emptyString = ' ';
         //NOTE NOTE!!!!
        const emptyString = '';
        assert.equal(''.includes(emptyString), true);
      });
      it('in `abc`', function() {
       // const actual = _.includes('');
        //NOTE NOTE!!!!
        const actual = 'abc'.includes('');
        assert.equal(actual, true);
      });
    });
  
    describe('special/corner cases', function() {
      it('search for `undefined` in a string fails', function() {
        //const findInAbc = (what) => 'abc'.includes;
         //NOTE NOTE!!!!

        const findInAbc = (what) => 'abc'.includes(what);
        assert.equal(findInAbc(void 0), false);
      });
      it('searches case-sensitive', function() {
        //const findInAbc = (what) => 'abc'.inkludez(what);
         //NOTE NOTE!!!!

        const findInAbc = (what) => 'abc'.includes(what);
        assert.equal(findInAbc('A'), false);
      });
      it('must NOT be a regular expression', function() {
        //const regExp = '';
         //NOTE NOTE!!!!

        const regExp = /^.?/g;
        assert.throws(() => {''.includes(regExp)});
      });
      describe('coerces the searched "thing" into a string', function() {
        it('e.g. from a number', function() {
          //const actual = '123'.includes(4);
           //NOTE NOTE!!!!

          const actual = '1234'.includes(4);
          assert.equal(actual, true);
        });
        it('e.g. from an array', function() {
          //const actual = '123'.includes([1,2,3]);
           //NOTE NOTE!!!!

          const actual = '1,2,3'.includes([1,2,3]);
          assert.equal(actual, true);
        });
        it('e.g. from an object, with a `toString()` method', function() {
          // const objWithToString = {toString: 1};
           //NOTE NOTE!!!!

          const objWithToString = {toString: () => 1};
          assert.equal('123'.includes(objWithToString), true);
        });
      });
    });
  
    describe('takes a position from where to start searching', function() {
      it('does not find `a` after position 1 in `abc`', function() {
        // const position = 0;
         //NOTE NOTE!!!!

        const position = 1;
        assert.equal('abc'.includes('a', position), false);
      });
      it('even the position gets coerced', function() {
        //const findAtPosition = position => 'xyz'.includes('x', pos);
         //NOTE NOTE!!!!
        const findAtPosition = (pos) => 'xyz'.includes('z', pos);
        assert.equal(findAtPosition('2'), true);
      });
      describe('invalid positions get converted to 0', function() {
        it('e.g. `undefined`', function() {
          //const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
            //NOTE NOTE!!!!
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(void 0), true);
        });
        it('negative numbers', function() {
          // const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
           //NOTE NOTE!!!!
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(-2), true);
        });
        it('NaN', function() {
          //const findAtPosition = (pos) => 'xyz'.includes('x', 1);
           //NOTE NOTE!!!!
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(NaN), true);
        });
      });
    });
  
  });

  //64
  // 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!

describe('`set.delete()` deletes an element from a set', function(){

    let set;
    beforeEach(() => set = new Set());
  
    describe('use `delete(<value>)` to delete an element', function() {
      beforeEach(function() {
        
        set.add('one').add('two').add('three');
      });
      it('`delete()` returns `true` when the element was found', function() {
        // const returns = set.remove;
         //NOTE NOTE!!!!
        const returns = set.delete('one');
        assert.strictEqual(returns, true);
      });
      it('and the size decreases', function() {
        set.delete('one');
        assert.equal(set.size, 2);
      });
    });
  
    describe('if nothing was deleted (no element with the given value was found)', function() {
      it('returns `false`', function() {
        set.add('one');
        //  const returns = set.delete('one');
         //NOTE NOTE!!!!

        const returns = set.delete();
  
        assert.equal(returns, false);
      });
    });
  
    describe('`undefined` is a valid value in a set', function() {
      it('deleting it, when it is not in the set, returns `false` too', function() {
        //
        const whatToDelete = undefined;
        assert.equal(set.delete(whatToDelete), false);
      });
  
      it('`delete()` removes it, when its in the set', function() {
        
        set.add(undefined);
        assert.equal(set.delete(), true);
      });
    });
  
  
    describe('the value does NOT get casted', function() {
      it('number 1 is different to string "1"', function() {
        //set.add(1);
     // set.add('1');
      //NOTE NOTE!!!!
        set.add(1);
        assert.equal(set.delete('1'), false);
      });
    });
  });
//65
  // 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` API overview', function(){
  //  const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
  //    let set = new Set([]);
   //NOTE NOTE!!!!
    const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
    let set;
    beforeEach(function() {
      set = new Set(api);
    });
  
    it('a Set can be created from an array', function() {
      //    let set = new Set([]);
       //NOTE NOTE!!!!
     let set = new Set(api);
      assert.deepEqual(Array.from(set), api);
    });
  
    it('`size` is the number of values', function() {
      //    const theSize = set.count;
       //NOTE NOTE!!!!
      const theSize = set.size;
      assert.equal(theSize, api.length);
    });
  
    it('`add()` appends the given value', function() {
      set.add(Symbol.iterator);
      // hint: to make the example consistent you can add the `Symbol.iterator` to `set`
      // strongly speaking it is missing in the API.
       //NOTE NOTE!!!!
      assert.equal(set.size, api.length + 1);
    });
  
    it('`clear()` removes all elements', function() {
      //
      set.clear();
      assert.equal(set.size, 0);
    });
  
    it('`delete()` removes the given value', function() {
      set.delete('delete');
      assert.equal(set.size, api.length - 1);
    });
  
    it('`entries()` returns an iterator for all values', function() {
     // const expectedEntries = api.map(entry => [entry, entry]);
    //const actualEntries = set.entry;
     //NOTE NOTE!!!!
      const ecpectedEntries = api.map(entry => [entry, entry]);
      const actualEntries = set.entries();
      assert.deepEqual([...actualEntries], ecpectedEntries);
    });
  
    it('`forEach()` calls a callback for each value', function() {
      let values = [];
      

      set.forEach(value => { values.push(value); });
      assert.deepEqual(values, api);
    });
  
    it('`has()` returns true if the given value is in the set', function() {
      //    const propertyName = '';
       //NOTE NOTE!!!!
      const propertyName = 'has';
      assert.equal(set.has(propertyName), true);
    });
  
    describe('returns an iterator that contains all values', function() {
      // in order to be alike to `Map` `keys()` and `values()` are essentially the same thing for a `Set`.
      it('`keys()`', function() {
        // const allKeys = Object.keys(set);
         //NOTE NOTE!!!!
        const allKeys = set.keys();
        assert.deepEqual([...allKeys], api);
      });
  
      it('`values()`', function() {
        //const allValues = set.value();
         //NOTE NOTE!!!!
        const allValues = set.values();
        assert.deepEqual([...allValues], api);
      });
  
      it('`[Symbol.iterator]()`', function() {
        //      const iteratorKey = '???';
        //NOTE NOTE!!!!
        const iteratorKey = Symbol.iterator;
        assert.deepEqual([...set[iteratorKey]()], api);
      });
    });
  
  });
  
  