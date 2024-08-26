import { useEffect, useState } from "react";
import styles from "./Users.module.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/users")
      .then((res) => res.json())
      .then((result) => setUsers(result.data));
  }, []);
  console.log(users);
  return (
    <div className={styles.container}>
      {users.map((user) => (
        <div key={users.id} className={styles.card}>
          <img src={user.image} alt="student" />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
