function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    // Function logic goes here
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    // Function logic goes here
  };
}
