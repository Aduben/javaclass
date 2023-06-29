


let age = 0;
while (age <= 18) {
  const prompt = require("prompt-sync")();
  age = parseInt(prompt("Please let us know how old you are to confirm if you are over 18 yrs old: "));
}
console.log("Congratulations you can vote for congress");


let age_do;
do {
    const prompt = require("prompt-sync")();
    age = parseInt(prompt("Please let us know how old you are to confirm if you are over 18 yrs old: "));
} while (age_do <= 18);
console.log("Congratulations you can vote for congress");