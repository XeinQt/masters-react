import React from "react";

const Names = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div>
      {names.map((name, index) => (
        <h1 key={index}>{name}</h1>
      ))}
    </div>
  );
};

export default Names;
