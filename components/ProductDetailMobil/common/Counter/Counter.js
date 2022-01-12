import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks/redux";
import "./Counter.module.css";

import {
  selectCount,
  setCount as setCountAction,
} from "../../../../redux/feature/pay/paySlice";

const Counter = ({ stock }) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const handleAdd = () => {
    const limitCount = stock ?? 6;
    if (count < limitCount) {
      dispatch(setCountAction(count + 1));
    }
  };
  const handleSub = () => {
    if (count > 0) {
      dispatch(setCountAction(count - 1));
    }
  };
  useEffect(() => {
    dispatch(setCountAction(stock === 0 ? stock : 1));
  }, [dispatch, stock]);

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
