import React from 'react';
import Head from 'next/head';
import SellerReputation from '../components/Help/SellerReputation/SellerReputation';

export default function reputacion_de_vendedor() {
    return (
        <div>
            <Head>
                <title>Kiero | Reputación del vendedor</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SellerReputation />
        </div>
    )
}
