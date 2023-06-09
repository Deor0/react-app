import useUsers from "./Hooks/useUsers";
import usersServices, { User } from "./services/users-services";

function App() {
  const { users, err, isLoading, setUsers, setErr } = useUsers();

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    usersServices.delete(user.id).catch((err) => {
      setErr(err.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Oshan" };
    setUsers([newUser, ...users]);

    usersServices
      .add<User>(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setErr(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    usersServices.update<User>(updatedUser).catch((err) => {
      setErr(err.message);
      setUsers(originalUser);
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
            <div className="d-flex">
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
