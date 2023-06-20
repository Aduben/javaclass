
//Remiander %
console.log(7%2);   //1
console.log(10%3);  //1
console.log(10%2);  //0
console.log(1%1 );  //0

//Exponentiation **
//The exponentiation operator a ** b raises a to the power of b.

console.log(2**3);
console.log(2**4);
console.log(3**2);
console.log(3**3);

console.log(16**(1/2));
console.log(27**(1/3));

//string concatination

console.log(5+1+'1');            //61
console.log('5'+1+1);             //511

//The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

console.log(5-1-'1');      //3
console.log('5'-1-1);      //3


//The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. 
//But if the operand is not a number, the unary plus converts it into a number.

console.log(+true);                //1
console.log(+"");                  //0

let a = -4
console.log(+a);                  //-4


let apple ="8";
let orange ="6";
console.log(apple + orange);                  //86
console.log(+apple + +orange);                //14
console.log(Number(apple) + Number(orange));  //14


//Assignment


let x = 5;
let y = 6;

let c = 7 - (x = y + 1);

console.log( x );                                // 7
console.log( c );                                // 0


//chanined assignments

let l, m, n;

l = m = n = 5 + 5;

console.log( l ); // 10
console.log( m ); // 10
console.log( n ); // 10

//Modify in place
let h = 2;
h = h + 5;
h = h * 2;
//This notation can be shortened using the operators += and *=:

let i = 2;
i += 5; // now i = 7 (same as n = n + 5)
i *= 2; // now i = 14 (same as n = n * 2)

console.log( i ); // 14

//increament / decreament

let counter = 7;
counter++;                      // counter +1          
console.log(counter);           //8


//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.


//the postfix form counter++ also increments counter but returns the old value 
//the prefix form ++counter increments counter and returns the new value 


let counters = 0;
counters++;
++counters;
console.log(counters); // 2, the lines above did the same
console.log(counters++); //2



let counterr = 1
console.log( 2 * ++counterr ); // 4
//Compare with:

let countera = 1;
console.log( 2 * countera++ ); // 2, because counter++ returns the "old" value


//Bitwise operators



// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


//Tasks

let aa = 1, bb = 1;

let cc = ++aa; // 2
let dd = bb++; // 2
console.log("tasks");
console.log(aa);            //2
console.log(bb);            //2 
console.log(cc);            //2
console.log(dd);            //1


let ab = 2;
let xx = 1 + (ab *= 2);
console.log(xx);     //5

//Type conversion
console.log("type conversion");

console.log("" + 1 + 0);        //10
console.log("" - 1 + 0)         //-10    //-1
console.log(true + false)       //1
console.log(6 / "3")            //2
console.log("2" * "3")          //6
console.log(4 + 5 + "px")       //9px
console.log("$" + 4 + 5)        //$45
console.log("4" - 2)            //2
console.log("4px" - 2)          //Nan
console.log("  -9  " + 5)       //-9 5
console.log("  -9  " - 5)      // -14
console.log(null + 1)          // nan     //1
console.log(undefined + 1)     //nan
console.log( " \t \n" - 2)    //-2


let av = window.prompt("First number?");
let bv = window.prompt("Second number?");

console.log(av + bv); // 12
console.log(+av + +bv); // 12