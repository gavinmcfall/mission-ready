console.log('connected');
//
//
console.log('------------------------');
console.log('Array Methods');

const icecreams = ['vanilla', 'chocolate', 'matcha']; // array
const pushMethod = icecreams.push('rainbow'); // push method adds an element to the end of the array
console.log(icecreams);
console.log(pushMethod);

const popMethod = icecreams.pop(); // pop method removes the last element of the array
console.log(icecreams);
console.log(popMethod);

const unshiftMethod = icecreams.unshift('tiramisu'); // unshift method adds an element to the beginning of the array
console.log(icecreams);
console.log(unshiftMethod);

const shiftMethod = icecreams.shift(); // shift method removes the first element of the array
console.log(icecreams);
console.log(shiftMethod);


// Split Methods
console.log('------------------------');
console.log('Split Methods');

const icecreamSplit = "vanilla chocolate matcha"; // array
const resultsIcecreamSplit = icecreamSplit.toUpperCase().split(" ", 2); // split method splits a string into an array of substrings
console.log(icecreamSplit); // vanilla chocolate matcha
console.log(resultsIcecreamSplit); // [ 'vanilla', 'chocolate' ]

// Array Joins
console.log('------------------------');
console.log('Array Joins');

const icecreamJoin = ["vanilla", "chocolate", "matcha"]; // array
const resultsIcecreamJoin = icecreamJoin.join(","); // join method joins all elements of an array into a string
console.log(icecreamJoin); // [ 'vanilla', 'chocolate', 'matcha' ]
console.log(resultsIcecreamJoin); // vanilla chocolate matcha

// Array Slice
console.log('------------------------');
console.log('Array Slice');

const icecreamSlice = ["vanilla", "chocolate", "blueberry"]; // array
const resultsIcecreamSlice = icecreamSlice.slice(1, 3); // slice method returns a shallow copy of a portion of an array into a new array object
console.log(icecreamSlice); // [ 'vanilla', 'chocolate', 'blueberry' ]
console.log(resultsIcecreamSlice); // [ 'chocolate', 'blueberry' ]

const sliceEX = ["html", "css", "JS", "react"]; // array
const resultsSliceEX = sliceEX.slice(2, 3); // slice method returns a shallow copy of a portion of an array into a new array object
console.log(sliceEX); // [ 'html', 'css', 'JS', 'react' ]
console.log(resultsSliceEX); // [ 'react' ]

// Array Splice
console.log('------------------------');
console.log('Array Splice');

const numerSplice = [0, 1, 2, 3, 4, 5]; // array
const resultsNumerSplice = numerSplice.splice(1, 2,"pen", "pencil"); // splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

console.log(resultsNumerSplice); // [ 1 ]
console.log(numerSplice); // [ 0, 'pen', 2, 3, 4, 5 ]

const spliceEX = ["html", "css", "react"]; // array
console.log(spliceEX); // [ 'html', 'css', 'react' ]
const resultsSpliceEX = spliceEX.splice(2,0, "JS"); // splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(spliceEX); // [ 'html', 'css', 'JS', 'react' ]