

// let age = 0;
// while (age <= 18) {
//   //age = parseInt(prompt("Please enter your age:"));
// const userInput = require("prompt-sync")();
// const age = parseInt(userInput("How old are you now? "));
//   }
// console.log("You are now older than 18. Congrats!");

let age = 0;
while (age <= 18) {
  const prompt = require("prompt-sync")();
  age = parseInt(prompt("Please enter your age:"));
}
console.log("You are now older than 18. Congrats!");