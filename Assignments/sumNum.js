// Prompt the user for an integer
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter an integer:"));

// Convert the number to a positive value (absolute value) if it's negative
if (number < 0) {
  number = Math.abs(number);
}

// Initialize variables
let sum = 0;
let digit;

// Compute the sum of all the digits
while (number > 0) {
  digit = number % 10;
  sum += digit;
  number = Math.floor(number / 10);
}

// Print the sum of the digits
console.log("Sum of the digits:", sum);