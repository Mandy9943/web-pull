import React from 'react';
import Head from 'next/head';
import PaymentProblem from '../components/Help/PaymentProblem/PaymentProblem';

export default function problemas_de_pago() {
    return (
        <div>
            <Head>
                <title>Kiero | Problemas con el pago</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PaymentProblem />
        </div>
    )
}
