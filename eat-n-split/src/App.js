import React, { useState } from "react";
import Modal from "./components/Modal";
import FriendsList from "./components/FriendsList";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleAddFriend(friendName) {
    const newFriend = {
      name: friendName,
      id: friends.length + 1,
      imgUrl: `https://i.pravatar.cc/70?=${Math.random()}`,
      balance: 0,
    };
    setFriends([...friends, newFriend]);
  }

  function handleRemoveFriend(friendID) {
    const updatedFriends = friends.filter((friend) => friend.id !== friendID);
    setFriends(updatedFriends);
  }

  function openModal(friend) {
    setShowModal(true);
    setSelectedFriend(friend);
  }
  function closeModal(purchaser, other) {
    const newFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return {
          ...friend,
          balance:
            purchaser === "me"
              ? friend.balance + other
              : friend.balance - other,
        };
      }
      return friend;
    });
    setFriends(newFriends);
    setShowModal(false);
  }

  return (
    <div className="container">
      <FriendsList
        onAddFriend={handleAddFriend}
        onRemove={handleRemoveFriend}
        friends={friends}
        onPayment={openModal}
      />
      {showModal ? (
        <Modal
          key={selectedFriend.name}
          onPayment={closeModal}
          friend={selectedFriend}
        />
      ) : null}
    </div>
  );
}
