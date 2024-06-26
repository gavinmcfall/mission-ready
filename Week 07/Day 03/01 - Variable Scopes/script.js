console.log("Connected!")

// Variable Scope
// JS lets you multi-decalre vars with the same name.

// const paper = 'The NY Times'

// function printer () {
//     const paper = 'The Washington Post'
//     console.log(paper)
// }

// printer();
// console.log(paper) // ReferenceError: paper is not defined


// Variuable Scope, paper is accessable to the child function
// advert is not accessable to the parent function
// function printer2 () {
//     let paper = `The Herald`;

//     if (true) {
//         console.log(paper)
//         let advert = `Superman!`;
//     }
//     console.log(advert);
// }

// printer2(); // Paper should log, advert should not.


// Scope

// Global Scope
// const paper = 'The NY Times'

// Function Scope
// function printer () {
//     const paper = 'The Washington Post'
//     console.log(paper)
// }

// Block Scope
// if (10 < 20) {
//     const paper = 'The Washington Post'
//     console.log(paper)
// }

const writinginstruments = 'pen';
function compose() {
    console.log(writinginstruments);
    function somethingElse () {
        console.log(writinginstruments);
        const drawingInstruments = 'pencil';
        console.log(drawingInstruments);
    
    }
    somethingElse(); //const drawingInstruments is locally scoped
}

compose(); //const writinginstruments is globally scoped

const myName = 'Rob';

function sayHi() {
    const myName = "Sally";

    console.log(myName + " Says Good Morning!")

    function sayHi2() {
        console.log(myName + " Says Good Afternoon!")
    }
    sayHi2(); // Sally Say Good Afternoon!
}

sayHi(); // Sally Say Good Morning!
// sayHi2(); // ReferenceError: sayHi2 is not defined

const num1 = 10000000000;
console.log(num1);
const num2 = 10_000_000_000; // underscore is ignored and is there for human readability
console.log(num2);