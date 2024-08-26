console.log('Connected!')

const myObj = {
    name: "Rob",
    something: true,
    obj: { name: "Sally" },
    favFoods: ['pizza', 'tacos', 'sushi'],
}

console.log(myObj.something);
console.log(myObj['something']);
console.log(myObj.obj.name);
console.log(myObj['obj'].name);

console.log(myObj.favFoods[0]);