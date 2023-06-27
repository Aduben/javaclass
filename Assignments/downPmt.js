// Let the user provide the cost
const prompt = require("prompt-sync")();
let cost = parseFloat(prompt("Enter the cost of the house:"));

// Define the down payment variables
let downPayment;

// calculate the down payment
if (cost < 50000) {
  downPayment = cost * 0.05;
} else if (cost < 100000) {
  downPayment = 1000 + 0.1 * (cost - 50000);
} else if (cost < 200000) {
  downPayment = 2000 + 0.15 * (cost - 100000);
} else {
  downPayment = 5000 + 0.1 * (cost - 200000);
}

// Print the down payment amount
console.log(`Your total down payment amount is  $${downPayment}`);