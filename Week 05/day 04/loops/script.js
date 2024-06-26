console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("Loop, the better way");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Infinite Loops Beware");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let mystring = "Responsiveness";

for (let i = 0; i < mystring.length; i++) {
  console.log(mystring[i]);
}

// Exercise 4

const foods = ["Ice Cream", "Whittakers", "Carrot Cake", "Redbull"];
for (let i = 0; i < foods.length; i++) {
  console.log("I like: " + foods[i]);
}

console.log("Different way to lopp");

for (let i = 0; i < foods.length; i++) {
  console.log(`I like: ${foods[i]}`);
}

//for...of loop

console.log("For...of loop");

const cars = ["Tesla Model 3 Performance", "Audi RS6", "Toyota Celica GT4 WRC"];

for (const car of cars) {
  console.log(car);
}

for (const food of foods) {
  console.log(food);
}

//exercide 6
console.log("Exercise 6");

let age = prompt("What is your age?");

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Wait till you are older or use time travel!");
}
