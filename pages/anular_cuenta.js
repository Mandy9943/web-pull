import React from 'react';
import Head from 'next/head';
import CancelAccount from '../components/Help/CancelAccount/CancelAccount';

export default function anular_cuenta() {
    return (
        <div>
            <Head>
                <title>Kiero | Anular cuenta</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CancelAccount />
        </div>
    )
}
