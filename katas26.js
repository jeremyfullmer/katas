
//26
describe('class can inherit from another', () => {

    it('extend an `old style` "class", a function, still works', () => {
      let A = function() {};
      class B extends A {}
  
      assert.equal(new B() instanceof A, true);
    });
  
    describe('prototypes are as you know them', () => {
      class A {}
      class B extends A {}
      it('A is the prototype of B', () => {
        const isIt = A.isPrototypeOf(B);
        assert.equal(isIt, true);
      });
      it('A`s prototype is also B`s prototype', () => {
        const proto = new B();
        // Remember: don't touch the assert!!! :)
        assert.equal(A.prototype.isPrototypeOf(proto), true);
      });
    });
  
    describe('`extends` using an expression', () => {
      it('eg the inline assignment of the parent class', () => {
        let A;
        class B extends (A = class {}) {}
  
        assert.equal(new B() instanceof A, true);
      });
  
      it('or calling a function that returns the parent class', () => {
        const returnParent = (beNull) => beNull ? null : class {};
        class B extends (returnParent(true)) {}
  
        assert.equal(Object.getPrototypeOf(B.prototype), null);
      });
    });
  
  });

  //27
  describe('inside a class use `super` to access parent methods', () => {

    it('use of `super` without `extends` fails (already when transpiling)', () => {
      class A {hasSuper() { return false; }}
  
      assert.equal(new A().hasSuper(), false);
    });
  
    it('`super` with `extends` calls the method of the given name of the parent class', () => {
      class A {hasSuper() { return true; }}
      class B extends A {hasSuper() { return super.hasSuper(); }}
  
      assert.equal(new B().hasSuper(), true);
    });
  
    it('when overridden a method does NOT automatically call its super method', () => {
      class A {hasSuper() { return true; }}
      class B extends A {hasSuper() { return undefined; }}
  
      assert.equal(new B().hasSuper(), void 0);
    });
  
    it('`super` works across any number of levels of inheritance', () => {
      class A {iAmSuper() { return this.youAreSuper; }}
      class B extends A {constructor() { super(); this.youAreSuper = true; } }
      class C extends B {
        iAmSuper() {
          return this.youAreSuper;
        }
      }
  
      assert.equal(new C().iAmSuper(), true);
    });
  
    it('accessing an undefined member of the parent class returns `undefined`', () => {
      class A {}
      class B extends A {getMethod() { return super.constructor(); }}
  
      assert.equal(new B().getMethod(), void 0);
    });
  
  });
  //28
  escribe('class', () => {

    it('if you `extend` a class, use `super()` to call the parent constructor', () => {
      class A {constructor() { this.levels = 1; }}
      class B extends A {
        constructor() {
          super();
          this.levels++;
        }
      }
  
      assert.equal(new B().levels, 2);
    });
  
    it('`super()` may also take params', () => {
      class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
      class B extends A {
        constructor(...args) {
          super(...args);
          this.counter++;
        }
      }
  
      assert.equal(new B(42, 2).counter, 45);
    });
  
    it('it is important where you place your `super()` call!', () => {
      class A {inc() { this.countUp = 1; }}
      class B extends A {
        inc() {
          this.countUp = 2;
          super.inc();
          return this.countUp;
        }
      }
  
      assert.equal(new B().inc(), 1);
    });
    it('use `super.constructor` to find out if there is a parent constructor', () => {
        class A extends null {
          constructor() {
            super();
            this.isTop = !super.constructor;
          }
        }
    
        assert.equal(new A().isTop, false);
      });
    
    });
//29
describe('`Array.from` converts an array-like object or list into an Array', () => {
  // const arrayLike = {0: 'one', 1: 'two', length: 2};
  // it('call `Array.from` with an array-like object', function() {
  //   const arr = arrayLike;
 const arrayLike = {0: 'one', 1: 'two', length: 2};//result
  
    
 it('call `Array.from` with an array-like object', function() {
    
  const arr = Array.from(arrayLike);
  assert.deepEqual(arr, ['one', 'two']);
    });



  
    it('a DOM node`s classList object can be converted', function() {
      // const domNode = document.createElement('span');
      // domNode.classList.add('some');
      // domNode.classList.add('other');
      // const classList = domNode.classList;

      //note:!! in the body, inside the body and inside the classlist i want to add a class called some , and one called other.

      document.body.classList.add('some');
      document.body.classList.add('other');
      const classList = Array.from(document.body.classList);
  
      assert.equal(''+classList, ''+['some', 'other']);

    });

  
    // it('convert a NodeList to an Array and `filter()` works on it', function() {

    //   const nodeList = document.createElement('span');
    // const divs = nodeList.filter((node) => node.tagName === 'div');
    //note: fubar . from turns it into an array and find what you need.
// fubar
    //   const nodeList = document.querySelectorAll('body');
    //   const bodies = Array.from(nodeList).filter(node => node === document.body);
  
    //   assert.deepEqual(bodies, [document.body]);
    // });

  
    describe('custom conversion using a map function as second param', () => {

      // it('we can modify the value before putting it in the array', function() {
      //   const arr = Array.from(arrayLike, (value) => value);

      it('we can modify the value before putting it in the array', function() {
        const arr = Array.from(arrayLike, value => value.toUpperCase());
        assert.deepEqual(arr, ['ONE', 'TWO']);
        // note: instead of having array within, i made the second param commanding the values to uppercase.
      });

  
      it('and we also get the object`s key as second parameter', function() {

        // const arr = Array.from(arrayLike, (value) => `${key}=${value}`);
        // assert.deepEqual(arr, ['0=one', '1=two']);
      // ????????????
        const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`);
        assert.deepEqual(arr, ['0=one', '1=two']);
      });
    });
  
  });

  //30
  describe('`Array.of` creates an array with the given arguments as elements', () => {

    it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
      //note: below i changed from normal array to static array with .of!
      //const arr = Array(10);
      const arr = Array.of(10);
  
      assert.deepEqual(arr, [10]);
    });
  
    it('puts all arguments into array elements', () => {
      //note:  using static i must move the 1 and 2 of deepequal into the perenz for .of
      //const arr = Array.of();
      const arr = Array.of(1, 2);
  
      assert.deepEqual(arr, [1, 2]);
    });
  
    it('takes any kind and number of arguments', () => {
      //note: instead of the values, i put the variables into the obj. start and end.
    //   const starter = [1, 2];
    // const end = [3, '4'];
    // const arr = Array.of(...starter, ...end);
      const starter = [1, 2];
      const end = [3, '4'];
      const arr = Array.of([...starter], ...end);
  
      assert.deepEqual(arr, [[1, 2], 3, '4']);
    });
  
  });
  //31
  describe('`Array.prototype.fill` can fill up an array with one value', () => {

    it('`fill(0)` will populate `0` into each array element', function() {
      //const arr = new Array(3).fill();
      const arr = new Array(3).fill(0);
  // note we use zero to fill in the array with 3 zeros...
      assert.deepEqual(arr, [0, 0, 0]);
    });
  
    it('fill only changes content, adds no new elements', function() {
      //const arr = [undefined].fill(0);
       // note the zero will change nothing, if nothing is ther.
      const arr = [].fill(0);
  
      assert.deepEqual(arr, []);
    });
  
    it('second parameter to `fill()` is the position where to start filling', function() {
      //const fillPosition = 0;
    //const arr = [1,2,3].fill(42, fillPosition);

      const fillPosition = 2;
      const arr = [1,2,3].fill(42, fillPosition);
  //note: we fill from 3 on through the entire array.
      assert.deepEqual(arr, [1, 2, 42]);
    });
  
    it('third parameter is the position where filling stops', function() {
      //const fillStartAt = 1;
    //const fillEndAt = 1;
    //const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);

      const fillStartAt = 1;
      const fillEndAt = 2;
      const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
  // note only changes the value of 1, only the starting point.
  //(x,1,3) x is the value, 1 is starting point, and 3 is the end.
      assert.deepEqual(arr, [1, 42, 3]);
    });
  
  });

  //32
  describe('`Array.prototype.find` makes finding items in arrays easier', () => {

    it('takes a compare function', function() {
      //note:// note: in this example im using an arrow function to find the value of true within the array.
      //const found = [true].find(true);
      

      const found = [false, true].find(value => value === true);
  
      assert.equal(found, true);
    });
  
    it('returns the first value found', function() {
      //note: to find a value greater than 1, we must put in a value greater than 1 to get our result. to return "found".
      //const found = [0, 1].find(item => item > 1);
      const found = [0, 1, 2].find(item => item > 1);
  
      assert.equal(found, 2);
    });
  
    it('returns `undefined` when nothing was found', function() {
      //note:  our result is void due to the fact that the 2nd value needs to be not equal to 2 or cant be found to return void. not === 2.

      //const found = [1, 2, 3].find(item => item === 2);
      const found = [1, 4, 3].find(item => item === 2);
      
      assert.equal(found, void 0);
    });
  
    it('combined with destructuring complex compares become short', function() {
      //const bob = {name: 'Bob'};
     //const alice = {name: 'Alice'};
      //const found = [bob, alice].find(({name}) => name);

//     note: using a name function to find the name strictly equal to alice.

      const bob = {name: 'Bob'};
      const alice = {name: 'Alice'};

      const found = [bob, alice].find(({name}) => name === 'alice');
  
      assert.equal(found, alice);
    });
  
  });
  //33
  describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {

    it('takes a compare function, returns the index where it returned true', function() {
//     NOTE: comparison function to return what is === to true.

      //const foundAt = [false, true].findIndex(item);
      const foundAt = [false, true].findIndex(item => item);
  
      assert.equal(foundAt, 1);
    });
  
    it('returns the first position it was found at', function() {
       // NOTE:  found a value of 1 at index 1. returns wherever the first occurence is foun at.

      //const foundAt = [0, 1, 1, 1].findIndex(item => item = 1);
      const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);
  
      assert.equal(foundAt, 1);
    });
  
    it('returns `-1` when nothing was found', function() {
       //NOTE: returns a -1 as a default value when looking for value > 3.

      //const foundAt = [1, 2, 3].findIndex(item => item > 1);
      const foundAt = [1, 2, 3].findIndex(item => item > 3);
  
      assert.equal(foundAt, -1);
    });
  
    it('the findIndex callback gets the item, index and array as arguments', function() {

      // const three = 3;
      // const containsThree = arr => arr.indexOf(three) > -1;
      // function theSecondThree(index, arr) {
      //   const preceedingItems = arr.slice(0, index);

      //   return containsThree(preceedingItems);

      const three = 3;
      const containsThree = arr => arr.indexOf(three) > -1;
      function theSecondThree(item, index, arr) {
        //NOTE: ADDED ITEM TO GET THE ITEM(SECOND THREE)AT THE APPROPRIATE INDEX IN THE ARRAY. NEED TO GO IN THE ARRAY TO GET THE INDEX TO ACCESS THE ITEM.
        const preceedingItems = arr.slice(0, index);

        return containsThree(preceedingItems);
      }
      const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
  
      assert.equal(foundAt, 4);
    });


  
    it('combined with destructuring complex compares become short', function() {
     // NOTE: SHORTENED LENGTH BY ASSIGNIONG IT TO L

      //const bob = {name: 'Bob'};
      //const alice = {name: 'Alice'};
      //const foundAt = [bob, alice].findIndex(({name:{length:l}}) => length > 3);
       //NOTE: FOUND LENGTHJ . 3 AT INDEX 1, WHICH IS ALICE IN THE ARRAY.

      const bob = {name: 'Bob'};
      const alice = {name: 'Alice'};
      const foundAt = [bob, alice].findIndex(({name:{length:l}}) => l > 3);
  
      assert.equal(foundAt, 1);
    });
  
  });

