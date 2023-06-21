"use strict";

// const ps = require("prompt-sync");
// const age = ps("How old are you? ");
// console.log(`You are ${age} years old.`);


// let itembought =20;
// let savedAmount;

// if (itembought >25){
//    savedAmount=5;
//    console.log(`saved Amount =$(savedAmount)`);
// }
// else savedAmount=2;
// console.log(`saved Amount =${savedAmount}`);

// //constants
// const salaried_threshold =300;
// const low_commission_rate =.01;
// const high_conmmission_rate_salaried =.02;
// const high_commission_Rate_non_salaried =.03;

// //funciton to calculate sales commission

// function calculateSalesCommission(salesAmount,isSalaried){
//     let commission =0;
// }
    
// const pt = require("prompt-sync")
// const prompt =pt()
// let age =prompt("Enter your age: ")
// console.log(`I am ${age} years old`)


// let x = 5;

// if (x>5){
//     if(x<10){
//         if(x>8){
//             console.log("I am a big kid")
//         }else
//         console.log("I am a todler")
//     }else if (x<15){
//         console.log(("I am a tenneger"))
//     }else if (x<20){
//         console.log("I am a young man")
//     }else if (x<60){
//         console.log("I am an adult")
//     }
// else if (x<=5){
//     if(x>3){
//         console.log("I am a kid")
//     }else console.log("I am a baby")
// }else console.log( "I am unboarn baby")
// }


// let x = 8; // Assigns the value 5 to the variable x

// if (x > 5) { // Checks if x is greater than 5
//   if (x < 10) { // Checks if x is less than 10
//     if (x > 8) { // Checks if x is greater than 8
//       console.log("I am a big kid"); // Prints "I am a big kid"
//     } else {
//       console.log("I am a toddler"); // Prints "I am a toddler"
//     }
//   } else if (x < 15) { // Checks if x is less than 15
//     console.log("I am a teenager"); // Prints "I am a teenager"
//   } else if (x < 20) { // Checks if x is less than 20
//     console.log("I am a young man"); // Prints "I am a young man"
//   } else if (x < 60) { // Checks if x is less than 60
//     console.log("I am an adult"); // Prints "I am an adult"
//   } else {
//     console.log("I am unborn baby"); // Prints "I am unborn baby"
//   }
// } else if (x <= 5) { // Checks if x is less than or equal to 5
//   if (x > 3) { // Checks if x is greater than 3
//     console.log("I am a kid"); // Prints "I am a kid"
//   } else {
//     console.log("I am a baby"); // Prints "I am a baby"
//   }
// } else {
//   console.log("I am unborn baby"); // Prints "I am unborn baby"
// }


const prompt = require("prompt-sync");         //import prompt-sync module and assign it to a prompt variable using require()
const userinput = prompt();                          //calls prompt() fucntion which creates a prompt and waits for the user to enter input
let age = userinput("Please enter your age:  "); // Prompt the user to enter their age

// Check if the input is a valid number
if (!isNaN(age) && Number.isInteger(Number(age))) {
  age = Number(age); // Convert age to a number if it is a valid input and argument passed to the prompt() function is the prompt message displayed to the user.

  if (age <= 0) {
    console.log("I am an unborn baby");
  } else if (age > 0 && age <= 3) {
    console.log("I am a baby");
  } else if (age > 3 && age <= 5) {
    console.log("I am a kid");
  } else if (age > 5 && age < 8) {
    console.log("I am a toddler");
  } else if (age >= 8 && age < 10) {
    console.log("I am a big kid");
  } else if (age >= 10 && age < 15) {
    console.log("I am a teenager");
  } else if (age >= 15 && age < 20) {
    console.log("I am a young man");
  } else if (age >= 20 && age < 60) {
    console.log("I am an adult");
  } else {
    console.log("I am a senior citizen");
  }
} else {
  console.log("Invalid age input. Please enter a valid age.");
}