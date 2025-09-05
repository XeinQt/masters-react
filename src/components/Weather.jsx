import React from "react";

const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <h1>Its Cold outside</h1>;
  } else if (temperature <= 25) {
    return <h1>Its nice outise</h1>;
  } else if (temperature > 25) {
    return <h1>It is hot in outside</h1>;
  }
  return (
    <div>
      <h1>{temperature}</h1>
    </div>
  );
};

export default Weather;
