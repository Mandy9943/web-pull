import React from 'react';
import Head from 'next/head';
import ForgotPass from "../components/ForgotPass";

export default function recuperar() {
    return (
        <div className="forgot-page">
            <Head>
                <title>Kiero | Recuperar Contraseña</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ForgotPass/>
        </div>
    )
}
