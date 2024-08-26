console.log("Connected!");

function showMyBrekkie(food1, food2, condiment, drink) {
  console.log(
    "I'm having "
      + food1
      + " and "
      + food2
      + " with "
      + condiment
      + " and a glass of "
      + drink
  );
}

showMyBrekkie("toast", "eggs", "ketchup", "orange juice");


function sum(val1, val2) {
  return val1 + val2;
}

const result = sum(2, 3);
console.log(result);

const funcAnswer = sum(3,6);

//We can store the function call into a variable  that we can use later
if (funcAnswer === 7) {
  console.log("The Math is correct!");
} else {
  console.log("The Math is incorrect");
}

//We can also store the function itself into a variable that we can use later

const funcWithParamsExpression = function(number1, number2) {
  return number1 + number2;
}