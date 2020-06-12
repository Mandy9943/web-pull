import React from 'react';
import Head from "next/head";
import ShippingError from '../components/Help/ShippingError/ShippingError';

export default function error_de_envio() {
    return (
        <div>
            <Head>
                <title>Kiero | No llegó el envío</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ShippingError />
        </div>
    )
}
