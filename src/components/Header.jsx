import React from "react";
import Form from "./Form";

const Header = () => {
  return (
    <div>
      <h1 className="bg-red-200">Logo</h1>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact Us</a>
      </nav>
      <Form />
    </div>
  );
};

export default Header;
