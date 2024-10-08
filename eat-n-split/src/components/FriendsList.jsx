import React from "react";
import Friend from "./Friend";
import AddFriendModal from "./AddFriendModal";
export default function FriendsList({
  friends,
  onAddFriend,
  onPayment,
  onRemove,
}) {
  return (
    <div className="friendlist-container">
      <ul className={`friendlist ${friends.length > 4 ? "scrollable" : ""}`}>
        {friends.map((friend) => (
          <Friend
            onPayement={onPayment}
            onRemove={onRemove}
            friend={friend}
            key={friend.id}
          />
        ))}
      </ul>
      <AddFriendModal AddFriend={onAddFriend} />
    </div>
  );
}
