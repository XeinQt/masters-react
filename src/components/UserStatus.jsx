import React from "react";

const UserStatus = ({ isLoggedIn, isAdmin }) => {
  if (!isLoggedIn) {
    return <h1>Invalid Passowrd/username</h1>;
  }
  return <h1>{isLoggedIn && isAdmin ? "Welcome Admin" : "Welcome User"}</h1>;
};

export default UserStatus;
