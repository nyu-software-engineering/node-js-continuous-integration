/**
 * Various unit tests of the functions in our functions_example directory
 */

// STEP 0 - DO ANY IMPORTS

// first import relevant modules
import assert from 'assert' // node's unit testing assertion library

// import testable methods from custom class we're testing
import { baz1, baz2, buw1, buw2, buw3 } from '../src/functions_example/index'

// STEP 1 - DEFINE TEST GROUP
// define a test group named 'Rectangle tests'
// This will nicely group all unit tests of the Rectangle class, defined in Rectangle.js
describe('Functions example tests', () => {
  // STEP 2 - DEFINE ANY HOOKS
  // these allow you to (optionally) run any general setup or teardown shared by all tests in this group

  before(() => {
    // put any code here that you want to run before ANY tests are run
    // console.log("About to run a batch of tests...");
  })

  beforeEach(() => {
    // put any code here that you want to run before EACH tests is run
    // console.log("About to run a test...");
  })

  afterEach(() => {
    // put any code here that you want to run after EACH tests is run
    // console.log("Just finished a test...");
  })

  after(() => {
    // put any code here that you want to run after ALL tests have completed
    // console.log("Just finished a batch of tests...");
  })

  // STEP 3 - DEFINE UNIT TESTS IN THIS GROUP
  // unit tests should be in isolation

  // write a message what the test should show
  it('2 + 2 should be 4', () => {
    // insert your test case code here
    assert.equal('baz1! The sum of 2 and 2 is 4.', baz1(2, 2))
  })

  // write a message what the test should show
  it('3 + 1 should be 4', () => {
    // insert your test case code here
    assert.equal('baz2! The sum of 3 and 1 is 10.', baz2(3, 1))
  })

  // write a message what the test should show
  it('The argument is 8', () => {
    // insert your test case code here
    assert.equal('buw1! The argument is 8!', buw1(8))
  })

  // write a message what the test should show
  it('The argument is 5', () => {
    // insert your test case code here
    assert.equal('buw2! The argument is 5!', buw2(5))
  })

  // write a message what the test should show
  it('The argument is 22', () => {
    // insert your test case code here
    assert.equal('buw3! The argument is 22!', buw3(22))
  })
})
