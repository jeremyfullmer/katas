//62?

// 63: String - `includes()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`string.includes()` finds string within another string', function() {

    describe('find a single character', function() {
      it('in a three char string', function() {
        //const searchString = 'a';
         //NOTE NOTE!!!! able to find 'x' not 'a', 'a' is not in the string.
        const searchString = 'x';
        assert.equal('xyz'.includes(searchString), true);
      });
      it('reports false if character was not found', function() {
       // const expected = '???';
        //NOTE NOTE!!!! abs not included in xyz., exp = false.
        const expected = false;
        assert.equal('xyz'.includes('abc'), expected);
      });
    });
  
    describe('find a string', function() {
      it('that matches exactly', function() {
       // const findSome = findMe => 'xyz'.includes;
        //NOTE NOTE!!!! xyz matches === true.
        const findSome = findMe => 'xyz'.includes(findMe);
        assert.equal(findSome('xyz'), true);
      });
    });
  
    describe('search for an empty string, is always true', function() {
      it('in an empty string', function() {
        //const emptyString = ' '; not empty due to a space character.
         //NOTE NOTE!!!! empty string is obviously true
        const emptyString = '';
        assert.equal(''.includes(emptyString), true);
      });
      it('in `abc`', function() {
       // const actual = _.includes('');
        //NOTE NOTE!!!! string includes the quotes == true.
        const actual = 'abc'.includes('');
        assert.equal(actual, true);
      });
    });
  
    describe('special/corner cases', function() {
      it('search for `undefined` in a string fails', function() {
        //const findInAbc = (what) => 'abc'.includes;
         //NOTE NOTE!!!! passed what intop the function.

        const findInAbc = (what) => 'abc'.includes(what);
        assert.equal(findInAbc(void 0), false);
      });
      it('searches case-sensitive', function() {
        //const findInAbc = (what) => 'abc'.inkludez(what);
         //NOTE NOTE!!!!  does not have capital 'A' change includez to includes.

        const findInAbc = (what) => 'abc'.includes(what);
        assert.equal(findInAbc('A'), false);
      });
      it('must NOT be a regular expression', function() {
        //const regExp = '';
         //NOTE NOTE!!!! definitely not a regular expression.

        const regExp = /^.?/g;
        assert.throws(() => {''.includes(regExp)});
      });
      describe('coerces the searched "thing" into a string', function() {
        it('e.g. from a number', function() {
          //const actual = '123'.includes(4);
           //NOTE NOTE!!!! included the 4.

          const actual = '1234'.includes(4);
          assert.equal(actual, true);
        });
        it('e.g. from an array', function() {
          //const actual = '123'.includes([1,2,3]);
           //NOTE NOTE!!!! same characters as the array.

          const actual = '1,2,3'.includes([1,2,3]);
          assert.equal(actual, true);
        });
        it('e.g. from an object, with a `toString()` method', function() {
          // const objWithToString = {toString: 1};
           //NOTE NOTE!!!! needed to use a function to change the object to a string.

          const objWithToString = {toString: () => 1};
          assert.equal('123'.includes(objWithToString), true);
        });
      });
    });
  
    describe('takes a position from where to start searching', function() {
      it('does not find `a` after position 1 in `abc`', function() {
        // const position = 0;
         //NOTE NOTE!!!! 'a' was at position 1

        const position = 1;
        assert.equal('abc'.includes('a', position), false);
      });
      it('even the position gets coerced', function() {
        //const findAtPosition = position => 'xyz'.includes('x', pos);
         //NOTE NOTE!!!!  x = 0 being z=2.
        const findAtPosition = (pos) => 'xyz'.includes('z', pos);
        assert.equal(findAtPosition('2'), true);
      });
      describe('invalid positions get converted to 0', function() {
        it('e.g. `undefined`', function() {
          //const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
            //NOTE NOTE!!!! (pos=2) is invalid
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(void 0), true);
        });
        it('negative numbers', function() {
          // const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
           //NOTE NOTE!!!! changed -pos to just pos.
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(-2), true);
        });
        it('NaN', function() {
          //const findAtPosition = (pos) => 'xyz'.includes('x', 1);
           //NOTE NOTE!!!! true that x is not a number. but at index 1 in the string.
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(NaN), true);
        });
      });
    });
  
  });

  //64  sixty-four
  // 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!


      it('`delete()` returns `true` when the element was found', function() {
        // const returns = set.remove;
         //NOTE NOTE!!!! 'delete'  not remove.
        const returns = set.delete('one');
        assert.strictEqual(returns, true);
      });
      it('and the size decreases', function() {
        set.delete('one');
        assert.equal(set.size, 2);
      });
    
  
    describe('if nothing was deleted (no element with the given value was found)', function() {
      it('returns `false`', function() {
        set.add('one');
        //  const returns = set.delete('one');
         //NOTE NOTE!!!! 'one' was not found, took one out of the function to get a return of false.

        const returns = set.delete();
  
        assert.equal(returns, false);
      });
    });
  
    describe('the value does NOT get casted', function() {
      it('number 1 is different to string "1"', function() {
        //set.add(1);
     // set.add('1');
      //NOTE NOTE!!!! 1 is a number '1' is a string.
        set.add(1);
        assert.equal(set.delete('1'), false);
      });
    });
  
//65
  // 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` API overview', function(){
  //  const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
  //    let set = new Set([]);
   //NOTE NOTE!!!! passed api into the function,to set api overview for each item.
    const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
    let set;
    beforeEach(function() {
      set = new Set(api);
    });
  
    it('a Set can be created from an array', function() {
      //    let set = new Set([]);
       //NOTE NOTE!!!! changed new set from bracket notation into a function.. same as previous.
     let set = new Set(api);
      assert.deepEqual(Array.from(set), api);
    });
  
    it('`size` is the number of values', function() {
      //    const theSize = set.count;
       //NOTE NOTE!!!! size for the number of values.
      const theSize = set.size;
      assert.equal(theSize, api.length);
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
     
    //const actualEntries = set.entry;
     //NOTE NOTE!!!! needed  to set set.entries(), into a function. to return the iterator for all values.
      const ecpectedEntries = api.map(entry => [entry, entry]);
      const actualEntries = set.entries();
      assert.deepEqual([...actualEntries], ecpectedEntries);
    });
  
    
  
    it('`has()` returns true if the given value is in the set', function() {
      //    const propertyName = '';
       //NOTE NOTE!!!! needed to define the property name, to return a boolean for propertyname.
      const propertyName = 'has';
      assert.equal(set.has(propertyName), true);
    });
  
    
  
      it('`values()`', function() {
        //const allValues = set.value();
         //NOTE NOTE!!!! made plural/ values.
        const allValues = set.values();
        assert.deepEqual([...allValues], api);
      });
  
      it('`[Symbol.iterator]()`', function() {
        //      const iteratorKey = '???';
        //NOTE NOTE!!!! defined iteratorkey = symbol.iterator.
        const iteratorKey = Symbol.iterator;
        assert.deepEqual([...set[iteratorKey]()], api);
      });
    });
  
  
  
  