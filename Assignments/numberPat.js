// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 1; i <= n; i++) { // external loop
//   for(let j = 1; j <= n; j++) { // internal loop
//     string += j;
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string +=i;
//   }
//   string += "\n";
// }
// console.log(string);

for (let i = 5; i >= 1; i--) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += i.toString();
    }
    console.log(string);
  }