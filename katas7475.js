//SEVENTYFOUR.
// 74: String - `endsWith()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

    const s = 'el fin';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        //const doesEndWith = s.doesItReallyEndWith('n');
        //NOTE, TRUE, 'EL'FIN' ENDS WITRH 'N' AND 'S' IS EQUAL TO THE STRING.

        const doesEndWith = s.endsWith('n');
        assert.equal(doesEndWith, true);
      });

      it('can be a string', function() {
        //      const expected = false;
        //NOTE, TRUE, THE STRING ENDS WITH FIN, SO TRUE

        const expected = true;
        assert.equal(s.endsWith('fin'), expected);
      });
      it('can contain unicode characters', function() {
        const nuclear = 'NO ☢';
        //      const nuclear = 'NO ☢ Oh NO!';
        //NOTE, ENDED WITH A UNICODE CHARACTER.

        assert.equal(nuclear.endsWith('☢'), true);
      });
      
  
    describe('2nd parameter, searches within this string as if this string were only this long', function() {
      it('find "el" at a substring of the length 2', function() {
        //      const endPos = 0;
        //NOTE, STRING 'EL' ENDS AT POSITION 2, SO RETURNS TRUE.

        const endPos = 2;
        assert.equal(s.endsWith('el', endPos), true);
      });
      it('`undefined` uses the entire string', function() {
        //      const _undefined_ = 'i would like to be undefined';
        //NOTE, MADE, UNDEFINED = UNDEFINED
        const _undefined_ = undefined;
        assert.equal(s.endsWith('fin', _undefined_), true);
      });
      it('the parameter gets coerced to an int', function() {
        //      const position = 'five';
        //NOTE, TURNED FIVE INTO AN INTEGER.
        const position = '5';
        assert.equal(s.endsWith('fi', position), true);
      });
      describe('value less than 0', function() {
        it('returns `true`, when searching for an empty string', function() {
          //        const emptyString = '??';
          //NOTE, -1 IS SUPPOSEDLY EMPTY STRING = TRUE, WHEN LOOKING FOR AN EMPTY STRING.
          const emptyString = '';
          assert.equal('1'.endsWith(emptyString, -1), true);
        });
        it('return `false`, when searching for a non-empty string', function() {
          //        const notEmpty = '';
          //NOTE, OPPISITE CONCEPT AS PREVIOUS.

          const notEmpty = 'not empty';
          assert.equal('1'.endsWith(notEmpty, -1), false);
        });
        // SEVENTYFIVE
      //75
  // 75: Promise - basics


describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

    it('`Promise` is a global function', function() {
      //    const expectedType = '???';

      ////NOTE, EMPTY EXPECTEDTYPE INTO A FUNCTION.
      const expectedType = 'function';
      assert.equal(typeof Promise, expectedType);
    });
  
    describe('the constructor', function() {
  
      
  
      it('expects a function as parameter', function() {
        // const param = null;

        ////NOTE, PUT IN A FUNCTION AS DIRECTED FROM 'IT' resolve, reject AS PER OUR RESOLVER FUNCTION.
        const param = function(resolve, reject) {};
        assert.doesNotThrow(() => { new Promise(param); });
      });
  
    });
  
    describe('simplest promises', function() {
  
      it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
        
        ////NOTE, RESOLVE AS OUR FIRST PERAMETER.
        let promise = new Promise((resolve) => {
          resolve();
        });
  
        promise
       // .then(() => done())
       // .catch(() => done(new Error('The promise is expected to resolve.')));
       //NOTE,PASSED IN VALUE AS DIRECTED, SO FUNCTION COULD HAVE A RESOLVE.
          .then((value) => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
  
      it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
        
        
        let promise = new Promise((resolve) => {
          resolve(42);
        });
  
        promise
        
        //.catch(() => done(new Error('The promise is expected to resolve with 42!')));
        //NOTE, PASSED IN THE VALUE OF 42.
          .then(value => {assert.equal(value, 42); done();})
          .catch(() => done(new Error('The promise is expected to resolve with 42!')));
      });
  
      it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
        //let promise = new Promise(() => {
          //NOTE, REJECT AS THE SECOND PERAMETER.
        
        let promise = new Promise((resolve, reject) => {
          reject();
        });
   promise
          
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
  
    });
  
    describe('an asynchronous promise', function() {
  
      it('can resolve later, also by calling the first callback', function(done) {
        //let promise = new Promise(() => {
         //NOTE, MUST PASS IN MY RESOLVERS INTO THE FUNCTION.
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 100);
        });
  
        promise
          .then(() => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
  

  
        