import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>(url, { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort;
    };
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios.delete(url + "/" + user.id).catch((err) => {
      setErr(err.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Oshan" };
    setUsers([newUser, ...users]);

    axios.post(url, newUser).then(({ data: savedUser }) => {
      setUsers([savedUser, ...users]);
    });
  };

  return (
    <>
      {err && <p className="text-danger">{err}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
