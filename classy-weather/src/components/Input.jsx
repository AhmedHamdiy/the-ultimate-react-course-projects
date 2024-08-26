import React from "react";
export default function Input({ location, onChangeLocation }) {
  function handleInput(e) {
    e.preventDefault();
    onChangeLocation(e.target.value);
  }
  return (
    <div>
      <input
        id="location"
        type="text"
        placeholder="Search for location..."
        value={location}
        onChange={handleInput}
      />
    </div>
  );
}
