import React from 'react';
import Head from "next/head";
import HowToPay from '../components/Help/HowToPay/HowToPay';

export default function como_pagar() {
    return (
        <div>
            <Head>
                <title>Kiero | Cuenta de usuario</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <HowToPay />
        </div>
    )
}
