import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(({ id, name, age }) => (
          <li key={id}>
            {name} - {age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
