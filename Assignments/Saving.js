// Prompt the user for initial amount, annual interest rate, and number of years to compound
// const prompt = require("prompt-sync")();
// let principal = parseFloat(prompt("Enter the initial amount in the savings account:"));
// let annualInterestRate = parseFloat(prompt("Enter the annual interest rate (in percentage):"));
// let noYearsToCompound = parseInt(prompt("Enter the number of years to compound:"));

// // calculate monthly interest rate by cnverting the interest rate to decimal form 
// let monthlyInterestRate_frac = annualInterestRate / 100 / 12 ;

// // Calculate the balance of your saving after the given number of years of compounding
// let balance = principal * Math.pow(1 + monthlyInterestRate_frac, noYearsToCompound * 12);

// // Print the balance of saving and round the decimals to three digit.
// console.log(`The Balance of your saving after", ${noYearsToCompound}, "years is:", ${balance.toFixed(3)}`) 

// as Function
const prompt = require("prompt-sync")();
let principal = parseFloat(prompt("Enter the initial amount in the savings account:"));
let annualInterestRate = parseFloat(prompt("Enter the annual interest rate (in percentage):"));
let noYearsToCompound = parseInt(prompt("Enter the number of years to compound:"));

function coumpoundedInterest(principal,annualInterestRate,noYearsToCompound) {
// calculate monthly interest rate by cnverting the interest rate to decimal form 
let monthlyInterestRate_frac = annualInterestRate / 100 / 12 ;

// Calculate the balance of your saving after the given number of years of compounding
let balance = principal * Math.pow(1 + monthlyInterestRate_frac, noYearsToCompound * 12);

// Print the balance of saving and round the decimals to three digit.
x=console.log(`The Balance of your saving after", ${noYearsToCompound}, "years is:", ${balance.toFixed(3)}`) 
return x;
}
coumpoundedInterest(principal,annualInterestRate,noYearsToCompound)