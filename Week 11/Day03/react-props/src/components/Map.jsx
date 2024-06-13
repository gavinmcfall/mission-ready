function Map() {
  const myArr = [1, 4, 9, true, "something else"];
  const numbers = [1, 2, 3, 4, 10, 15, 20];

  const addOne = numbers.map(function (num, index) {
    return num + 1;
  });
  console.log(addOne);

  return <div>I'm the map! {addOne}</div>;
}

export default Map;
