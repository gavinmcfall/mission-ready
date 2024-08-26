console.log("Numbers!");

let a = 10;
let b = 5;

console.log("should equal 15: ", a + b);
console.log("should equal 5: ", a - b);
console.log("Should equal 50: ", a * b);
console.log("Should equal 2: ", a / b);
console.log("Should equal 100,000: ", a ** b);
console.log("Should equal 0 (no remaider): ", a % b);
let c = a++;
console.log("Should equal 11: ", c);
let d = b--;
console.log("Should equal 4: ", d);

let foo = 42;
let bar = "42";

console.log("Same value? ", foo == bar); // true
console.log("Same value and type? ", foo === bar); // false
