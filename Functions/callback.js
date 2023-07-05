// Define a function called `getUser` that accepts two parameters:
// `userId` and a callback function called `callback`
function getUser(userId, callback) {
  // Simulate an asynchronous operation (e.g., API request)
  setTimeout(function () {
    // Assuming the API call is successful, create a user object
    var user = {
      id: userId,
      username: "john_doe",
      email: "john@example.com",
    };

    // Pass the user object as an argument to the callback function
    callback(user);
  }, 2000); // Delay of 2 seconds (simulating API response time)
}

// Define a function called `displayUser` that will be used as a callback
// It accepts a `user` parameter
function displayUser(user) {
  // Log the user object to the console
  console.log(user);
}

// Call the `getUser` function, passing the user ID and the `displayUser` function as the callback
getUser(123, displayUser);
