// 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Object.is()` determines whether two values are the same', function(){

    describe('scalar values', function() {
      it('1 is the same as 1', function() {
        //note, 1 and 1 are = value as per the assert/ obj.is
        //const areSame = Object.is(1, '???');
        const areSame = Object.is(1, 1);

        assert.equal(areSame, true);
      });
      it('int 1 is different to string "1"', function() {
        //note, false because "" is a string and 1 is a number  equal not equal value or type.
        //const areSame = Object.___(1, '1');
        const areSame = Object.is(1, '1');

        assert.equal(areSame, false);
      });
      it('strings just have to match', function() {
        //note, matched the strings to = same/ or true.
        //const areSame = Object.is('one', 'two');
        const areSame = Object.is('one', 'one');
        assert.equal(areSame, true);
      });
      it('+0 is not the same as -0', function() {
        //note, false due to different characters.
       // const areSame = -1;
        const areSame = false;
        assert.equal(Object.is(+0, -0), areSame);
      });
      it('NaN is the same as NaN', function() {
        //note, changed 0 to nan. to be = to nopt a number.
        //const number = 0;
        const number = NaN;
        assert.equal(Object.is(NaN, number), true);
      });
    });
  
    describe('coercion, as in `==` and `===`, does NOT apply', function() {
      it('+0 != -0', function() {
        //note, is the same based on same type, based on coercion.
        //const coerced = +0 === -0;
      //const isSame = Object.is(+0, -0);
        const coerced = +0 === -0;
        const isSame = !Object.is(+0, -0);
        assert.equal(isSame, coerced);
      });
      it('empty string and `false` are not the same', function() {
        //note, 
        //const emptyString = '';
        //const isSame = Object.is(emptyString, false);
        const emptyString = '';
        const isSame = !Object.is(emptyString, false);
        assert.equal(isSame, emptyString == false);
      });
      it('NaN', function() {
        //note,
       // const coerced = +0 === -0;
      //const isSame = Object.is(+0, -0);
        const coerced = NaN == NaN;
        const isSame = !Object.is(NaN, NaN);
        assert.equal(isSame, coerced);
      });
      it('NaN 0/0', function() {

        //note,  .is was not properly defined.
        //const isSame = Object.ISSSSS(NaN, 0/0);
        const isSame = Object.is(NaN, 0/0);
        assert.equal(isSame, true);
      });
    });
  
    describe('complex values', function() {
      it('`{}` is just not the same as `{}`', function() {
        //note, given value of false.
       // const areSame = '???';
        const areSame = false;
        assert.equal(Object.is({}, {}), areSame);
      });
      it('Map', function() {
        let map1 = new Map([[1, 'one']]);
        let map2 = new Map([[1, 'one']]);
        //const areSame = Object.is(map1, map1);
        const areSame = Object.is(map1, map2);
        assert.equal(areSame, false);
      });
    });
  
  });

  //55

  // 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!

  
    describe('zero in different ways', function() {
      it('0 is an integer', function() {
        //note, made zero an integer instead of null.
        //const zero = null;

        const zero = 0;
        isTrue(Number.isInteger(zero));
      });
      it('0.000', function() {
        isTrue(Number.isInteger(0.000));
      });
      it('the string "0" is NOT an integer', function() {
        //note, zero in a string.
        //const zero = null;

        const stringZero = '0';
        isFalse(Number.isInteger(stringZero));
      });
    });
  
    describe('one in different ways', function() {
      it('0.111 + 0.889', function() {
        //note, is decimal point integer,
        //const rest = 0.88;

        const rest = 0.889;
        isTrue(Number.isInteger(0.111 + rest));
      });
      it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
        // added several to 0.9 so = isfalse
        //const rest = 0.88;

        const oneOrNot = 0.5 + 0.2 + 0.2;
        //note same as above.
        isFalse(Number.isInteger(oneOrNot));
      });
      it('parseInt`ed "1" is an integer', function() {
        //note, string value converted to an integer.
        //const convertedToInt = Number.parse('1.01');

        const convertedToInt = Number.parseInt('1');
        isTrue(Number.isInteger(convertedToInt));
      });
    });
    describe('what is not an integer', function() {
        it('`Number()` is an integer', function() {
          //note, numer vale to be passed into the number function.
         //const numberOne = Number;

          const numberOne = Number();
          isTrue(Number.isInteger(numberOne));
        });
        it('`{}` is NOT an integer', function() {
          //note, false, empty obj or array in not a number or int.
          //const isit = Number.isWhat({});

          const isit = Number.isInteger({});
          isFalse(isit);
        });
        it('`0.1` is not an integer', function() {
           //note, 
          //const isit = Number(0.1);

          const isit = Number.isInteger(0.1);
          isFalse(isit);
        });
        it('`Number.Infinity` is not an integer', function() {
          //note, infinity has not been defined or is not of number value.
          //const isit = Number.isInteger(Number.MAX_VALUE);

          const isit = Number.isInteger(Number.Infinity);
          isFalse(isit);
        });
        it('`NaN` is not an integer', function() {
          //note, get the return of false, by .isInteger, instead of .isFLOAT.
          //const isit = Number.isFloat(NaN);

          const isit = Number.isInteger(NaN);
          isFalse(isit);
        });
      });
    
    

    //56
    

describe('pass a function to a generator', () => {

    it('the generator can receive a function as a value', function() {
      let fn = function() {};
      function* generatorFunction() {
        assert.equal(yield null, fn); 
      }
      let iterator = generatorFunction();
      //note, gave function as the value below.
      //iterator.next();
    //iterator.next();
      iterator.next();
      iterator.next(fn);
    });
  
    
  
    
  //57
  // 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('default parameters make function parameters more flexible', () => {

    it('define it using an assignment to the parameter `function(param=1){}`', function() {
      let number = (int=0) => int;
     // let number = (int) => int;
     //note,needed to give int a value = 0
      assert.equal(number(), 0);
    });
  
    it('it is used when undefined is passed', function() {
   // let number = (int = 23) => int;
   // const param = 42;
   //note, param due to undefined.
      let number = (int = 23) => int;
      const param = undefined;
  
      assert.equal(number(param), 23);
    });
  
    it('it is not used when a value is given', function() {
      //function xhr() {
        //return method;
        //note,  passed method into the function, which is post.
      function xhr(method) {
        return method;
      }
  
      assert.equal(xhr('POST'), 'POST');
    });
  
    it('it is evaluated at run time', function() {
      // let defaultValue;
      //note, gave defaultvalue a value.
      let defaultValue = 42;
      function xhr(method = `value: ${defaultValue}`) {
        return method;
      }
  
      
      
  
    it('it can also be a function', function() {
      //const defaultValue = 0;
    //function fn(value = defaultValue()) {
      //note, defaultvalue passed into the function.
      let defaultValue = (arg) => arg;
      function fn(value = defaultValue()) {
        return value;
      }
  
      assert.equal(fn(), defaultValue());
    });
  
  });

  //58//58//58//58//58//58
  / 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {

  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('is not a function', function() {
      const expectedType = 'object';
      //note, expectedtype/obj passed into func.
      //      const expectedType = 'not a function!';
      assert.equal(typeof Reflect, expectedType);
    });

    it('it can not be instantiated', function() {
      const tryToConstruct = () => { Reflect(); };
      //note,  ???
      // const tryToConstruct = () => { Reflect; };

      assert.throws(tryToConstruct, TypeError);
    });

    it('has no `call` method (as opposed to e.g. Object)', function() {
      //note, changed to a no-call method.
      // const expected = 'function';

      const expected = 'undefined';
      assert.equal(typeof Reflect.call, expected);
    });

  });

  describe('some `Reflect` usages', function() {

    it('`Reflect.construct()` is like new', function() {
      let Class = class {};
      //note, needed the symbol for class constructor obj.
      //      let Class;

      assert.equal(Reflect.construct(Class) instanceof Class, true);
    });

    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23};
      //note, changed object key value to equal 23
      //let obj = {x: 42};

      assert.equal(Reflect.get(obj, 'x'), 23);
    });

    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: 23};
      //note,previous without the value would be false, true with value of 23
      //  let obj = {};

      assert.equal(Reflect.has(obj, 'x'), true);
    });

  });

});

  //59//59//59//59//59//59//59
  

describe('`Reflect.apply` calls a target function', function() {

    it('it is a static method', function() {
      //    const expectedType = '???';
      //note, expected type in this case is a function.
      const expectedType = 'function';
      

      assert.equal(typeof Reflect.apply, expectedType)
    });
  
    it('it calls a callable, e.g. a function', function() {
      //let fn;
      //note, calling a function to return the value of 42
      let fn = () => { return 42; };
      
      assert.equal(Reflect.apply(fn), 42);
    });
  
    
  
    
  
    it('the 3rd argument is an array of parameters passed to the call', function() {
      let emptyArrayWithFiveElements = Reflect.apply(Array, undefined, [42, 42, 42, 42, 42]);
      // let emptyArrayWithFiveElements = Reflect.apply(Array);
      //note, given values but not defined. needs to be defined with an arrow function.

  
      assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
    });
  
  });
  //60
  
//?
describe('`Reflect.getPrototypeOf` returns the prototype', function() {

    it('works like `Object.getPrototypeOf`', function() {
      const viaObject = Object.getPrototypeOf({});
      const viaReflect = Reflect.getPrototypeOf({});
     
      assert.strictEqual(viaObject, viaReflect);
    });
  
    
  
    it('a `new Set()` has a prototype', function() {
      //    const aSet = Set;
      //note, defined a 'new' set.
      const aSet = new Set();
  
      assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
    });
  
    it('for a class, it is `Klass.prototype`', function() {
      //class Klass {}
    //const proto = new Klass();
     //note, new class for reflect.getprototype!!
      class Klass {}
      const proto = Reflect.getPrototypeOf(new Klass());
  
      assert.equal(proto, Klass.prototype);
    });
  
    it('for a old-style class, works too', function() {
      
      function Klass() {}
      //const proto = Reflect.getPrototypeOf();
      //note, defined new class.
      const proto = Reflect.getPrototypeOf(new Klass());
  
      assert.equal(proto, Klass.prototype);
    });
  
    it('an array has a prototype too', function() {
      
     // let arr = [];
   // const expectedProto = Array;
   //note, added a prototype.
      let arr = [];
      const expectedProto = Array.prototype;
  
      assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
    });
  