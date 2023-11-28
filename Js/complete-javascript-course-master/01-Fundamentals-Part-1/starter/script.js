/*

// First Js Code
let js = "Amazing";
if (js === "Amazing") alert("Js is amazing");
console.log(40 + 8 + 23 - 10);

// Values and Variables
// Note: 
// 1. In javascript we write variables in camelCase.
// 2. Variable name cannot start with numbers ex:3name.
// 3. Variable name should not be a Keyword name.
// 4. Only special charcter allowed is $ ex: $name.
// 5. Variable name should start with lowercase.

let firstName = "Manjot";
console.log(firstName);

// this is better then below
let $myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

console.log($myFirstJob);
console.log(myCurrentJob);
// above is better then this
let job1 = "Programmer"
let job2 = "Programmer"

*/

/*

// primitive 7 datatypes (number, string, boolean, 
// undefined, null, symbol(es2015), BigInt(es2020))
// typeof is a keyword to know the datatype
// javascript support dynamic typing,
// no need to define datatype while declaring variable
let javascriptIsFun = "Yes"; 
console.log(typeof javascriptIsFun);
javascriptIsFun = true;
console.log(typeof javascriptIsFun);
javascriptIsFun = 1;
console.log(typeof javascriptIsFun);

// when define a variable without assigning value,
// then it is undefined and the datatype is also undefined.
let year;
console.log(year);
console.log(typeof year);
// assigning
year = 1997
console.log(year);
console.log(typeof year);

// typeof returns "object" for null value, 
// which is bug never corrected for legacy resons
console.log(null);
console.log(typeof null);

*/

/*
--> variable declaration keywords [var, let, const]
--> var is old one, let and const is in modern js
--> var and let declared variables mutable 
and const variables are immutable.
--> const cant be declared as undefined
--> While decalring a variable, 
always use "const" as best practice 
and "let" when ur sure that the variable is going to change
*/

/*

// let
let age = 25;
console.log(age);
age = 26
console.log(age);

// const
const birthYear = 1997
console.log(birthYear);
// errors
// birthYear = 1998
// const month;

// var
var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

*/

/*
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

