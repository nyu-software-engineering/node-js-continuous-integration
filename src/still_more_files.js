
var message = "Hello - this message comes from still_more_files.js";

var x = (message) => {
    console.log(message);
}

export {message}; // a named export
export default x; // a default export
