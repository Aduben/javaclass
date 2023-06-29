// Let the user provide the cost
// const prompt = require("prompt-sync")();
// let cost = parseFloat(prompt("Enter the cost of the house:"));

// // Define the down payment variables
// let downPmt_amt;

// // calculate the down payment
// if (cost < 50000) {
//   downPmt_amt = cost * 0.05;
// } else if (cost < 100000) {
//   downPmt_amt = 1000 + 0.1 * (cost - 50000);
// } else if (cost < 200000) {
//   downPmt_amt = 2000 + 0.15 * (cost - 100000);
// } else {
//   downPmt_amt = 5000 + 0.1 * (cost - 200000);
// }

// // Print the down payment amount
// console.log(`Your total down payment amount is  $${downPmt_amt}`);

const prompt = require("prompt-sync")();
let cost = parseFloat(prompt("Enter the cost of the house:"));

// Define the down payment variables
let downPmt_amt;

// calculate the down payment
if (cost < 50000) {
  downPmt_amt = cost * 0.05;
} else if (cost >=50000 && cost < 100000) {
  downPmt_amt = 1000 + 0.1 * (cost - 50000);
} else if (cost >=100000 && cost < 200000) {
  downPmt_amt = 2000 + 0.15 * (cost - 100000);
} else {
  downPmt_amt = 5000 + 0.1 * (cost - 200000);
}

// Print the down payment amount
console.log(`Your total down payment amount is  $${downPmt_amt}`);

function(){
  const added=""
}

function(){
  const added=""
}

function(){
  const added=""
}

funciton (){
  const heree=" "
}
