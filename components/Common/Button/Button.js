import React from 'react';
import "./Button.css";

export default function Button({text, onClick, type}) {
    return (
        <button onClick={onClick} type={type} className="main-button">
            <p>{text}</p>
        </button>
    )
}
