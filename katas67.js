// let works in  the one block of code it is in.
//vart works globally.

//#7
describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works as usual, it`s scope is the function', () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (let key in obj) {}
      assert.throws(() => console.log(key));
    });
    it('create artifical scope, using curly braces', () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });
});

//#6
class LexicallyBound {
  getFunction() {
    return () => {
      return new LexicallyBound();
    }
  }
  getArgumentsFunction() {
    return function() {return arguments}
  }
}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    //turned line 20 into an arrow function.
    var bound = new LexicallyBound();
    var fn =() => bound;
    assert.strictEqual(fn(), bound);
  });
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    // all was combined into line 29 in the form of an arrow function.
    var fn = bound.getFunction();
    var anotherObj = {};
    var expected = anotherObj;
    var fn = (anotherObj) => {expected=anotherObj};
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  it('`arguments` does NOT work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    return fn.length //
    assert.equal(fn(1, 2).length, 0);
  });
});
