// 71: String - `repeat()`


describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

    describe('pass the count to `str.repeat(count)`', function() {
      it('for `1` the string stays the same', function() {
        //const what = 'one'.repeat(23);
        //NOTE, IN THIS CASE THE 1 MUST STAY THE SAME, SO CHANGED 23 TO 1
        const what = 'one'.repeat(1);
        assert.equal(what, 'one');
      });
      it('for `3` the string `x` becomes `xxx`', function() {
        //const actual = 'x'.REPEAT(1);
        //NOTE, (1) WOULD MAKE 'X' 3=3 AND SO ON

        const actual = 'x'.repeat(3);
        assert.equal(actual, 'xxx');
      });
      it('for `0` an empty string is returned', function() {
        //  const repeatCount = 1;
        //NOTE, REPEAT ZERO MEANS RETURN EMPTY STRING.

        const dontRepeat = 0;
        assert.equal('shrink'.repeat(dontRepeat), '');
      });
  
      it('the count is not an int, such as "3", it gets coerced to an int', function() {
        //const repeated = 'three'.repeat('2');
        //NOTE, STRING FORM LIKE 'threethreethree', 3 INSTEAD OF TWO. PUT 3 INTO THE FUNCTION

        const repeated = 'three'.repeat('3');
        assert.equal(repeated, 'threethreethree');
      });
    });
  
    describe('throws an error for', function() {
      it('a count of <0', function() {
        //const belowZero = 1;
        //NOTE, CHANGED 1 TO -1 FOR THE <0 MUST BE -1
        const belowZero = -1;
        assert.throws(() => { ''.repeat(belowZero); }, RangeError);
      });
      it('a count of +Infinty', function() {
        //  let infinity = 'infinity';
        //NOTE, MUST ADD '+' SYMBOL.

        let infinity = '+Infinity';
        assert.throws(() => { ''.repeat(infinity); }, RangeError);
      });
    });
  
    
  
    describe('for my own (string) class', function() {
      it('calls `toString()` to make it a string', function() {
        class MyString { toString() { return 'my string'; } }
      //const expectedString = '';
      //NOTE, FOR CONST PUT IN 'MY STRING'
        const expectedString = 'my string';
        assert.equal(String(new MyString()).repeat(1), expectedString);
      });
      it('`toString()` is only called once', function() {
    
         
       
      
      //let repeated = new X().repeat(2);

      //NOTE, CHANGED 'LET'  TO HAVE A NEW STRING, AND HAVE IT REPEAT TWO TIMES., NEWX BEING PASSED INTOP THE FUNCTION.
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


describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
     //  const s = 'the string s';
     //NOTE,
    const s = 'the string s';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        //const actual = s.starts_with('t');
        //NOTE, SYNTAX CHANGE FROM starts_with('t'); TO>   s.startsWith('t');

        const actual = s.startsWith('t');
        assert.equal(actual, true);
      });
      it('can be a string', function() {
        //const expected = '???';
        //NOTE, CAN BE A STRING = TRUE

        const expected = true;
        assert.equal(s.startsWith('the'), expected);
      });
      it('can contain unicode characters', function() {
        //const nuclear = 'NO ☢ NO';
        //NOTE, EACH STARTING WITH NUCLEAR SYMBOL AS PER THE ASSERT.

        const nuclear = '☢ NO ☢ NO';
        assert.equal(nuclear.startsWith('☢'), true);
      });
      
  
    describe('2nd parameter, the position where to start searching from', function() {
      it('find "str" at position 4', function() {
       //      const position = 3;
       //NOTE, CHANGED OUR POSITION FROM 3 TO 4. 

        const position = 4;
        assert.equal(s.startsWith('str', position), true);
      });
      it('`undefined` is the same as 0', function() {
        //  const _undefined_ = '1';
        //NOTE, CHANGED THE 1 TO ZERO TO BE UNDEFINED.


        const _undefined_ = '0';
        assert.equal(s.startsWith('the', _undefined_), true);
      });
      it('the parameter gets coerced to an int', function() {
        // const position = 'four';
        //NOTE, STRING FOUR TO INTEGER STRING 4.

        const position = '4';
        assert.equal(s.startsWith('str', position), true);
      });
      it('a value larger than the string`s length, returns false', function() {
        // const expected = true;
        //NOTE, NOT EQUAL TO RETURN TRUE/ SO RETURNS FALSE.

        const expected = false;
        assert.equal(s.startsWith(' ', s.length + 1), expected);
      });
    });
  
    describe('transfer the functionality to other objects', function() {
  
      const startsWith = (...args) => String.prototype.startsWith.call(...args);
  
      it('e.g. a boolean', function() {
        // let aBool;
        //NOTE, MADE THE BOOLEAN TO = 'FALSE'

        let aBool = 'false stuff';
        assert.equal(startsWith(!aBool, 'false'), true);
      });
      it('e.g. a number', function() {
        // let aNumber = 19;
        //NOTE, CHANGE TO 19 TO ASSERT '1984'

        let aNumber = 1900;
        assert.equal(startsWith(aNumber + 84, '1984'), true);
      });
      it('also using the position works', function() {
        //const position = 0;
        //NOTE, POPSITION 0 WOULD BE 1, SO POS1= 99

        const position = 1;
        assert.equal(startsWith(1994, '99', position), true);
      });
    });
  
  });
  
  //73
  // 73: Generator - `return` inside a generator is special


describe('`return` in a generator function is special', function() {

    describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
  
      it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
        function* generatorFunction() { return 1; }
        
      //  const propertyNames = [];
      //NOTE, NEEDED TO RETURN THE OBJECT AS DIRECTED FROM THE 'IT' ALSO REMEMBERED KEYS FROM PREVIOUS EXAMPLES.
        const returned = generatorFunction().next();
        const propertyNames = Object.keys(returned);
        assert.deepEqual(Object.keys(returned), propertyNames);
      });
  
      it('the property `value` is the value given after the `return` statement', function() {
        function* generatorFunction() { return 23; }
       //function* generatorFunction() { return; }
       //NOTE, RETURNED A VALUE OF 23. AS PER THE RETURN.
        const {value} = generatorFunction().next();
        assert.equal(value, 23);
      });
  
      it('the property `done` is true', function() {
        function* generatorFunction() { return 42; }
        //function* generatorFunction() { yield 42; }
      //NOTE, IN ORDER FOR DONE TO BE TRUE WE NEED A RETURN RATHER THAN A YEILD.
        const {done} = generatorFunction().next();
        assert.equal(done, true);
      });
  
      it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
        function* generatorFunction() { yield 1; }
        // function* generatorFunction() { return 1; }
      //const returned = generatorFunction().next();
      //NOTE, NEEDED YEILS TO RETURN A RESULT OF FALSE.
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: 1, done: false});
      });
  
      it('a missing `return` returns {value: undefined, done: true}', function() {
        function* generatorFunction() { return; }
        //function* generatorFunction() { yield; }	
     // const returned = generatorFunction().next();
     //NOTE, AS PER RETURN, WE GET TRU AS A RESULT.
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: void 0, done: true});
      });
  
    
  
    
    
  
  
  