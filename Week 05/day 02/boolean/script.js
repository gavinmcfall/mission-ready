console.log("Connected!");
//copy line/s of code and paste it/them below the original line/s of code
// Shift + Alt + ⬇️
console.log(Boolean("Hello World!"));
console.log(Boolean(" ")); //true, space is a value
console.log(Boolean("")); //false, empty string
console.log(Boolean(15)); //true, number
console.log(Boolean(0)); //false, 0 is a falsy value
console.log(Boolean(-15)); //true, negative number

console.log(Boolean()); //false, undefined
console.log(Boolean([])); //true, array is an object
console.log(Boolean(null)); //false, null is a falsy value
console.log(Boolean(NaN)); //false, NaN is a falsy value
console.log(Boolean(undefined)); //false, undefined is a falsy value

console.log(2 == 2); //true, no type checking
console.log(2 != 2); //false, no type checking
console.log(2 > 3); //false, no type checking
console.log(2 < 3); //true, no type checking
console.log(2 == 3); //false, no type checking
console.log(2 == "2"); //true, no type checking
console.log(2 !== "2"); //true, type checking
console.log(2 === "2"); //false, type checking
console.log(2 >= 2); //true, no type checking
console.log(2 <= 2); //true, no type checking
console.log(2 >= 3); //false, no type checking

// = is an assignment operator
// == is a comparison operator
// === is a strict comparison operator
// != is a not equal operator
// !== is a strict not equal operator
// > is a greater than operator
// < is a less than operator
// >= is a greater than or equal operator
// <= is a less than or equal operator

// Generally it is better to use strict comparison operators === and !==

// Logical Operators
// && is a logical AND operator
// || is a logical OR operator

const b1 = !false; //true
const b2 = true && false; //false
const b3 = true || false; //true
const b4 = 123 === "456"; //false

console.log("b1 = " + b1);
console.log("b2 = " + b2);
console.log("b3 = " + b3);
console.log("b4 = " + b4);

// Conditional Statements
// if statement
// else statement
// if else statement

if (1 === 1) {
  console.log("This is true");
}

const age = 16;

if (age > 16) {
  console.log("You are old enough to drive");
} else {
  console.log("You are not old enough to drive");
}

//exercise

const mynum = -1;
if (mynum > 0) {
  console.log("The number is positive");
} else if (mynum === 0) {
  console.log("The number is 0");
} else {
  console.log("The number is negative");
}

// exercise 2

const mystring = "Alphabet";

if (mystring[0].toLowerCase() === "a") {
  console.log("True");
} else {
  console.log("False");
}

const mystring2 = "apple";
//Ternary Operator
mystring2[0].toLowerCase() === "a" ? console.log("True") : console.log("False");

//exercise 3
const word = "hippopotamus";
word.length > 20
  ? console.log("The word is long")
  : console.log("The word is NOT long. It is short");

//&& operator aka AND operator

const isSunny = true;
const temperature = 28;

if (isSunny && temperature > 25) {
  console.log("It's a hot a sunny day!");
} else {
  console.log("The weather is not hot and sunny");
}

// || operator aka OR operator
const hasPremiumSubscription = false;
const hasFreeTrial = true;

if (hasPremiumSubscription || hasFreeTrial) {
  console.log("You have access to premoium content");
} else {
  console.log("Upgrade to premium subscription for full access");
}

//BEDMAS in JavaScript
let x = 4,
  y = 2,
  z = 0;

if ((x == 4 && !y == 1) || z == 0) {
  console.log("The comparison value is ?");
}
//Evaluate y == 1 first
//Evaluate (!y == 1) second
//Evaluate z == 0 third
//Evaluate (!(y == 1) || z == 0) fourth
//Evaluate x == 4 fifth
//Evaluate x == 4 && (!(y == 1) || z == 0) sixth

//exercise 4

const customerAge = 50;
const hasPremiumSub = true;
const hasValidCoupon = true;

if (customerAge >= 65 && (hasPremiumSub || hasValidCoupon)) {
  console.log("You get a discount");
} else {
  console.log("You do not get a discount");
}

customerAge >= 65 && (hasPremiumSub || hasValidCoupon)
  ? console.log("You get a discount")
  : console.log("You do not get a discount");

//switch

const fruit = "grape";

switch (fruit) {
  case "orange": //if (fruit === "orange")
    console.log("The fruit is an orange");
    break;

  case "strawberry": //if (fruit === "strawberry")
    console.log("The fruit is a strawberry");
    break;

  case "banana": //if (fruit === "banana")
    console.log("The fruit is a banana");
    break;

  default:
    console.log(fruit + ": this fruit is unknown");
}

//exercise 5

let dayOfWeek = "Saturday";

switch (dayOfWeek) {
  case "Saturday":
  case "Sunday":
    console.log("It's a Time to relax! it's the weekend!");
    break;

  default:
    console.log("zzz it's a work day");
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let dayIndex = days.indexOf(dayOfWeek);

if (dayIndex >= 0 && dayIndex <= 4) {
    console.log("zzz it's a work day");
} else if (dayIndex === 5 || dayIndex === 6) {
    console.log("It's a Time to relax! it's the weekend!");
} else {
    console.log("Invalid day");
}