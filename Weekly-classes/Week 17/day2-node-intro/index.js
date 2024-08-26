const myModules = require("./myModules");
require("http");

console.log("Hello, World");

function greet(name) {
  console.log(`Hello, ${name} Welcome to Node.js`);
}

greet("Gavin");

console.log(myModules);
console.log("AddNums: " + myModules.addNums(10, 4));
console.log("subtractNums: " + myModules.subtractNums(10, 4));
console.log("isNumber: " + myModules.isNumber("10"));
console.log("multipleNums: " + myModules.multiplyNums(10, 4));
console.log("hasDoubleLetters: " + myModules.hasDoubleLetters("dog"));
