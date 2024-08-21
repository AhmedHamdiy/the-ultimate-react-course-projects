import { useState } from "react";

export function Modal(friend, onPayment) {
  const [bill, setBill] = useState(0);
  const [mine, setMine] = useState(0);
  const [purchaser, setPurchaser] = useState("me");
  let other = bill - mine;
  return (
    <form className="modal" onSubmit={onPayment}>
      <h1>SPLIT A BILL WITH {friend.name}</h1>
        <div 
      💰️ <label for="bill value"></label>
      <input value={bill} onChange={(e) => setBill(e.target.value)} required />
    </form>
  );
}
