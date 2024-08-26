console.log("Don't Panic!");

const foods = [
  "Lousiana Style Pork Ribs",
  "Brisket",
  "Beef Shorties",
  "Pulled Lamb",
  "Pork Money Muscle",
];
console.log(foods);

console.log(foods[0]);

let mountains = ["Everest", "Fuji", "Nanga Parbat"];
console.log(mountains);

console.log(mountains.length);

let numArray = [5, 6, 7, 8, 9, 10];
console.log(numArray);

let arrayAvg =
  (numArray[0] +
    numArray[1] +
    numArray[2] +
    numArray[3] +
    numArray[4] +
    numArray[5]) /
  numArray.length;
console.log(arrayAvg);

const recipe = {
  title: "Brisket",
  servings: 10,
  ingredients: [
    "Brisket",
    "Rum & Que Intensify",
    "Rum & Que Blackout",
    "Smoke Wagyu Tallow",
  ],
};
console.log(recipe);
console.log(recipe.ingredients.length);

recipe.ingredients.push("MSG");
console.log(recipe);



