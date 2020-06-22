import React from 'react';
import Head from 'next/head';
import SecurityAccount from '../components/Help/SecurityAccount/SecurityAccount';

export default function seguridad() {
    return (
        <div>
            <Head>
                <title>Kiero | Resguardar seguridad</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SecurityAccount />
        </div>
    )
}
