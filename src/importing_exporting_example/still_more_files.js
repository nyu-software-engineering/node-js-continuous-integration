// import any system modules we want to use
import path from 'path' // useful for getting filenames from the system

// create a message specific to this module
let filename = path.basename(__filename) // get just the filename of this file, without the full path
let message = `Hello - this message comes from ${filename}.`

var x = (message) => {
  console.log(message)
}

export { message } // a named export
export default x // a default export
