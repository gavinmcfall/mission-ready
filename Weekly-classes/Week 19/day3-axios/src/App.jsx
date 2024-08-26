import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((result) => {
        setUsers(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {users &&
        users.map((user) => (
          <h3 key={user.id}>
            {user.first_name} {user.last_name}
          </h3>
        ))}
    </>
  );
}

export default App;
