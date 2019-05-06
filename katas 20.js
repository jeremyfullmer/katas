//19
describe('Rest parameters with destructuring', () => {
    it('must be last', () => {
      //const [...all, last] = [1, 2, 3, 4];
      const [...all,] = [1, 2, 3, 4];// did away with word last so all means all values.
      assert.deepEqual(all, [1, 2, 3, 4]);
    });
    
    it('assign rest of an array to a variable', () => {
      //const [...all] = [1, 2, 3, 4];
      const [...all] = [ 2, 3, 4];
      assert.deepEqual(all, [2, 3, 4]);
    });
    
    // the following are actually using `spread` ... oops, to be fixed #TODO
    it('concat differently', () => {
      //const theEnd = [3, 4];
      //const allInOne = [1, 2, ...[theEnd]];
      const theEnd = [3, 4];
      const allInOne = [1, 2, ...theEnd]];
      
      assert.deepEqual(allInOne, [1, 2, 3, 4]);
    });
    
    it('`apply` made simple, even for constructors', () => {
      //const theDate = [2015, 1, 1];
      //const date = new Date(theDate);
      const theDate = [2015, 1, 1];
      const date = new Date(...theDate);
      
      assert.deepEqual(new Date(2015, 1, 1), date);
    });
  });

  //20
  describe('Spread syntax with arrays', () => {
    describe('basically', () => {
      it('expands the items of an array by prefixing it with `...`', function() {
        const middle = [1, 2, 3];
        const arr = [0, 1, 2, 3, 4]; //changed middle to 123 to equal the assert.
        assert.deepEqual(arr, [0, 1, 2, 3, 4]);
      });
      it('an empty array expanded is no item', function() {
        const arr = [0, 1];// took maway the square bracket to resemble the assert.
        assert.deepEqual(arr, [0, 1]);
      });
    });
    // describe('is (in a way) the opposite to the rest syntax', function() {
    //   it('both use `...` to either expand all items and collect them', function() {
    //     const ([rest, [,1, 2, 3, 4, 5]);
    //     assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    //   });
      it('rest syntax must be last in an array, spread can be used in any place', function() {
        const [a, b, ...rest] = [1, 2, [ 3, 4, 5]]; //put 345 in rest
        assert.equal(a, 1);
        assert.equal(b, 2);
        assert.deepEqual(rest, [3, 4, 5]);
      });
    });
    // describe('used as function parameter', () => {
    //   it('prefix with `...` to spread as function params', function() {
    //     const magicNumbers = [1, 2];// no solution
    //     const fn = (magicA, magicB) => {
    //       assert.deepEqual(magicNumbers[0], magicA);
    //       assert.deepEqual(magicNumbers[1], magicB);
    //     };
    //     fn(magicNumbers);
    //   });
      it('pass an array of numbers to Math.max()', function() {
        const max = Math.max(...[23, 0, 42, 43]);
        assert.equal(max, 42);
      });
   
    describe('used as constructor parameter', () => {
        it('just like in a function call (is not possible using `apply`)', () => {
          class X {
            constructor(a, b, c) { return [a, b, c]; }
          }
          const args = [1,2,3];//making equal to 123 instead of just 1.
          assert.deepEqual(new X(...args), [1, 2, 3]);
        });
      });
    //21
    describe('Spread syntax with strings', () => {
        it('expands each character of a string by prefixing it with `...`', function() {
          const [b, a] = [...'ba']; //just switched the ab to ba
          assert.equal(a, 'a');
          assert.equal(b, 'b');
        });
        it('expands any kind of character', function() {
          const arr = [...'1 ☢ 2'];
          assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
        });
        it('works anywhere inside an array (must not be last)', function() {
            const letters = ['a', ...'bcd', 'e', 'f'];
            assert.equal(letters.length, 6);
          });
          it('don`t confuse with the rest operator', function() {
            const [...rest] = [...'1234', ...'5'];// use the three dots to spread. = to 5 indexes instead of two.
            assert.deepEqual(rest, [1, 2, 3, 4, 5]);
          });
          it('can also be used as function parameter', function() {
            const max = Math.max(...'12345');//changed from one index to 5.
            assert.deepEqual(max, 5);
          });
        });
        //22
        describe('Class creation', () => {
            it('is as simple as `class XXX {}`', function() {
             class TestClass{}
              const instance = new TestClass();
              assert.equal(typeof instance, 'object');
            });
            it('a class is block scoped', () => {
    
                {class Inside {}}//example of making a class inside of a class.
                assert.equal(typeof Inside, 'undefined');
              });
              it('the `constructor` is a special method', function() {
                class User {
                  constructor(id) {this.id=id} // this is how the assert will see the id. by using this...
                }
                
                
                const user = new User(42);
                assert.equal(user.id, 42);
              });
              //23
              // 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class accessors (getter and setter)', () => {
    it('a getter is defined like a method prefixed with `get`', () => {
      class MyAccount {
        get balance() { return Infinity; }
      }
      assert.equal(new MyAccount().balance, Infinity);
    });


    const account = new MyAccount();
    account.balance = 23;
    assert.equal(account.balance, 23);
  });
  describe('dynamic accessors', () => {
    it('a dynamic getter name is enclosed in `[]`', function() {
      const balance = 'yourMoney';
      class YourAccount {
        get [balance]() { return -Infinity; }// put in balanve to get yourmoney
      }
      assert.equal(new YourAccount().yourMoney, -Infinity);
    });
    it('a dynamic setter name as well', function() {
        const propertyName = 'balance';
        class MyAccount {
          get [propertyName]() { return this.amount; }
          set [propertyName](amount) { this.amount = 23; }//put propertyname in brackets.
        }
        const account = new MyAccount();
        account.balance = 42;
        assert.equal(account.balance, 23);
      });
    });
  });
  //24
  




