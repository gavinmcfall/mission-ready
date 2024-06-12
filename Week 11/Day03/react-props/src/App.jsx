import "./App.css";
import Car from "./components/Car";
import Person from "./components/Person";

function App() {
  const myObj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      companyName: "Romaguera-Crona",
      catchPhrase: "It's collaboration time",
      bs: "harness real-time e-markets",
    },
  };

  const { username, email } = myObj;
  const [first, second, third] = ["Claire", "Gabriel", "Ben"];
  console.log(first, second, third);

  return (
    <div>
      <Person name="Gavin" age="37" />
    </div>
  );
}

export default App;
