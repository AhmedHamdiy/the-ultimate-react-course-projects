export default function Friend(onPayement, friend) {
  const isDebt = friend.owes > 0;
  return (
    <li className="friend-card">
      <img src={friend.imgUrl} alt={friend.name} className="friend-img" />
      <h1 className="friend-name">{friend.name}</h1>
      {friend.owes > 0 ? (
        <p className="money" style={{ color: "#45F745" }}>
          {friend.name} owes you {friend.owes}$
        </p>
      ) : friend.owes < 0 ? (
        <p className="money" style={{ color: "#F74545" }}>
          you owe {friend.name} {Math.abs(friend.owes)}$
        </p>
      ) : (
        <p className="money" style={{ color: "#CCCCCC" }}>
          you and owe {friend.name} are Even.
        </p>
      )}
      <button onClick={() => onPayement(friend.name)}>Select</button>
    </li>
  );
}
