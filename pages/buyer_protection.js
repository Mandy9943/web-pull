import React from 'react';
import Head from 'next/head';
import BuyerProtection from '../components/Help/BuyerProtection/BuyerProtection';

export default function proteccion_comprador() {
    return (
        <div>
            <Head>
                <title>Kiero | Protection de Comprador</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <BuyerProtection />
        </div>
    )
}
