//stirng comparison

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true


//comparing different types

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1


//It is possible that at the same time: Two values are equal.  One of them is true as a boolean and the other one is false as a boolean.
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

//strict equality 
//A regular equality check == has a problem. It cannot differentiate 0 from false:
//A strict equality operator === checks the equality without type conversion.

console.log(0==false);   //true
console.log(''==false);  //true
console.log(0===false);  //false
console.log(''===false);  //false

console.log(null==undefined);   //true

console.log(null===undefined);   //fasle


//compare null with zero

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true


console.log( undefined > 0 );  // (1) false
console.log( undefined == 0 ); // (2) false
console.log( undefined >= 0 ); // (3) false
console.log( undefined == null ); // (3) true

console.log("assignment tasks");

console.log(5 > 4);                  //true
console.log("apple" > "pineapple");   //false
console.log("2" > "12");              //false      //true  Again, dictionary comparison, first char "2" is greater than the first char "1".
console.log("7" > "69");              //true  Again, dictionary comparison, first char "7" is greater than the first char "6".

console.log(undefined == null);        //true
console.log(undefined === null);       //false
console.log(null == "\n0\n");          //false
console.log(null === +"\n0\n");        //false