// 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Object.is()` determines whether two values are the same', function(){

    describe('scalar values', function() {
      it('1 is the same as 1', function() {
        const areSame = Object.is(1, 1);
        assert.equal(areSame, true);
      });
      it('int 1 is different to string "1"', function() {
        const areSame = Object.is(1, '1');
        assert.equal(areSame, false);
      });
      it('strings just have to match', function() {
        const areSame = Object.is('one', 'one');
        assert.equal(areSame, true);
      });
      it('+0 is not the same as -0', function() {
        const areSame = false;
        assert.equal(Object.is(+0, -0), areSame);
      });
      it('NaN is the same as NaN', function() {
        const number = NaN;
        assert.equal(Object.is(NaN, number), true);
      });
    });
  
    describe('coercion, as in `==` and `===`, does NOT apply', function() {
      it('+0 != -0', function() {
        const coerced = +0 === -0;
        const isSame = !Object.is(+0, -0);
        assert.equal(isSame, coerced);
      });
      it('empty string and `false` are not the same', function() {
        const emptyString = '';
        const isSame = !Object.is(emptyString, false);
        assert.equal(isSame, emptyString == false);
      });
      it('NaN', function() {
        const coerced = NaN == NaN;
        const isSame = !Object.is(NaN, NaN);
        assert.equal(isSame, coerced);
      });
      it('NaN 0/0', function() {
        const isSame = Object.is(NaN, 0/0);
        assert.equal(isSame, true);
      });
    });
  
    describe('complex values', function() {
      it('`{}` is just not the same as `{}`', function() {
        const areSame = false;
        assert.equal(Object.is({}, {}), areSame);
      });
      it('Map', function() {
        let map1 = new Map([[1, 'one']]);
        let map2 = new Map([[1, 'one']]);
        const areSame = Object.is(map1, map2);
        assert.equal(areSame, false);
      });
    });
  
  });

  //55

  // 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Number.isInteger()` determines if a value is an integer', function(){

    const isTrue = (what) => assert.equal(what, true);
    const isFalse = (what) => assert.equal(what, false);
  
    it('`isInteger` is a static function on `Number`', function() {
      const whatType = 'function';
      assert.equal(typeof Number.isInteger, whatType);
    });
  
    describe('zero in different ways', function() {
      it('0 is an integer', function() {
        const zero = 0;
        isTrue(Number.isInteger(zero));
      });
      it('0.000', function() {
        isTrue(Number.isInteger(0.000));
      });
      it('the string "0" is NOT an integer', function() {
        const stringZero = '0';
        isFalse(Number.isInteger(stringZero));
      });
    });
  
    describe('one in different ways', function() {
      it('0.111 + 0.889', function() {
        const rest = 0.889;
        isTrue(Number.isInteger(0.111 + rest));
      });
      it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
        const oneOrNot = 0.5 + 0.2 + 0.2;
        isFalse(Number.isInteger(oneOrNot));
      });
      it('parseInt`ed "1" is an integer', function() {
        const convertedToInt = Number.parseInt('1');
        isTrue(Number.isInteger(convertedToInt));
      });
    });
    describe('what is not an integer', function() {
        it('`Number()` is an integer', function() {
          const numberOne = Number();
          isTrue(Number.isInteger(numberOne));
        });
        it('`{}` is NOT an integer', function() {
          const isit = Number.isInteger({});
          isFalse(isit);
        });
        it('`0.1` is not an integer', function() {
          const isit = Number.isInteger(0.1);
          isFalse(isit);
        });
        it('`Number.Infinity` is not an integer', function() {
          const isit = Number.isInteger(Number.Infinity);
          isFalse(isit);
        });
        it('`NaN` is not an integer', function() {
          const isit = Number.isInteger(NaN);
          isFalse(isit);
        });
      });
    
    });

    //56
    // 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a function to a generator', () => {

    it('the generator can receive a function as a value', function() {
      let fn = function() {};
      function* generatorFunction() {
        assert.equal(yield null, fn); // remember, don't touch this line
      }
      let iterator = generatorFunction();
      iterator.next();
      iterator.next(fn);
    });
  
    it('pass a function to the iterator, which calls it', function() {
      let fn = () => { return 2; };
      function* generatorFunction() {
        yield (yield 1)();
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(fn).value];
      assert.deepEqual([1, 2], iteratedOver);
    });
  
    it('nesting yielded function calls', function() {
      let two = () => { return 2; };
      let three = () => { return 3; };
      function* generatorFunction() {
        yield (yield (yield 1)())();
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(two).value, iterator.next(three).value];
      assert.deepEqual([1, 2, 3], iteratedOver);
    });
  
  });
  //57
  // 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('default parameters make function parameters more flexible', () => {

    it('define it using an assignment to the parameter `function(param=1){}`', function() {
      let number = (int=0) => int;
  
      assert.equal(number(), 0);
    });
  
    it('it is used when undefined is passed', function() {
      let number = (int = 23) => int;
      const param = undefined;
  
      assert.equal(number(param), 23);
    });
  
    it('it is not used when a value is given', function() {
      function xhr(method) {
        return method;
      }
  
      assert.equal(xhr('POST'), 'POST');
    });
  
    it('it is evaluated at run time', function() {
      let defaultValue = 42;
      function xhr(method = `value: ${defaultValue}`) {
        return method;
      }
  
      assert.equal(xhr(), 'value: 42');
      defaultValue = 23;
    });
  
    it('it can also be a function', function() {
      let defaultValue = (arg) => arg;
      function fn(value = defaultValue()) {
        return value;
      }
  
      assert.equal(fn(), defaultValue());
    });
  
  });

  //58
  / 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {

  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('is not a function', function() {
      const expectedType = 'object';
      assert.equal(typeof Reflect, expectedType);
    });

    it('it can not be instantiated', function() {
      const tryToConstruct = () => { Reflect(); };
      assert.throws(tryToConstruct, TypeError);
    });

    it('has no `call` method (as opposed to e.g. Object)', function() {
      const expected = 'undefined';
      assert.equal(typeof Reflect.call, expected);
    });

  });

  describe('some `Reflect` usages', function() {

    it('`Reflect.construct()` is like new', function() {
      let Class = class {};
      assert.equal(Reflect.construct(Class) instanceof Class, true);
    });

    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });

    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: 23};
      assert.equal(Reflect.has(obj, 'x'), true);
    });

  });

});

  //59
  // 59: Reflect - apply
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {

    it('it is a static method', function() {
      const expectedType = 'function';
  
      assert.equal(typeof Reflect.apply, expectedType)
    });
  
    it('it calls a callable, e.g. a function', function() {
      let fn = () => { return 42; };
  
      assert.equal(Reflect.apply(fn), 42);
    });
  
    it('passing it a non-callable throws a TypeError', function() {
      let applyOnUncallable = (Array) => {
        Reflect.apply(Array);
      };
  
      assert.throws(applyOnUncallable, TypeError);
    });
  
    it('the second argument is the scope (or the `this`)', function() {
      class FourtyTwo {
        constructor() { this.value = 42}
        fn() {return this.value}
      }
      let instance = new FourtyTwo();
  
      const fourtyTwo = Reflect.apply(instance.fn, instance);
  
      assert.deepEqual(fourtyTwo, 42);
    });
  
    it('the 3rd argument is an array of parameters passed to the call', function() {
      let emptyArrayWithFiveElements = Reflect.apply(Array, undefined, [42, 42, 42, 42, 42]);
  
      assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
    });
  
  });
  //60
  // 60: Reflect - getPrototypeOf
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {

    it('works like `Object.getPrototypeOf`', function() {
      const viaObject = Object.getPrototypeOf({});
      const viaReflect = Reflect.getPrototypeOf({});
  
      assert.strictEqual(viaObject, viaReflect);
    });
  
    it('throws a TypeError for a non-object', function() {
      let fn = () => { Reflect.getPrototypeOf() };
      assert.throws(fn, TypeError);
    });
  
    it('a `new Set()` has a prototype', function() {
      const aSet = new Set();
  
      assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
    });
  
    it('for a class, it is `Klass.prototype`', function() {
      class Klass {}
      const proto = Reflect.getPrototypeOf(new Klass());
  
      assert.equal(proto, Klass.prototype);
    });
  
    it('for a old-style class, works too', function() {
      function Klass() {}
      const proto = Reflect.getPrototypeOf(new Klass());
  
      assert.equal(proto, Klass.prototype);
    });
  
    it('an array has a prototype too', function() {
      let arr = [];
      const expectedProto = Array.prototype;
  
      assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
    });
  