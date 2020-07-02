import React from 'react';
import Head from "next/head";
import ShippingError from '../components/Help/ShippingError/ShippingError';

export default function error_de_envio() {
    return (
        <div>
            <Head>
                <title>Kiero | No llegó el envío</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
            </Head>
            <ShippingError />
        </div>
    )
}
