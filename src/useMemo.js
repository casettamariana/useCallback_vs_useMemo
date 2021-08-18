import "./styles.css";
import * as React from "react";
import axios from "axios";

// userCallback(fn, deps)
// useMemo(() => fn, deps)

const filter = (users, query) => {
  console.log("---- filter -----");
  return users.filter((user) => user.name.toLowerCase().includes(query));
};

const UserList = ({ users, query }) => {
  const filtrered = React.useMemo(() => filter(users, query), [
    users,
    query
  ]);
  return filtrered.map((user) => <div key={user.id}>{user.name}</div>);
};

export default function UseMemo() {
  const [count, setCount] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const getUsers = React.useCallback(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(data);
  }, []);

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(ev) => setQuery(ev.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <UserList users={users} query={query} />
    </div>
  );
}
