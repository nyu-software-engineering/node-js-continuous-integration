/**
 * A set of examples intended to teach object-oriented programming in ES6 Javascript to programmers of other languages.
 * Unlike many other object-oriented programming languages, Javascript has no easy way to make properties or methods static or private.  While there are ways to simulate this behavior, they are not included here for simplicity.
 */

import Rectangle from './Rectangle'; // import the default export from the Rectangle.js code

// make a rectangle
const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(5, 2);

// get info on each rectangle
console.log(rect1.toString());
console.log(rect2.toString());

// output both rectangles' info using their getters
console.log(`The area of rect1 is ${rect1.area}`);
console.log(`The area of rect2 is ${rect2.area}`);
