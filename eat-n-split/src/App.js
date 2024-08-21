import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import FriendsList from "./components/FriendsList";
export default function App() {
  let showAddFriendModal = false;
  const [friend, setFriends] = useState([]);
  function handleAddFriend(friend) {
    setFriends([...FriendsList, friend]);
  }
  function handlePayement(friend) {
    showAddFriendModal = false;
  }
  return (
    <div>
      <FriendsList onAddFriend={handleAddFriend} />
      {showAddFriendModal ? <Modal onPayment={handlePayement} /> : null}
    </div>
  );
}
