// 66: object-literal - getter  sixty - six
// To do: make all tests pass, leave the assert lines unchanged!

describe('An object literal can also contain getters', () => {

    it('just prefix the property with `get` (and make it a function)', function() {
      //const obj = {
       // x() { return 'ax'; }
       //NOTE MADE INTO FUNCTION AS PER THE DIRECTIONS.
      const obj = {
        get x() { return 'ax'; }
      };
  
      assert.equal(obj.x, 'ax');
    });
  
    it('must have NO parameters', function() {
     // const obj = {
      //  x(param) { return 'ax'; }
      //NOTE TOOK OUT THE PARAMETERS./ PARAM
      const obj = {
        get x() { return 'ax'; }
      };
  
      assert.equal(obj.x, 'ax');
    });
  
  
    it('can be a computed property (an expression enclosed in `[]`)', function() {
     // const keyName = 'x';
   // const obj = {
     // get keyName() { return 'ax'; }
     //NOTE NEEDED TO PUT KEYNAME IN BRACKETS AS INSTRUCTED, ANOTHER WAY TO ENCLOSE AN EXPRESSION
      
        get [keyName]() { return 'ax'; }
      };
  
      assert.equal(obj.x, 'ax');
    });

    //67 ??????
  
    
  
       
        
  
    