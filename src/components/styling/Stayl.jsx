import React from "react";
import "../../../index.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
const Stayl = () => {
  return (
    <div>
      <section>
        <FaHome
          style={{
            color: "red",
            backgroundColor: "lightblue",
            padding: "10px",
            fontSize: "60px",
            borderRadius: "100%",
          }}
        />
        <FaCartShopping />
        <h1 className="logo">Hello lord</h1>
      </section>
    </div>
  );
};

export default Stayl;
