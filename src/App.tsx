import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get<User[]>(url)
      .then((res) => setUsers(res.data))
      .catch((err) => setErr(err.message));
  }, []);

  return (
    <>
      {err && <p className="text-danger">{err}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
