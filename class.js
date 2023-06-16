console.log(1/0);                         //Infinity

console.log(Infinity);                   //Infinity

console.log("not a Number" /2);          //NaN

console.log(typeof(NaN));                //Number


console.log( 3 + NaN );                  // NaN

console.log( 3 * NaN );                  // NaN

console.log( (3 - 2)/"not a Number" );   // NaN


let age =12

let yourAge = `I am ${age} years old`     //Backtick allow us to embed variables and expressions into a string by wrapping them in ${…}

console.log(yourAge);           

console.log(" I am ${2+3} years old")     //I am ${2+3} years old

console.log(` I am ${2+3} years old`)     // I am 5 years old


// There is no character type.
// In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.

// In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.



let z = undefined;
console.log(typeof(z));
console.log(Boolean(z));
console.log(Number(z));


let x = 0;
console.log(typeof(x));
console.log(Boolean(x));
console.log(Number(x));



let c = 10n;
console.log(typeof(c));
console.log(Boolean(c));
console.log(Number(c));


let d = true;
console.log(typeof(d));
console.log(Boolean(d));
console.log(Number(d));


let e = "foo";
console.log(typeof(e));
console.log(Boolean(e));
console.log(Number(e));


let f = Symbol("id");
console.log(typeof(f));
console.log(Boolean(f));
//console.log(Number(f));



let g = Math;
console.log(typeof(g));
console.log(Boolean(g));
console.log(Number(g));


let h =null;
console.log(typeof(h));
console.log(Boolean(h));
console.log(Number(h));


let k = "alerts";
console.log(typeof(k));
console.log(Boolean(k));
//console.log(Number(k));


let name = "Ilya";

console.log( `hello ${1}` );                          // hello 1

console.log( `hello ${"name"}` );                     // hello name

console.log( `hello ${name}` );                      // Ilya


//summary 
//Here are code examples that demonstrate the reasons why JavaScript is considered a dynamically typed language:

//Flexible Variable Types:

let myVariable; // Variable declaration without specifying a type
myVariable = "Hello"; // Assigning a string value
console.log(myVariable); // Output: Hello

myVariable = 10; // Assigning a number value
console.log(myVariable); // Output: 10

//Dynamic Type Checking:

let myVariable = "Hello";
console.log(typeof myVariable); // Output: string

myVariable = 10;
console.log(typeof myVariable); // Output: number


//Implicit Type Conversion:

let result = "The answer is: " + 42;
console.log(result); // Output: The answer is: 42


//Dynamic Object Structures:

let myObject = {
  name: "John",
  age: 25
};

console.log(myObject); // Output: { name: "John", age: 25 }

// Adding a new property dynamically

myObject.address = "123 Main St";
console.log(myObject); // Output: { name: "John", age: 25, address: "123 Main St" }

// Removing a property dynamically

delete myObject.age;
console.log(myObject); // Output: { name: "John", address: "123 Main S                                          