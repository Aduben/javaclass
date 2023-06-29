// function ourClass(){
//     console.log("Inside funciton")
// }
// ourClass()

// console.log("done")
//=========================================================
// function ourClass(name,face){
//     console.log(name,face)
// }
// ourClass("Adu")
// console.log("middle")
// ourClass("kiru")
// ourClass()
//=============================================================
//funciton can be called even before it declaration

// ourClass("Adu")
// function ourClass(name,face){
//     console.log(name,face)
// }
// //========================================================
// let ourClass =funciton(){}     //to be treated as a normal variable

// //===========================

// function clases(){
//     console.log("12345")
// }
// ourClass()

// let ourClass = clases(){
//     console.log("class")
// }

//=====================================

//funciton experssions have a semicolon at the end but function declarations do not;

// function sayHello() {
//     console.log("Hello");
// }

// let sayHello = function(){
//     console.log("Hello");
// };

// function sayHi() {
//   //The function declaration creates the function and puts it into the variable named sayHi;
//   console.log("allo");
// }

// let func = sayHi; //copies the variable Sayhi into a variable func. There are no parentesis after sayHi

// console.log(func());  // not the right way to call
// sayHi();
// func();

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   console.log("You agreed.");
// }
// function showCancel() {
//   console.log("You cancelled the execution. ");
// }

// ask("Do you agree?", showOk, showCancel);

const readline = require("readline");

function ask(question, yes, no) {
  console.log(question);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Type "yes" or "no": ', (answer) => {
    rl.close();
    if (answer.toLowerCase() === "yes") {
      yes();
    } else {
      no();
    }
  });
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You cancelled the execution.");
}

ask("Do you agree?", showOk, showCancel);
