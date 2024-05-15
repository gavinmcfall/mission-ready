console.log("connected")

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // NaN - ERROR

function multiply2(a, b = 1) {
    return a * b;
}
console.log(multiply2(5, 2)); // 10
console.log(multiply2(5)); // 5