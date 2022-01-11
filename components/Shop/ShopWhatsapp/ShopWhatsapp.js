import React from "react";
import Link from "next/link";
import "./ShopWhatsapp.sass";

export default function ShopWhatsapp({ cb }) {
  return (
    <section className="edit-menu">
      <header>
        <h4>Vinculate a Facebook</h4>
        <p>
          Obten toda la información necesaria de tus visitantes y sácale
          provecho a tus campanas de marketing.
        </p>
      </header>
      <main>
        <div>
          <label htmlFor="textarea">
            Copia y pega aqui la etiqueta del sitio web global o el id de
            seguimiento
          </label>
          <Link href="/ayuda">
            <a className="help">Ayuda</a>
          </Link>
        </div>
        <textarea name="textarea" id="textarea" />
        <p>
          Una vez agregues tu código configuraremos el seguimiento de comercio
          electrónico. Para hacerlo funcionar debe ser habilitado desde el
          administrador de Google Analytics.
        </p>
      </main>
      <footer>
        <button
          style={{
            backgroundColor: "#b9b9b9",
            color: "white",
          }}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Confirmar
        </button>
        <button
          style={{
            backgroundColor: "#F3F3F3",
            color: "red",
          }}
          onClick={(e) => {
            cb("start", e);
          }}
        >
          Cancelar
        </button>
      </footer>
    </section>
  );
}
