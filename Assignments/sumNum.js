// The following line prompts the user to enter an integer
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a positive integer:"));

// Convert the number to a positive value (absolute value) if it's negative
if (number < 0) {
  number = Math.abs(number);
}

// Initialize variables
let sum = 0;
let digit;

// Compute the sum of all the digits
//USe a while loop to compute the sum of all the digits. Within the loop, the rightmost digit of number is extracted using the modulo operator % with 10 (number % 10).
 //This gives us the remainder when number is divided by 10, effectively giving us the rightmost digit.
 
while (number > 0) {
  digit = number % 10;
  sum += digit;                  // That digit is added to the sum using the += shorthand notation.
  number = Math.floor(number / 10); //Then, number is updated by dividing it by 10 and taking the floor value using Math.floor() to remove the rightmost digit.
}

// Print the sum of the digits
console.log("Sum of the digits:", sum);