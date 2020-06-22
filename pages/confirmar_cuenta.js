import React from 'react';
import Head from 'next/head';
import ConfirmAccount from '../components/Help/ConfirmAccount/ConfirmAccount';

export default function confirmar_cuenta() {
    return (
        <div>
            <Head>
                <title>Kiero | Confirmar cuenta</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ConfirmAccount />
        </div>
    )
}
