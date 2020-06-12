import React from 'react';
import Head from 'next/head';
import PaymentWay from '../components/PaymentWay/PaymentWay';

export default function plataforma_de_pago() {
    return (
        <div className="plataforma">
            <Head>
                <title>Kiero | Plataforma de pago</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PaymentWay />
        </div>
    )
}
