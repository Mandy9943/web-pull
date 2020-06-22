import React from 'react';
import Head from 'next/head';
import EmailChange from '../components/Help/EmailChange/EmailChange';

export default function cambiar_correo() {
    return (
        <div>
            <Head>
                <title>Kiero | Cambiar mi corre</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <EmailChange />
        </div>
    )
}
