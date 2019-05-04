//#11

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      //let a, b, c = 'abc';
      let [a, b, c] = "abc";//from an array to a string.
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    
    it('missing characters are undefined', () => {
      //const [a, c] = 'ab';
      const [a,b, c] = 'ab';//added a b value to leave c undefined.
      assert.equal(c, void 0);
    });
    it('unicode character work too', () => {
        //const [space, coffee] = 'a ☕';
        const [space, coffee] = ' ☕';//space = a space coffee = a cup of coffee.
        assert.equal(coffee, '\u{2615}');
      });
    });

    //12.

    describe('Destructure objects', () => {
        it('by surrounding the left-hand variable with `{}`', () => {
          const {x} = {x: 1}; //added curlys to the x.
          assert.equal(x, 1);
        });
        
        describe('nested', () => {
          it('multiple objects', () => {
            const magic = {first: 23, second: 42};
            const {magic: {second}} = {magic};
            assert.equal(second, 42);
          });
          
          it('object and array', () => {
            //const {z:[x]} = {z: [23, 42]};
             const {z:[x]} = {z: [42]};//simply take out the 42.
            assert.equal(x, 42);
          });
          
          it('array and object', () => {
            //const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
            const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
            //added more square brackets to reach the nested array.
            assert.equal(lang, 'ES6');
          });
        });
        describe('interesting', () => {
            it('missing refs become undefined', () => {
              //const {z} = {x: 1, z: 2};
              const {z} = {x:1,y:2 };// the result is so z becomes void.
              assert.equal(z, void 0);
            });
            it('destructure from builtins (string)', () => {
                //const {substr} = 1;
                const {substr} = "1";// changed from a number to a string.
                assert.equal(substr, String.prototype.substr);
              });
            });
          });

          //13

          describe('When destructuring you can also provide default values', () => {
            it('just assign a default value, like so `a=1`', () => {
              //const [a:1] = [];
              const [a] = [1];//another way of assigning a to 1
              assert.equal(a, 1);
            });
            
            it('for a missing value', () => {
              //const [b=2] = [1,,3];
              const [b] = [2];// another way to assign b to 2
              assert.equal(b, 2);
            });
            
            it('in an object', () => {
              //const {a , b} = {b: 2};
              const {a, b} = {a: 1, b: 2};// changed to a set of curlys a=a b=b 1 and 2.
              assert.equal(b, 2);
            });

            it('if the value is undefined', () => {
                //const {a, b} = {a: 1, b: void 0};
                const {a, b=2} = {a: 1, b: void 0};// left object overrides, left over the right
                assert.strictEqual(b, 2);
              });

              it('also a string works with defaults', () => {
                //const [b=2] = '1';
                const [a, b=2] = '1';
                //a shall be = to one and b to 2
                assert.equal(a, '1');
                assert.equal(b, 2);
              });
            });

            //14

            describe('Destructuring function parameters', () => {
                describe('destruct parameters', () => {
                  it('multiple params from object', () => {
                    //const fn = ({id}, {name}) => {
                      const fn = ({id,name}) => {
                      assert.equal(id, 42);
                      assert.equal(name, 'Wolfram');
                    };
                    const user = {name: 'Wolfram', id: 42};
                    fn(user);
                  });
                  
                  
                  it('multiple params from array/object', () => {
                    //const fn = ([{name}]) => {
                      const fn = ([,{name}]) => {
                      assert.equal(name, 'Alice');
                    };
                    const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
                    fn(users);
                  });
                });
                
                
                describe('default values', () => {
                  it('for simple values', () => {
                    const fn = (id, name='Bob') => {
                      assert.strictEqual(id, 23);
                      assert.strictEqual(name, 'Bob');
                    };
                    fn(23);
                  });
                  it('for a missing array value', () => {
                    const defaultUser = {id: 23, name: 'Joe'};
                    const fn = ([user={id: 23, name: 'Joe'}]) => {
                      assert.deepEqual(user, defaultUser);
                    };
                    fn([]);
                  });
                  
                  
                  it('mix of parameter types', () => {
                    //const fn = (id, [arr], {obj}) => {
                     const fn = (id=1, [arr=2], {obj=3}) => {
                      assert.equal(id, 1);
                      assert.equal(arr, 2);
                      assert.equal(obj, 3);
                    };
                    fn(void 0, [], {});
                  });
                });
              });
              