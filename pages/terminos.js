import React from 'react';
import Head from 'next/head';
import Terms from './../components/Terms';
import favicon from '../assets/img/favicon.svg';

export default function terminos() {
  return (
    <div>
      <Head>
        <title>Kiero - Términos y condiciones</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="noodp" />
        <meta name="robots" content="noydir" />
        <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
        <meta name="Keywords" content="Tienda en Línea" />
        <link rel="icon" href={favicon} type="image/png" />
      </Head>
      <Terms />
    </div>
  );
}
