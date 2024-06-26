function People() {
  const people = [
    { name: "Gavin", favFood: "Brisket" },
    { name: "Xevithirus", favFood: "Cheese" },
    { name: "Rhya", favFood: "Ribs" },
    { name: "Hanbin", favFood: "Pho" },
    { name: "Reuben", favFood: "Reuben" },
  ];

  const mappedPeople = people.map(function (person, index) {
    return `${index + 1}) ${person.name}, loves ${person.favFood}`;
  });

  console.log(mappedPeople);

  return (
    <div className="people">
      {mappedPeople.map(function (person, index) {
        return <p key={index}>{person}</p>;
      })}
    </div>
  );
}

export default People;

//Look at array sort
