import React from "react";

const Greetingss = ({ timeofDay }) => {
  return <h1>{timeofDay === "morning" ? "Good morning" : "Good Afternoon"}</h1>;
};

export default Greetingss;
