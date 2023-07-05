let prompt = require("prompt-sync")();

let lol = prompt("Enter your code here: ");

let cat = {
  name: "Meau",
  age: 3,
  price: 1000,
};
//console.log(cat.lol);    //undefined

console.log(cat[lol]); //Dynamic: if you provide name you will get meau as a response if you insert anything else than the attributes you will get undefined aka code distractor or distract and access
console.log(cat[lol]); // find the value of the variable lol in cat. eg if you put name if will give you back the value of name
console.log(cat[name]); //name is not defined as the variable name is not defined
console.log(cat["name"]); //print the value of the key name as meau if it is kept in string as seen
console.log(cat.name); //print the value of the key name as meau

//instead of writing the key multiple times by hardcoding you can easly make it dynamic by using the prompt key
console.log(cat.name);
console.log(cat.age);
console.log(cat.price);
