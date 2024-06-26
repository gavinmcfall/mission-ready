console.log('connected');

const num = 111;
const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;

// Traditional function
function sum(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

// Arrow function
const sum2 = (num3, num4) => {
    console.log(num3 + num4);
    return num3 + num4;
}

// Traditional function
function doubleNum (num) {
    return num * 2;
}

// Arrow function
const doubleNum2 = num => num * 2;