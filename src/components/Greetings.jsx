import React from "react";

const Greetings = () => {
  const name = "John";
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <h1>{name}</h1>
      <p>{date}</p>
    </div>
  );
};

export default Greetings;
