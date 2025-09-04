import React from "react";

const UseStates = () => {
  const [count, setCount] = React.useState(0);

  const click = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={click}>Click ME</button>
    </div>
  );
};

export default UseStates;
