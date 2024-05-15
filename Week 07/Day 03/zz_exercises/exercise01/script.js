console.log("Exercise 01");

const val01 = 10;
const val02 = 2;
const val03 = 20;
const val04 = 7;

console.log("Val 01 = " + val01);
console.log("Val 02 = " + val02);
console.log("Val 03 = " + val03);
console.log("Val 04 = " + val04);

const exercise01a = (val01, val02) => val01 / val02; // Changed parameter name to avoid confusion
console.log("Val01: " 
+ val01 
+ " divided By Val02: " 
+ val02 + " = " 
+ exercise01a(val01, val02)
); // Call the function with an argument

const exercise01b = (num1, num2) => num1 % num2;
if (exercise01b(val03, val04) === 0) {
    console.log("val03: " + val03 + " divided by val 04: " + val04 + ", Is even");
}   else {
    console.log("val03: " + val03 + " divided by val04: " + val04 + ", Is not even");
}


