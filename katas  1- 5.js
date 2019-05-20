
//1
// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('a template string, is wrapped in ` (backticks) instead of \' or "', function() {

  describe('by default, behaves like a normal string', function() {

    it('just surrounded by backticks', function() {
      //var str = ``;
      //NOTE, CHANGED EMPTY STRING INto a normal string surrounded by backticks.
      var str = `like a string`;
      assert.equal(str, 'like a string');
    });

  });

  var x = 42;
  var y = 23;

  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {

    // it('e.g. a simple variable "${x}" just gets evaluated', function() {
    //   var evaluated = `x=${x}`;
    //   assert.equal(evaluated, 'x=' + x);
    // });

    it('multiple variables get evaluated too', function() {
      //var evaluated = `x=#x`;
     // NOTE, notice wrapped in curly braces.
      var evaluated = `${x}+${y}`;
      assert.equal(evaluated, x + '+' + y);
    });

  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {//notice the description.

    it('all inside "${...}" gets evaluated', function() {
      // var evaluated = `${ x } + ${ y }`;
      //NOTE, put both vartiables into same curly bracers.
      var evaluated = `${x + y}`;
      assert.equal(evaluated, x+y);
    });

    it('inside "${...}" can also be a function call', function() {
      //
      function getDomain(){
        return document.domain;
      }
     // var evaluated = `${ getDomain }`;
     //NOTE, getdo]\main example put in as a function call.
      var evaluated = `${getDomain()}`;
      assert.equal(evaluated, 'tddbin.com');
    });

  });

});

//2 two2 two2 two2 two2 two2 two


describe('template string, can contain multiline content', function() {

  it('a normal string can`t span across multiple lines', function() {
   // var normalString = `line1 //// line3`;
  //  NOTE, instruction for multi lione
  //  comment
    var normalString = `line1
line2`;
    assert.equal(normalString, 'line1\nline2');
  });

  it('wrapped in backticks it can span over multiple lines', function() {

    var templateString = `line1
line2`;
    assert.equal(templateString, 'line1\nline2');
  });

  it('even over more than two lines', function() {
   // var multiline = ``;
   //NOTE,
    var multiline = `line 1
                     line 2
                     line 3
                     line 4`;
    assert.equal(multiline.split('\n').length, 4);
  });

  describe('and expressions inside work too', function() {

    var x = 42;

    it('like simple variables', function() {
      var multiline = `line 1
          ${x}`;
          //var multiline = `line 1 $ {x}`;
         //NOTE, changed single variable and single line into multiline.
      assert.equal(multiline, 'line 1\n          42');
    });

    it('also here spaces matter', function() {
      var multiline = `
${x}`;
//var multiline = ``;
//NOTE, notice \n42            put as multiline end with n\

      assert.equal(multiline, '\n42');
    });

  });

});

//3 THREE THREE THREE THREE THREE


describe('tagged template strings, are an advanced form of template strings', function() {

  it('syntax: prefix the template string with a function to call (without "()" around it)', function() {
    function tagFunction(s) {
      return s.toString();
    }
    var evaluated = tagFunction`template string`;
   // var evaluated = tagFunc `template string`;
    //NOTE, corrected spelling to tagFunction
    assert.equal(evaluated, 'template string');
  });

  describe('the function can access each part of the template', function() {

    describe('the 1st parameter - receives only the pure strings of the template string', function() {

      function tagFunction(strings) {
        return strings;
      }

      it('the strings are an array', function() {
        //var result = 'template string';
        //NOTE, put the template string into an array.
        var result = ['template string'];
        assert.deepEqual(tagFunction`template string`, result);
      });

      it('expressions are NOT passed to it', function() {
        //var tagged = tagFunction`one${23}`;
        //NOTE,NOTE,  ?
        var a = '';
        var tagged = tagFunction`one${a}two`;
        assert.deepEqual(tagged, ['one', 'two']);
      });

    });

    describe('the 2nd and following parameters - contain the values of the processed substitution', function() {

      var one = 1;
      var two = 2;
      var three = 3;
      it('the 2nd parameter contains the first expression`s value', function() {
        function firstValueOnly(strings, first_value) {
          //return firstValue;
          //NOTE, corrected syntax of 'first value' in the return
          return first_value;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
      });

      it('the 3rd parameter contains the second expression`s value', function() {
        function firstValueOnly(strings, firstValue, second_value) {
          return second_value;//like this to get a return.
          // return secondValue;
          //NOTE, same as previous.
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 2);
      });

      it('using ES6 rest syntax, all values can be accessed via one variable', function() {
        function valuesOnly(stringsArray, ...allValues) { // using the new ES6 rest syntax
          return allValues;//allvalues
         // return;
         //NOTE,//allvalues.

        }
        assert.deepEqual(valuesOnly`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]);
      });

    });
  });

});

//4  FOUR FOUR FOUR
// 4: template strings - String.raw


describe('on tagged template strings you can use the `raw` property like so `s.raw`', function() {

  it('the `raw` property accesses the string as it was entered', function() {
    function firstChar(strings) {
      //NOTE NOTE!!  CHANGED THE RESTURN AS PER THE DESCRIPTION.
     // return strings;
      return strings.raw;
    }
    assert.equal(firstChar`\n`, '\\n');
  });

  it('`raw` can access the backslash of a line-break', function() {
    function firstCharEntered(strings) {
      //NOTE NOTE!! zero is what will access the appropriate index.
      //var lineBreak = strings.raw;
     // return lineBreak;
      var lineBreak = strings.raw[0];
      return lineBreak[0];
    }
    assert.equal(firstCharEntered`\n`, '\\');
  });

  describe('`String.raw` as a static function', function(){

    it('concats the raw strings', function() {
      //NOTE NOTE!! for the multiline removed one of the backslashes.
      //var expected = '\n';
      var expected = '\\n';
      assert.equal(String.raw`\n`, expected);
    });

    it('two raw-templates-string-backslashes equal two escaped backslashes', function() {
      //NOTE NOTE!! to get raw backslaskes into the string.
     // const TWO_BACKSLASHES = '\\';
      const TWO_BACKSLASHES = '\\\\';
      assert.equal(String.raw`\\`, TWO_BACKSLASHES);
    });

    it('works on unicodes too', function() {
      //NOTE NOTE!! removed one backslash from each variable.
      //var smilie = '\u{1F600}';
     // var actual = String.raw`\u{1F600}`;
      var smilie = '\\u{1F600}';
      var actual = String.raw`\u{1F600}`;
      assert.equal(actual, smilie);
    });

  });
});


//5 FIVE FIVE FIVE!!!!!
// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {

  it('are shorter to write', function() {
    var func = () => {
      //NOTE NOTE!! changed oldschool function to the arrow function.
     //var func = function(){};
      return 'I am func';
    };
    assert.equal(func(), 'I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    //NOTE NOTE!! put in the desired return into the bracers.
   // var func = () => {};
    var func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });

  it('one parameter can be written without parens', () => {
    //NOTE NOTE!! changed the operator.
    //var func = p => param - 1;
    var func = p => p + 1;
    assert.equal(func(23), 24);
  });

  it('many params require parens', () => {
    //NOTE NOTE!! put the params into the perenz. along with desired return after arrow function.
    //var func = param => param + param1;
    var func = (param, param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });

  it('body needs parens to return an object', () => {
    //NOTE NOTE!! used perenz as needed.
    //var func = () => {iAm: 'an object'};
    var func = () => ({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });

});

//6 SIX
// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!



describe('arrow functions have lexical `this`, no dynamic `this`', () => {

  it('bound at definition time, use `=>` ', function() {
    //NOTE NOTE!! combined the function with being bound.
   
   // var fn = bound.getFunction();
    var bound = new LexicallyBound();
    var fn = bound.getFunction();

    assert.strictEqual(fn(), bound);
  });


//7 SEVEN
// 7: block scope - let

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      //NOTE NOTE!! var being used for outside the local block of code.
     
       // let varX = true;
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });

    it('`let` restricts scope to inside the block', () => {
      //NOTE NOTE!! changed to let for local scope.
     
       // var letX = true;
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });

  });

  describe('`let` usage', () => {

    it('`let` use in `for` loops', () => {
      //NOTE NOTE!! changed var to let in the for loop.
     
      //for (var key in obj) {}
      let obj = {x: 1};
      for (let key in obj) {}
      assert.throws(() => console.log(key));
    });

    it('create artifical scope, using curly braces', () => {
      {
        //NOTE NOTE!! returning true.
       
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });

  });

});



          
    
  
  