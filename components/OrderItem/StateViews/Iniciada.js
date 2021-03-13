import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCheck } from "@fortawesome/free-solid-svg-icons";
//import Modal from "../../Common/Modal";

export default function Iniciada({ item, onSelect }) {
  return (
    <div>
      <section className="state">
        <a onClick={() => onSelect(item)}>Verificar</a>
      </section>
    </div>
  );
}
