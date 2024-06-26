console.log("Connected!");

// Part 01
// Wite a function called halfNumber that will take one argument (a number), 
// divide it by 2, and return the result.
// Assign the return value of the function to a variable called halvedNumber
// Print out a log like "Half of 5 is 2.5."

function halfNumber (num){
  return num / 2;
}

const number = 10;
const halfedNumber = halfNumber(number);
console.log(`half of ${number} is ${halfedNumber}`);

//Part 02
// Write a function call timeInSeconds that takes an integer minutes
// as a parameter and returns seconds
// Prompt the user to enter minutes
// Call the functtion and alert the output

function timeInSeconds(minutes){
  return parseInt(minutes) * 60;
}
const minutes = prompt("Enter minutes"); 

console.log(`${minutes} minutes is equal to ${timeInSeconds(minutes)} seconds`);