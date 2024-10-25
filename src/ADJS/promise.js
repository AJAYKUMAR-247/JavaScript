// promise in javascript is an object used for asynchronous operations such as fetching data from a server.
/* An asynchronous function is a function that allows for non-blocking execution, meaning it can perform tasks without stopping the flow of the 
program*/

/*Each promise object has a built-in property name called "then" and "catch" those are methods used to receive data and errors respectively 
passed from the promise. */

// To define a promise use a built in keyword

const promise = new Promise();
console.log(promise);
// this will take in a callback function only as an argument because it requires a executor function

const promise1 = new Promise(()=>{


})
