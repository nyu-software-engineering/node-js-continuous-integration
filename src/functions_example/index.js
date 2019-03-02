/**
 * A set of examples intended to teach functions in ES6 Javascript to programmers of other languages.
 */

/** EXAMPLE SET 1 - FUNCTION DEFINITIONS */

// the old-fashioned way to define a function in Javascript
function foo1() {
    console.log('foo1!');
}

// the new way to do the same as of ES6 - arrow functions!
const foo2 = () => {
    console.log('foo2!');
}

/** EXAMPLE SET 2 - FUNCTIONS WITH PARAMETERS*/

// the old-fashioned way to define a function with parameters
function bar1(x, y) {
    // concatenate a string the old-fashioned way
    console.log('bar1! The arguments are ' + x + ' and ' + y + '!');
}

// the new way to do the same as of ES6 - arrow functions!
const bar2 = (x, y) => {
    // concatenate a string using new ES6 string templates
    console.log(`bar2! The arguments are ${x} and ${y}!`);
}

/** EXAMPLE SET 3 - RETURN VALUES */

// the old-fashioned way to define a function with a return value
function baz1(x, y) {
    let sum = x + y; //add em up
    // concatenate a string the old-fashioned way
    return 'baz1! The sum of ' + x + ' and ' + y + ' is ' + sum + '.';
}

// the new way to do the same as of ES6 - arryw functions
const baz2 = (x, y) => {
    let sum = x + y; //add em up
    // concatenate a string using new ES6 string templates
    return `baz2! The sum of ${x} and ${y} is ${sum}.`;
}

/** EXAMPLE SET 3  - FANCY PARAMETERS */

// "rest parameters" are new in ES6 - this allows any number of arguments to be passed to the function
const bun1 = (...params) => {
    // starting value of a string
    let message = 'bun1! '; 

    // loop through each argument and append it to the string
    params.forEach((val, index) => {
        // append each parameter to the string
        message += `${val},`;
    });

    // output the full string
    console.log(message);
}

// "destructuring" is also a new feature in ES6.  This allows extraction of values from an array or object supplied as an argument into discrete variables
// notice the square brackets around the parameters - this is how you do destructuring of an array or object argument into discrete parameters
// this doesn't seem to work with arrow functions for some reason, so using old fashioned function keyword
const bun2 = function ([x, y]) {
    // concatenate a string using new ES6 string templates
    console.log(`bar2! The arguments are ${x} and ${y}!`);
}

/** EXAMPLE SET 4  - SHORTHAND ARROW FUNCTIONS */

// if a function only accepts one parameter, you can leave out the parentheses around the parameter
const buw1 = x => {
    // concatenate a string using new ES6 string templates
    return `buw1! The argument is ${x}!`;
}

// if a function only returns a value with no additional statements in its implementation, you can leave off the curly brackets around the function implementation
const buw2 = (x) => `buw2! The argument is ${x}!`;

// combining the ideas in the previous two functions, you could define a function with no parentheses around a parameter and no curly brackets around its implementation
const buw3 = x => `buw3! The argument is ${x}!`;

/** FUNCTION CALLS - TRY OUT THE FUNCTIONS ABOVE */

// call functions with no args
foo1();
foo2();

// call functions with args
bar1(2, 3);
bar2(2, 3);

// call functions with return values
console.log(baz1(2, 3));
console.log(baz2(2, 3));

// call a function with a rest parameter that can handle any number of arguments
bun1('foo');
bun1('foo', 'bar');
bun1('foo', 'bar', 'baz');
bun1('foo', 'bar', 'baz', 'bun');

// call the function with destructured parameters - pass it an array and it will grab the values into parameter variables
bun2(['foo', 'bar']); // passing an array to the function
bun2(['foo', 'bar', 'baz', 'bun']); // passing an array to the function with more values than we will use

// call the functions that use some shorthand syntax
console.log(buw1(2, 3));
console.log(buw2(2, 3));
console.log(buw3(2, 3));
