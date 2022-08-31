/* there have two types of data in javaScript
1. primitive data type
  primitive : the data type has only value that is primitive data type.
  a. number
  b. boolean
  c. string
  d. null
  e. undefined
2. Non primiive data type
Non primitive: the type is an special data type of javaScript
a. Object
b. Array
c. Function
*/


// Number

let x = 10;
let y = 20;
let z = x + y;
console.log(z)
console.log(typeof z);


// Boolean type

let bool = true
console.log(typeof bool);


// String
// if we wanna word with string then we need to declar a set of string with double coat or single coat 

let fname = "Rijuan";
let lname = "Ahmed";
let fullName = fname + lname;
// we can check the data type
console.log(typeof fullName)
console.log(typeof fname)
console.log(typeof lname)

console.log(`My name is ${fname } and my title is ${lname}`)

// null type
let a = null;

console.log(a)

// undefined type
// no vlaue assign means undefined

let b;
console.log(b);

