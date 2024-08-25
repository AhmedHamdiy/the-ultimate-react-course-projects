import React, { useState } from "react";
import Modal from "./components/Modal";
import FriendsList from "./components/FriendsList";
const DefaultFriends = [
  {
    name: "John Doe",
    id: 1,
    imgUrl: "https://i.pravatar.cc/70?=1",
    balance: 50,
  },
  {
    id: 2,
    imgUrl: "https://i.pravatar.cc/70?=2",
    balance: 0,
    name: "Jane Doe",
  },
  {
    name: "Janea Doe",
    id: 3,
    imgUrl: "https://i.pravatar.cc/70?=3",
    balance: -20,
  },
];
export default function App() {
  const [friends, setFriends] = useState(DefaultFriends);
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
        friends={friends}
        onPayment={openModal}
      />
      {showModal ? (
        <Modal onPayment={closeModal} friend={selectedFriend} />
      ) : null}
    </div>
  );
}
