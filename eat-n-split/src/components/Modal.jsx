import React, { useState } from "react";

export default function Modal({ friend, onPayment }) {
  const [bill, setBill] = useState(0);
  const [mine, setMine] = useState(0);
  const [purchaser, setPurchaser] = useState("me");

  let other = bill - mine;
  function handlePayment(e) {
    e.preventDefault();
    onPayment(purchaser, other);
  }
  return (
    <form className="modal" onSubmit={handlePayment}>
      <h1>SPLIT A BILL WITH</h1>
      <h1>
        <em> {friend.name} </em>
      </h1>
      <div className="input-field">
        💰️
        <input
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          name="bill value"
          required
        />
      </div>
      <div className="input-field">
        👨‍🦱️
        <input
          value={mine}
          onChange={(e) => setMine(e.target.value)}
          name="mine"
          required
        />
      </div>
      <div className="input-field">
        👬️
        <input value={other} disabled name="other" />
      </div>
      <div className="input-field">
        💲️
        <select
          value={purchaser}
          name="purchaser"
          required
          onChange={(e) => setPurchaser(e.target.value)}
        >
          <option value="me">me</option>
          <option value="other">{friend.name}</option>
        </select>
      </div>
      <input value="Split the bill" type="submit" className="btn" />
    </form>
  );
}
