// let sum = (a, b) => a + b;
// sum(1, 2);
// let sum2 = function (a, b) {
//   return a + b;
// };

// sum2();

// let Hii = () => console.log("Hello");
// Hii();

let prompt = require("prompt-sync")();
let age = prompt("what is your age?", 18);

let welcome =
  age < 18
    ? () => console.log("I am doing great")
    : () => console.log("Greetings!");

welcome();

//===========================

function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;

//===================================
function multiplyAndAdd(a, b, c) {
  let result = a * b;
  result += c;
  return result;
}

const multiplyAndAdd = (a, b, c) => {
  let result = a * b;
  result += c;
  return result;
};

//===============================================

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

const calculateFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
};
