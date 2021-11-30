import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Counter.css";
const Counter = ({ onCount }) => {
  const [count, setCount] = useState(1);
  const handleCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (onCount) {
      onCount(count);
    }
  }, [count]);
  return (
    <div id="counter-detail-mobile">
      <span className="text">Cant.</span>
      <span className="number">{count}</span>
      <span className="plus-icon" onClick={handleCount}>
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </div>
  );
};

export default Counter;
