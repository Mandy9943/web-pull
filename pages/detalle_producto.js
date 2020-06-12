import React from "react";
import Head from "next/head";
import Detail from "./../components/ProductDetail";

export default function detalle_producto() {
  return (
    <div>
      <Head>
        <title>Kiero | Producto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Detail />
    </div>
  );
}
