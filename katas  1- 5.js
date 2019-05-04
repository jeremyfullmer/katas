// es6 template strings.

describe('A template string, is wrapped in ` (backticks) instead of \' or "', function() {
    describe('by default, behaves like a normal string', function() {
      it('just surrounded by backticks', function() {// made str into string.
        var str = `like a string`;
        assert.equal(str, 'like a string');
      });
    });
  
    var x = 42;
    var y = 23;
    
    describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
      it('e.g. a simple variable "${x}" just gets evaluated', function() {
        var evaluated = `x=${x}`;
        assert.equal(evaluated, 'x=' + x);
      });
      it('multiple variables get evaluated too', function() {
        var evaluated = `${x}+${y}`; // added backticks, and removed spaces.
        assert.equal(evaluated, x + '+' + y);
      });
    });
  
    describe('can evaluate any expression, wrapped inside "${...}"', function() {
      it('all inside "${...}" gets evaluated', function() {
        //var evaluated = `${ x } + ${ y }`;
        var evaluated = `${x+y}`;// combined x and y inside same brackets, for result 65.
        assert.equal(evaluated, x+y);
      });
      it('inside "${...}" can also be a function call', function() {
        // function getDomain(){ 
        //   return document.domain; 
        // }
        // var evaluated = `${ getDomain }`;
        function getDomain(){ 
          return document.domain; 
        }
        var evaluated = `${ getDomain() }`;// added set of parenz in backticks to call function.
        assert.equal(evaluated, 'tddbin.com');
      });
    });
  });
  
  describe('Tagged template strings, are an advanced form of template strings', function() {
    it('syntax: prefix a template string with a function to call (without "()" around it)', function() {
      function tagFunction(s) {
        return s.toString();
      }
      var evaluated = tagFunction `template string`;
      assert.equal(evaluated, 'template string');
    });
    
    
    
    describe('the tag function can access each part of the template', function() {
      describe('the 1st parameter receives only the pure strings of the template string', function() {
        function tagFunction(strings) {
          return strings;
        }
        it('the strings are an array', function() {
          var result = (tagFunction`template string`);
          assert.deepEqual(tagFunction`template string`, result);
        });
        
        
        
        it('expressions are NOT passed to it', function() {
          var tagged = tagFunction`one${23}two`;
          assert.deepEqual(tagged, ['one', 'two']);
      
          
    
  
  