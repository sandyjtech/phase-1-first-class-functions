//take a callback function as an argument
//it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(callback) {
  //call the callback function
  callback();
}
//take no arguments
//return a named function
function returnsANamedFunction() {
  return function namedFunction() {
    // Function logic
  };
}
//take no arguments
//return an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    // Function logic
  };
}
