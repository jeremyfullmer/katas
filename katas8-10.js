// 8: block scope - const

describe('`const` is like `let` plus read-only', () => {
    describe('scalar values are read-only', () => {
      it('e.g. a number', () => {
        const constNum = 0;
        //trying to change it but not needed to be changed.
        //constNum = 1;
        assert.equal(constNum, 0);
      });
      it('or a string', () => {
        const constString = 'I am a const';
        //constString = 'Cant change you?';
        assert.equal(constString, 'I am a const');
      });
    });
    const notChangeable = 23;
    it('const scope leaks too', () => {
      assert.equal(notChangeable, 23);
    });
    describe('complex types are NOT fully read-only', () => {
      it('array`s items can be changed', () => {
        const arr = [];
        arr[0] = 42;
        assert.equal(arr[0], 42);
      });
      it('object`s can be modified', () => {
        const obj = {x: 1};
        //obj.x = 2;
        //changed the object variable.
        obj.x = 3;
        assert.equal(obj.x, 3);
      });
    });
  });

  //katas 9

  describe('The object literal allows for new shorthands', () => {
    const x = 1;
    const y = 2;
    describe('with variables', () => {
      it('the short version for `{x: x}` is {x}', () => {
        //const short = {x};
        const short = {y};
        assert.deepEqual(short, {y: y});
      });
      it('works with multiple variables too', () => {
        //got rid of the z and the colon.
        const short = {x, y };
        assert.deepEqual(short, {x: x, y: y});
      });
    });
    describe('with methods', () => {
      const func = () => func;
      it('using the name only uses it as key', () => {
        //changed it to func.
        const short = {func};
        assert.deepEqual(short, {func: func});
      });
      it('a different key must be given explicitly, just like before ES6', () => {
        const short = {otherKey: func};
        assert.deepEqual(short, {otherKey: func});
      });
      it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
        const short = {
          inlineFunc() {
          return'I am inline'}
        };
        //did line 26 and 37 instead of what is below.
        assert.deepEqual(short.inlineFunc(), 'I am inline');
      });
    });
  });

  //10
  // 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    //let firstValue = [1];
    //put the firstvalue in brackets. to extract the first value.
    let [firstValue] =[1];
    assert.strictEqual(firstValue, 1);
  });
  it('get the last item from array', () => {
    let lastValue = [1, 2, 3];
    lastValue = lastValue.pop();
    // i kept 123 just did some pop action to get the 3
    
    assert.strictEqual(lastValue, 3);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [y, x];
    assert.deepEqual([x, y], ['why', 'ax']);
    // i switched from xy to yx on liune 21.
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [,,z] = all; // add commas to shift commas from why to zet
    assert.equal(z, 'zet');
  });
  it('extract from nested arrays', () => {
    // double brackets have been implimented, with age left alone as age is left = to user.
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user;
    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });
  it('chained assignments', () => {
    let c, d;
    //these are chained!! so a and b are = to c and d so cd  are = to 1 and 2.(chained)
    let [a, b] = [c, d] = [1, 2];
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });
  it('in for-of loop', () => {
    for (var [a, b] of [[0, 1, 2]]) {}
    assert.deepEqual([a, b], [1, 2]);
  });
});

  