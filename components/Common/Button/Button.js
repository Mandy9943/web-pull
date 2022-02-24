import React from "react";
import "./Button.css";

export default function Button({ text, onClick, type, fontSize }) {
  return (
    <button onClick={onClick} type={type} className={`${fontSize} main-button`}>
      <p>{text}</p>
    </button>
  );
}
