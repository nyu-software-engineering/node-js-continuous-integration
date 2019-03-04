/**
 * A set of examples intended to teach importing and exporting of code in ES6 Javascript to programmers of other languages.
 * ES6 allows importing/exporting of "named exports" or "default exports".  The examples below and in the other files in this directory show the syntax for both.
 * Exports can be simple variables, functions, objects, or classes
 */

// import any system modules we want to use
import path from 'path'; // useful module for getting filenames from the system

// now import our own scripts
import './another_file'; // import all the code from this module/file.
import { yet } from './yet_another_file'; // import just the export named 'yet' of the yet_another_file.js module
import method, { message } from './still_more_files'; // import both the default export 'method' and the named export 'message' of the still_more_files.js module
import Rectangle from '../objects_classes_example/Rectangle'; // import the default export 'Rectangle' from the Rectangle.js code

// call the 'yet' function we imported from yet_another_file.js
yet();

// call the 'method' function we imported from still_more_files.js, and pass it the message we also imported as an argument
method(message);

// call the 'getInfo' method on an object that belongs to the Rectangle class we imported from Rectangle.js
const rect = new Rectangle(6, 6); // construct a 6x6 rectangle
const msg = rect.toString(); // get the message to print
console.log(msg); // output the message to the console

// output something directly from this module
const filename = path.basename(__filename); // get just the filename of this file, without the full path
console.log(`Hello - this message comes from ${filename}.`);
