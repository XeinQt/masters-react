import React from "react";

const Props = ({ image, name, age, gender }) => {
  return (
    <div>
      <img className="w-sm" src={image} alt="" />
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{gender}</h1>
    </div>
  );
};

export default Props;
