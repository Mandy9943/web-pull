import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../lib/hooks/redux";
import "./Counter.module.css";

import { setCount as setCountAction } from "../../../../redux/feature/pay/paySlice";

const Counter = ({ stock }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(stock === 0 ? stock : 1);
  const handleAdd = () => {
    const limitCount = stock ?? 6;
    if (count < limitCount) {
      setCount(count + 1);
    }
  };
  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    dispatch(setCountAction(count));
  }, [count, dispatch]);

  return (
    <div id="counter-detail-mobile">
      <span className="text">Cant.</span>
      {count >= 2 && (
        <span className="sub-icon" onClick={handleSub}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
      )}
      <span className="number">{count}</span>
      {!stock <= 1 ? (
        <span className="sub-icon" onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      ) : null}
    </div>
  );
};

export default Counter;
