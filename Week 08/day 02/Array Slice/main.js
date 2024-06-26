console.log("Connected")

const icecreamsSlice = ["vanilla", "chocolate", "blueberry"];
const resultsIcecreamsSlice = icecreamsSlice.slice(1);
console.log(resultsIcecreamsSlice); // ["chocolate", "blueberry"]


// EXERCISE: How can I get ["JS"] using the slice() method?
const sliceEx = ["HTML", "CSS", "JS", "React"];
const resultSliceEx = sliceEx.slice(2, 3);
console.log(resultSliceEx); // ["JS"]