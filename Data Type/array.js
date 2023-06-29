//array declaration
// let arr = new Array();
// let arr2 = [];

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[2] = "Pear";
// console.log(fruits);

// console.log(fruits.length);

// //Access the last element of an array

// console.log(fruits[fruits.length - 1]);

// console.log(fruits.at(-1));

// console.log(fruits.pop()); //pop will remove the last element of the array
// console.log(fruits);

// fruits.push("Pear"); //Add the element to the end of the Array
// console.log(fruits);
// console.log(fruits);

// console.log(fruits.shift()); //extract and return the first element of the array

// fruits.unshift("Apple"); //Add the element to the begining of the Array
// console.log(fruits);

// let animal = ["Dog"];

// animal.push("cow", "ox");
// animal.unshift("hen", "cat");

// console.log(animal);

// //shift vs unshift , pop vs push
// //shift :  The shift method removes the first element
// //unshift:   adds one or more elements to the beginning of an array
// //pop :     The pop method removes the last element from an array
// //push :   adds one or more elements to the end of an array

// //pop(): The pop method removes the last element from an array and returns that element. It reduces the length of the array by one. For example:

// const fruits = ["apple", "banana", "orange"];
// const removedFruit = fruits.pop();
// console.log(removedFruit); // 'orange'
// console.log(fruits); // ['apple', 'banana']

// //push(): The push method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array. For example:

// const fruits = ["apple", "banana"];
// const newLengths = fruits.push("orange", "mango");
// console.log(newLengths); // 4
// console.log(fruits); // ['apple', 'banana', 'orange', 'mango']

// //shift(): The shift method removes the first element from an array and returns that element. It shifts the remaining elements to a lower index, effectively reducing the length of the array by one. For example:

// const fruits = ["apple", "banana", "orange"];
// const removedFruits = fruits.shift();
// console.log(removedFruits); // 'apple'
// console.log(fruits); // ['banana', 'orange']

// //unshift(): The unshift method adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array and shifts existing elements to a higher index. For example:

// const fruits = ["banana", "orange"];
// const newLength = fruits.unshift("apple", "mango");
// console.log(newLength); // 4
// console.log(fruits); // ['apple', 'mango', 'banana', 'orange']

//loops
let fru = ["Peach", "orange", "Banana"];
for (let i = 0; i < fru.length; i++) {
  console.log(fru[i]);
}
//another form of loop

let myFrus = ["Peach", "orange", "Banana"];
for (let myFru of myFrus) {
  console.log(myFru);
}

let fruu = ["Peach", "orange", "Banana"];
let output = "";

for (let i = 0; i < fruu.length; i++) {
  output += fruu[i] + " ";
}

console.log(output.trim());

string = "";
let fruye = ["Peach", "orange", "Banana"];
for (let i = 0; i < fruye.length; i++) {
  string += fruye[i] + " ";
}
console.log(string);

let world = [];
world[1235] = "Apple";
console.log(world.length); //1236
//in array lenght is equal to the greatest numeric index plus 1

console.log([1, 2, 3] + 1);
