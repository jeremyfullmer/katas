//61 ??



//62
// 62: Map - `has()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`map.has()` indicates whether an element with a key exists', function() {

    it('finds nothing in an empty map', function() {
        //let map = new Map();
   // const hasKey = map.hazz(void 0);
    //NOTE NOTE!!!! needed to be has.
      let map = new Map();
      const hasKey = map.has(void 0);
      assert.equal(hasKey, false);
    });
  
    it('finds an element by it`s key', function() {
       // let map = new Map([['key', 'VALUE']]);
       // const hasKey = map.has();
        //NOTE NOTE!!!! passed in key into the function to find an element by its key.
      let map = new Map([['key', 'VALUE']]);
      const hasKey = map.has('key');
      assert.equal(hasKey, true);
    });
  
    it('finds `undefined` as key too', function() {
       // let map = new Map([[void 0, 'not defined key']]);
    //const hasUndefinedAsKey = map;
     //NOTE NOTE!!!! pass undefined into the function for map.has
      let map = new Map([[void 0, 'not defined key']]);
      const hasUndefinedAsKey = map.has(undefined);
      assert.equal(hasUndefinedAsKey, true);
    });
  
    it('does not coerce keys', function() {
       // let map = new Map([[1, 'one']]);
       // const findsStringOne = true;
        //NOTE NOTE!!!!
      let map = new Map([['1', 'one']]);
      const findsStringOne = true;
      assert.equal(map.has('1'), findsStringOne);
    });
  
    
  
    

  