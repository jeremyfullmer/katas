//16

describe('Object literal properties may be computed values', () => {
    it('a computed property `x` needs to be surrounded by `[]`', () => {
      //const propertyName = 'x';
      //const obj = {propertyname: 1};
      const propertyName = 'x';
      const obj = {[propertyName]: 1}; // it puts property name in brackets.
      assert.equal(obj.x, 1);
    });
    
    it('can also get a function assigned', () => {
      const key = 'func';
      const obj = {[key](){return  'seven'}}; //made key a function to return 7.
      
      assert.equal(obj.func(), 'seven');
    });
    it('the key may also be the result of a function call', () => {
        const getName = () => 'propertyName';
        const obj = {[getName]() {return 'seven'}};
        assert.equal(obj.propertyName(), 'seven');
        return obj;// ruturned the object.
        it('the key can also be constructed by an expression', () => {
            const what = 'Name';
            const obj = {['property' + what]: null};// concatinate to meke propertyname
            assert('propertyName' in obj);
          });
          //17 unicode in strings

          describe('Unicode in strings', () => {
            it('are prefixed with `\\u` (one backslash and u)', () => {
              const nuclear = '\u2622';//nuclear symbol.
              assert.equal(nuclear, '☢');//unicode being letters and numbers to make symbols.
            });

            it('value is 4 bytes/digits', () => {
                const nuclear = '\u2622';//changed to 4 byte value.
                assert.equal(`no more ${nuclear}`, 'no more ☢');
              });
              // 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest in function params', () => {

  it('must be the last parameter', () => {
    const fn = (...rest) => {
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });

  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, ...rest) => {
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });

  it('makes `arguments` obsolete', () => {
    const fn = (...args) => {
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });

  it('eliminate `arguments`!!!', () => {
    const fn = (...args) => args;
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual([2, 3], rest);
  });

});

//19

// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest in function params', () => {

  it('must be the last parameter', () => {
    const fn = (...rest) => {
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });

  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, ...rest) => {
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });

  it('makes `arguments` obsolete', () => {
    const fn = (...args) => {
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });

  it('eliminate `arguments`!!!', () => {
    const fn = (...args) => args;
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual([2, 3], rest);
  });

});
              
