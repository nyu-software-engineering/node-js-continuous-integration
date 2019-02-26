import "./another_file";
import {yet} from "./yet_another_file"; // import a named export of the yet_another_file code
import method, {message} from "./still_more_files"; // import both the default and a named export of the still_more_files.js module

// call the 'yet' function we imported from yet_another_file
yet();

method(message);

// proof of existence
console.log("Hello - this message comes from index.js");

