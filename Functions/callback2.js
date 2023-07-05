// Define a function called `multiply` that accepts three parameters:
// `x`, `y`, and a callback function called `callback`
function multiply(x, y, callback) {
  // Calculate the product of `x` and `y`
  var result = x * y;

  // Pass the result as an argument to the callback function
  callback(result);
}

// Define a function called `displayResult` that will be used as a callback
// It accepts a `result` parameter
function displayResult(result) {
  // Log the result to the console
  console.log("The result is:", result);
}

// Call the `multiply` function, passing two numbers and the `displayResult` function as the callback
multiply(5, 10, displayResult);
