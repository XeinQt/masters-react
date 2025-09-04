import React from "react";
import Props from "./Props";
const Student = () => {
  const students = [
    {
      image:
        "https://i.pinimg.com/1200x/56/82/ed/5682ed03889df5a5b64ccc2d143a8a0a.jpg",
      name: "riico",
      age: 20,
      gender: "Male",
    },
    {
      image:
        "https://i.pinimg.com/736x/a5/45/bb/a545bb077b913330e89d887bd9041b96.jpg",
      name: "john",
      age: 20,
      gender: "Male",
    },
    {
      image:
        "https://i.pinimg.com/736x/bb/7b/10/bb7b100887f7c4d85704c9d658d4f432.jpg",
      name: "Joy",
      age: 20,
      gender: "Female",
    },
  ];

  return (
    <div>
      {students.map(({ image, name, age, gender }, index) => (
        <Props
          key={index}
          image={image}
          name={name}
          age={age}
          gender={gender}
        />
      ))}
    </div>
  );
};

export default Student;
