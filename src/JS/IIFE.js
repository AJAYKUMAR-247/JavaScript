// IIFE stands for Immediately Involked Function Expression

// Means this will execute immediately after it is defined
// This is used when you want to limit the number of global variables, means if you have a code that you dont want to use it again.

// The syntax for the IIFE is
/* (function(){ 
        function logic here;
    })();

    OR 

    (() => {
        function logic here;
        })();*/

(function () {
  console.log("Welcome");
})();
// Thus function will automatically run when the application is loaded, without calling it anywhere.

// UseCase - when the user is logged in for the firsttime then it is needed.

(function () {
  var user = "Ajay";

  console.log(user);

  function welcome() {
    console.log(`Welcome ${user}`);
  }

  welcome();
})();

// This will display welcome when is user is logged in and this will run only once by default.

// We can also pass parameter in a IIFE

(function (date) {
  console.log(date.toLocaleString);
})(new Date());

// But it also needs a argument to be passed.
