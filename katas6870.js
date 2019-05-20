// 68: Reflect - construct
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {

    describe('the function itself', function() {
      it('is static on the `Reflect` object', function() {
        const name = 'constructor';
        assert.equal(name in Reflect, true);
      });
      it('is of type `function`', function() {
        const expectedType = 'function';
        assert.equal(typeof Reflect.construct, expectedType)
      });
    });
  
    describe('the 1st parameter is the constructor to be invoked', function() {
      it('fails when given a number as constructor', function() {
        let aNumber = 1;
        assert.throws(() => { Reflect.construct(aNumber) }, TypeError);
      });
      it('works giving a function', function() {
        let aFunction = () => {};
        assert.doesNotThrow(() => { Reflect.construct(aFunction) });
      });
      it('works giving a class', function() {
        const aClass = class {};
        assert.doesNotThrow(() => { Reflect.construct(aClass) });
      });
    });
  
    describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
  
      const aClass = class {};
      it('fails when it`s not an array(-like), e.g. a number', function() {
        let aNumber = 13;
        assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
      });
      it('works with an array-like object (the `length` property look up should not throw)', function() {
        let arrayLike = {get length() { return length; }};
        assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
      });
      it('works with a real array', function() {
        let realArray = ['oh', 'snap'];
        assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
      });
    });
  
    describe('in use', function() {
  
      it('giving it a class it returns an instance of this class', function() {
        class Constructable {}
        let instance = Reflect.construct(Constructable); // use Reflect.construct here!!!
  
        assert.equal(instance instanceof Constructable, true);
      });
  
      describe('the list of arguments are passed to the constructor as given', function() {
        class Constructable {
          constructor(...args) { this.args = args; }
        }
        it('if none given, nothing is passed', function() {
          let instance = Reflect.construct(Constructable);
  
          assert.deepEqual(instance.args, []);
        });
        it('passing an array, all args of any type are passed', function() {
          const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
          let instance = Reflect.construct(Constructable, argumentsList);
  
          assert.deepEqual(instance.args, argumentsList);
        });
      });
    });
  
    describe('the length property', function() {
      it('of `Reflect.construct` is 2', function() {
        let expected = 2;
        assert.equal(Reflect.construct.length, expected);
      });
    });
  
  });

  
  //69

  // 69: Reflect - defineProperty
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {

    describe('the function itself', function() {
      it('is static on the `Reflect` object', function() {
        const name = 'defineProperty';
        assert.equal(name in Reflect, true);
      });
      it('is of type `function`', function() {
        const expectedType = 'function';
        assert.equal(typeof Reflect.defineProperty, expectedType)
      });
    });
  
    describe('the 1st parameter is the object on which to define a property', function() {
      it('fails if it is not an object', function() {
        let noObj = 13;
        assert.throws(() => { Reflect.defineProperty(noObj); }, TypeError);
      });
      it('accepts an object', function() {
        let obj = {};
        assert.doesNotThrow(() => { Reflect.defineProperty(obj); });
      });
      it('accepts an instance (of a class)', function() {
        let instance = class {};
        assert.doesNotThrow(() => { Reflect.defineProperty(instance); });
      });
    });
  
    describe('2nd parameter is the name of the property to be defined on the object (normally a string)', function() {
      it('works with a `normal` string', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'prop', {});
        assert.equal('prop' in obj, true);
      });
      it('a number gets converted into a string', function() {
        let obj = {};
        Reflect.defineProperty(obj, 1, {});
        assert.equal('1' in obj, true);
      });
      it('`undefined` also gets converted into a string (watch out!)', function() {
        let obj = {};
        let undef = 1;
        Reflect.defineProperty(obj, undefined, {});
        assert.equal('undefined' in obj, true);
      });
      it('it can be a symbol', function() {
        let obj = {};
        const sym = Symbol.for('prop');
        Reflect.defineProperty(obj, sym, {});
        assert.equal(sym in obj, true);
      });
    });
  
    describe('the `value` is part of the 3rd parameter, given as a property in an object `{value: ...}`', function() {
      // The entire complexity of the 3rd parameter might be covered in a later kata.
  
      it('contains the initial value of the property, as an object in the property `value`', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'prop', {value: 'property value'});
        assert.equal(obj.prop, 'property value');
      });
      it('can be of any type (even itself)', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'prop', {value: obj});
        assert.equal(obj.prop, obj);
      });
    });
  
    describe('the return value of the function indicates wether the property was defined successfully', function() {
      describe('returns true', function() {
        it('when the property was created (which requires the 3rd parameter too!!!)', function() {
          let instance = new class {};
          const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: 'boom'});
          assert.equal(wasPropertyDefined, true);
        });
        it('no matter what the value of the property is (just the 3rd param has to exist as `{}`)', function() {
          let instance = new class {};
          const wasPropertyDefined = Reflect.defineProperty(instance, 'oh yeah', {});
          assert.equal(wasPropertyDefined, true);
        });
      });
      describe('returns false', function() {
        it('when no property name is given (since no property has been added)', function() {
          let instance = new class {};
          const wasPropertyDefined = Reflect.defineProperty(instance, {});
          assert.equal(wasPropertyDefined, false);
        });
        it('when no 3rd parameter, the descriptor is given', function() {
          let instance = new class {};
          const wasPropertyDefined = Reflect.defineProperty(instance, 'prop');
          assert.equal(wasPropertyDefined, false);
        });
      });
    });
  
  });

  //70
  // 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!

describe('`clear()` removes all elements from a Set object.', function(){

    let set;
    beforeEach(() => set = new Set());
  
    it('`set.size` becomes 0', function() {
      set.add('one').add(2);
      set.clear();
  
      var expectedSize = 0;
      assert.equal(set.size, expectedSize);
    });
  
    it('the iterator `set.entries()` will not contain any items', function() {
      set.add('one').add(2);
      set.clear();
  
      const {done} = set.entries().next();
      assert.equal(done, true);
    });
  
    it('any call to `set.has()` returns false', function() {
      set.add('one').add(2);
      set.clear();
  
      assert.deepEqual(set.has(2), false);
    });
  
    it('returns `undefined`', function() {
      var expectedReturn = undefined;
      assert.equal(set.clear(), expectedReturn);
    });
  
  });
  