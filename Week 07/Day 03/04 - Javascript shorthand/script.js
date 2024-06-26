console.log('connected');

let likeJavascript = true;
if (likeJavascript === true) {
    console.log('Javascript is awesome');
} else {
    console.log('Typesctipt is better');
}

// OR

let likeJavascript2 = true;
if (likeJavascript2) { //is asking if likeJavascript is true/truethy it is shorter
    console.log('Javascript is awesome');
} else {
    console.log('Typesctipt is better');
}

////////////////////////////
// Inverse of the above

let likeJavascript3 = true;
if (likeJavascript3 !== true) {
    console.log('Javascript is awesome');
} else {
    console.log('Typesctipt is better');
}

// OR

let likeJavascript4 = true;
if (!likeJavascript4) {
    console.log('Javascript is awesome');
} else {
    console.log('Typesctipt is better');
}

////////////////////////////

let userName;
let userInput = '';

if (userInput) {
    userName = userInput;
} else {
    userName = 'Please enter your name';
}
console.log(userName);

// OR

let userName1;
let userInput1 = '';
// let userInput1 = 'bob';

userName1 = userInput1 || 'Please enter your name'; 
//if userInput is true/truethy it will be assigned to userName, if not 'Please enter your name' will be assigned to userName

console.log(userName1);

////////////////////////////

const num1 = Number("100");
const num2 = Number.parseInt("100.95");
console.log(typeof num1, num1);
console.log(typeof num2, num2);

const num3 = +"100"; //converts string to number
const num4 = +"100.95"; //converts string to decimal number
console.log(typeof num3, num3);
console.log(typeof num4, num4);