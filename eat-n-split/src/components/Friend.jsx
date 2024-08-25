import React from "react";

export default function Friend({ onPayement, friend }) {
  return (
    <li className="friend-card">
      <div className="friend-details">
        <img src={friend.imgUrl} alt={friend.name} className="friend-img" />
        <h4 className="friend-name">{friend.name}</h4>
      </div>
      <div className="friend-details">
        {friend.balance > 0 ? (
          <p className="money" style={{ color: "#45F745" }}>
            {friend.name} owes you {friend.balance}$
          </p>
        ) : friend.balance < 0 ? (
          <p className="money" style={{ color: "#c7253e" }}>
            you owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        ) : (
          <p className="money" style={{ color: "#CCCCCC" }}>
            you and {friend.name} are Even.
          </p>
        )}
      </div>
      <button className="btn split" onClick={() => onPayement(friend)}>
        Select
      </button>
    </li>
  );
}
