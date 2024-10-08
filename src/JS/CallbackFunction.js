// A callback function is a function, which takes function as an argument.
// This is used when incase of you have to execute the function after the execution of the other function.
// Eg: A fucntion is waiting for a another function to get data from the server, once the data is fetched from the function then the callback function will  execute.

function checkDiscount(callback) {
  setInterval(function () {
    callback("40% Discount");
  }, 2000);
}
checkDiscount(function (res) {
  console.log(res);
});
