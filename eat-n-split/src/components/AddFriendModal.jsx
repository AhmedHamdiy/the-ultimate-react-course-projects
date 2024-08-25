import React, { useState } from "react";
export default function AddFriendModal({ AddFriend }) {
  const [name, setName] = useState("");
  function onAddFriend(e) {
    e.preventDefault();
    AddFriend(name);
    setName("");
  }
  return (
    <form onSubmit={onAddFriend} className="add-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        required
      />
      <input type="submit" value="Add New Friend" className="btn" />
    </form>
  );
}
