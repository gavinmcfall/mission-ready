console.log('connected');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 6, 7, 8, 9];
console.log("arr1: " + arr1)
console.log("arr2: " + arr2)

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [0, arr3, 6, 7, 8, 9]; //This will put an array inside another array
console.log("Arr4: ", arr4)

const arr5 = [1, 2, 3, 4, 5];
const arr6 = [0, ...arr5, 6, 7, 8, 9]; //This will merge the two arrays
console.log("Arr6: ", arr6)