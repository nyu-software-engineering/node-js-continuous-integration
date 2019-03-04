// import any system modules we want to use
import path from 'path'; // useful for getting filenames from the system

// create a message specific to this module
// get just the filename of this file, without the full path
const filename = path.basename(__filename); 
const message = `Hello - this message comes from ${filename}.`;

const x = (message) => {
  console.log(message);
};

export { message }; // a named export
export default x; // a default export
