console.log("External script file is working!");

const question1 = `"Shall we go?" she said.`;
const statement1 = `Remember to say "please" 'and' "thank you"`;
const statement2 = 'Remember to say "please" \'and\' "thank you"';
const statement3 = "Remember to say " + '"please" ' + "'and' " + '"thank you"';

console.log("question1: ", question1, question1.length);
console.log("statement1: ", statement1, statement1.length);
console.log("statement2: ", statement2, statement2.length);
console.log("statement3: ", statement3, statement3.length);
console.log("question 1 count: ", question1[7]);
