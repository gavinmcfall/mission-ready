function Map() {
  const myArr = [1, 4, 9, true, "something else"];
  const numbers = [1, 2, 3, 4, 10, 15, 20];
  const fruits = ["apple", "mango", "orange"];

  const addOne = numbers.map(function (num, index) {
    return num + 1;
  });
  console.log(addOne);

  const mappedFruits = fruits.map((fruit, index) => {
    return `${index}. ${fruit}`;
  });
  
  console.log(mappedFruits);

  return <div>I'm the map! {addOne} | {mappedFruits}</div>;
}

export default Map;
