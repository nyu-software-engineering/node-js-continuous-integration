/**
 * A set of examples intended to teach promises in ES6 Javascript to programmers of other languages.
 * Promises are a pattern that simplifies asynchronous programming by making the code look like synchronous 'regular' code.
 * A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.
 */

 // create a new promise by making a Promise object that accepts two arguments - a method to call if the promise is resolved (fulfilled), and another to call if the promise is not fulfilled (rejected)
const iPromiseToLoveYou = new Promise((resolve, reject) => {
    // promise to have a 50% chance of being in love (replace this with whatever you are promising to do
    // you will usually do something asynchronous here, like fetch data from a web API, database, wait for a user to click something, etc.
    let promiseFulfilled = Math.random() * 100 <= 50;

    // if the promise has been fulfilled (resolved)...
    if (promiseFulfilled) {
        // call the resolve method if the promise is fulfilled (resolved)
        resolve('I finally realized I really love you!');
    }

    // if the promise was not fulfilled, we call the reject method and pass it an error object
    // this would normally crash the program, but we catch this error in code below
    reject(new Error("I'm sorry, but I finally realized I do not love you!"));
});

// define the functions that are executed when the promise is resolved or rejected
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

// run the promise code and pass it the functions to run when resolving or rejecting the promise
iPromiseToLoveYou.then(onResolved, onRejected);

// catch the error if the promise is rejected
iPromiseToLoveYou.catch(
    (error) => {
        console.log("Catching error");
        console.log(error.message);
    }
);

