console.log("External script file is working!");

const height = 1.83;
const weight = 100;
const bookCost = 5;
const bookCount = 10;

console.log("BMI: " + (weight / (height * height)).toFixed(2));
const totalCost = bookCost * bookCount;
console.log("Total cost: $" + totalCost);
