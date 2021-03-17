import React, { useState } from "react";

export default function Iniciada({ item, onSelect }) {
  return (
    <div>
      <section className="state">
        <a onClick={() => onSelect(item)}>Verificar</a>
      </section>
    </div>
  );
}
