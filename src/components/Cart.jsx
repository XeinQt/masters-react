import React from "react";

const Cart = () => {
  const products = ["mouse", "keyboard", "head phones", "bugas"];
  return (
    <div>
      <h1>My Products</h1>

      {products.length > 0 ? (
        <h2>You have {products.length} in the basket</h2>
      ) : (
        <h2>You dont have any products in your cart</h2>
      )}

      <ul>
        {products.map((product, index) => {
          return <li key={index}>{product}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
