/* eslint-disable react/prop-types */

import { useState } from "react";
export default function Box({ children, boxSize }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box" style={{ width: boxSize }}>
      <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
