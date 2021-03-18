import React, { useState } from "react";

export default function Iniciada({ item, onSelect }) {
  return (
    <div>
      <section className="state">
        <a style={{ cursor: "pointer" }} onClick={() => onSelect(item)}>
          Verificar
        </a>
      </section>
    </div>
  );
}
