import React from "react";

const ProductInfo = () => {
  const products = [
    {
      name: "Smart Watch",
      price: 199.99,
      description: "A sleek smart watch with multiple features.",
      features: [
        "Heart Rate Monitor",
        "GPS",
        "Water Resistant",
        "Notifications",
      ],
    },
    {
      name: "Wireless Earbuds",
      price: 99.99,
      description: "High-quality wireless earbuds with noise cancellation.",
      features: [
        "Noise Cancellation",
        "Long Battery Life",
        "Touch Controls",
        "Water Resistant",
      ],
    },
    {
      name: "Fitness Tracker",
      price: 49.99,
      description:
        "A compact fitness tracker to monitor your daily activities.",
      features: [
        "Step Counter",
        "Sleep Tracking",
        "Calorie Burn",
        "Water Resistant",
      ],
    },
    {
      name: "Smart Watch",
      price: 199.99,
      description: "A sleek smart watch with multiple features.",
      features: [
        "Heart Rate Monitor",
        "GPS",
        "Water Resistant",
        "Notifications",
      ],
    },
  ];

  return (
    <main>
      {products.map(({ name, price, description, features }, index) => (
        <div key={index}>
          <h1>{name}</h1>
          <h1>{price}</h1>
          <p>{description}</p>
          <ul>
            <li>{features}</li>
          </ul>
        </div>
      ))}
    </main>
  );
};

export default ProductInfo;
