console.log("Connected!");

const dog = {
  name: "Nova",
  weight: 8,
  breed: "Miniature Schnauzer",
  favActivities: ["walks", "Naping", "Bark & Chase"],
};

console.log(
  `${dog.name} is a ${dog.breed} and weighs ${dog.weight} kgs, Her favorite activity is ${dog.favActivities[0]}.`
);

console.log("Dogs Name: " + dog["name"]);

const rectangle = {
  length: 10,
  width: 50,
};

console.log(
  "The area of my rectangle is " +
    rectangle["length"] * rectangle["width"] +
    "cm²"
);

const person = {
  firstName: "Gavin",
  lastName: "McFall",
  favouriteNumber: 3,
  favouriteDay: "Friday",
};
console.log(person);
person.favouriteFood = "Phad Thai";
console.log(person);

delete person.favouriteDay;
person.favouriteNumber = person.favouriteNumber * 2;
console.log(person);
