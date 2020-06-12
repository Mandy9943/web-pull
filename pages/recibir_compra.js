import React from 'react';
import Head from 'next/head';
import HowDoRecive from '../components/Help/HowDoRecive/HowDoRecive';

export default function recibir_compra() {
    return (
        <div>
            <Head>
                <title>Kiero | Como recibo mi compra</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <HowDoRecive />
        </div>
    )
}
