import React from "react";

const Valid = ({ isValid }) => {
  return <h1>{isValid ? "Valid Password" : "Invalid Passowrd"}</h1>;
};
export default Valid;
