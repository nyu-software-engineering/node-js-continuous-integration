// import any system modules we want to use
import path from 'path'; // useful for getting filenames from the system

// output something directly from this module
let filename = path.basename(__filename) // get just the filename of this file, without the full path
console.log(`Hello - this message comes from ${filename}.`);
