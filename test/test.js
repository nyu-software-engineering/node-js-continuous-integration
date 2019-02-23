// define hooks

before(function() {
    // runs before all tests in this block
    console.log("About to run a batch of tests...");
});

beforeEach(function() {
    // runs before each test in this block
    console.log("About to run a test...");

});

afterEach(function() {
    // runs after each test in this block
    console.log("Just finished a test...");
});

after(function() {
    // runs after all tests in this block
    console.log("Just finished a batch of tests...");
});

// define test cases
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return positive int when the value is present', function() {
        assert.equal([1, 2, 3].indexOf(3), 2);
        });
    });
});

describe('Internet Connection', function() {
    describe('#integers()', function() {
        var x = 5;
        it('5 is not 6', function() {
        assert.notEqual(x, 6);
        });
    });
});

