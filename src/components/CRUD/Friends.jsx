import React, { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["rICO", "JOHN"]);

  const addFriends = () => setFriends([...friends, "pterer"]);
  const deleteFriend = () =>
    setFriends(friends.filter((friend) => friend !== "JOHN"));

  const updateFriend = () => {
    setFriends(friends.map((friend) => (friend === "rICO" ? "Rico" : friend)));
  };

  return (
    <div>
      <h1>Friends</h1>
      <button onClick={addFriends}>Add Friends</button>
      <button onClick={deleteFriend}>Delete Friends</button>
      <button onClick={updateFriend}>Edit Friends</button>

      <h1>Friends</h1>
      {friends.map((friend, index) => {
        return <li key={index}>{friend}</li>;
      })}
    </div>
  );
};

export default Friends;
