import React from 'react';
import Head from 'next/head';
import SellerProtection from '../components/Help/SellerProtection/SellerProtection';

export default function proteccion_vendedor() {
    return (
        <div>
            <Head>
                <title>Kiero | Protection al Vendedor</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SellerProtection />
        </div>
    )
}
