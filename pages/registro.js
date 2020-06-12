import React from 'react';
import Head from 'next/head';
import Register from "../components/Register";

export default function registro() {
    return (
        <div>
            <Head>
                <title>Kiero | Registro</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Register/>
        </div>
    )
}
