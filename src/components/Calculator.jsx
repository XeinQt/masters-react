import React from "react";

const Calculator = () => {
  const name = "John bAYLOSIS";

  const multiply = (a, b) => a * b;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{multiply(4, 6)}</h1>
    </div>
  );
};

export default Calculator;
