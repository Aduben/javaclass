// for (i=0 ; i<10; i++){
//     console.log(`Heloo #${i}`)
// }
// x=11;
// if (x>10){
//     let y=5;
//     console.log(y)
//     console.log(x)
// }
// else console.log("do it again")

for (let x=1; x<10; x++){
    if(x==5 && x==7){
        continue;
    }
    if (x==8){
        break;
    }
    console.log("Hello" + x)
}

// In the given JavaScript code, the continue statement is used inside the if condition to skip the current iteration and move to the next iteration of the loop. 
//However, the condition x==5 && x==7 can never be true simultaneously for any value of x.

// The expression x==5 && x==7 checks if x is equal to 5 and 7 at the same time. This condition will always evaluate to false because x cannot have two different values at the same time.

// As a result, the continue statement is never executed, and the code proceeds to the console.log statement. Therefore, the values for 5 and 7 
//will also show up in the result set of the code. 

for (let x=1; x<10; x++){
    if(x%2!==0){
        continue;
    }
    if (x==5){
        break;
    }
    console.log("Hello #  " + x)
}

    
    
 // Requirement: Calculate the factorial of a given number


let y = 1;

for (let i = 1; i <= 5; i++) {
  y *= i;
}

// console.log(`The factorial of  is: ${y}`);


// Requirement: Print even numbers between 1 and 10 (inclusive), but skip number 6

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 && i !== 6) {
      console.log(i);
    }
  }

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 ) {
        if(i==6){
            continue;
        }
      console.log(i);
    }
  }


  // Requirement: Print numbers from 1 to 10 (inclusive), but skip number 7 and stop the loop when number 9 is encountered

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      continue; // Skip number 7
    }
  
    if (i === 9) {
      break; // Stop the loop when number 9 is encountered
    }
  
    console.log(i);
  }



  // Requirement: Create a pattern of numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
    let pattern = '';
    
    for (let j = 1; j <= i; j++) {
      pattern += j + ' ';
    }
    
    console.log(pattern);
  }

  //// Requirement: Create a pattern of numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
  let pattern = '';
  
  for (let j = 1; j <= i; j++) {
    pattern += j + ' ';
  }
  
  console.log(pattern);
}

//https://www.tutorialstonight.com/js/javascript-star-pattern