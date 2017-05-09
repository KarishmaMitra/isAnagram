var expect = require('chai').expect;
var isAnagram = require('./server.js').isAnagram;
suite('server test',function(done){
    test('isAnagram: correct o/p generated',function(done){
        expect(isAnagram("cat","act").to.equal(true));
        done;
    })

    test('isAnagram: incorrect o/p generated, failed',function(done){
        expect(isAnagram("cat","act").to.equal(false));
        done;
    })
})